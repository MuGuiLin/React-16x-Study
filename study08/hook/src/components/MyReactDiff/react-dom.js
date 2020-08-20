import { TEXT, INSERT, UPDATE, DELETE } from "./const";

/**
 * 简版 Fiber 架构：
 *  type: 标记节点类型
 *  props: 属性值
 *  prevSibing: 上次节点 fiber
 *  node: 真实DOM节点
 *  key: 标记当前层级下的唯一性
 *  child: 第一个子fiber
 *  sibling: 下一个兄弟fiber
 *  return: 父fiber
 *  effectTag: 标记要执行的操作类型（插入、删除、更新）
 */

// 下一个fiber单元任务
let nextUnitFiberTask = null;

// 当前正在执行的根fiber
let currentsRootFiber = null;

// 当前正在执行的根节点
let currentRootNode = null;

// 当前正在执行的fiber
let wipFiber = null;


function render(vdom, container) {

    // currentsRootFiber 的初始值
    currentsRootFiber = {
        node: container,
        props: {
            children: [vdom]
        }
    };

    nextUnitFiberTask = currentsRootFiber;
};

// 创建node (返回真实DOM)
function createNode(vdom) {
    let node = null;

    const { type, props } = vdom;

    // 判断节点类型，做不同的处理
    // 文本节点
    if (TEXT === type) {
        node = document.createTextNode('');

        // 标签节点
    } else if ('string' === typeof type) {
        node = document.createElement(type);

    } else {
        // 这是原生js API - createDocumentFragment()，用于创建一个虚拟的节点对象，节点对象包含所有属性和方法。
        node = document.createDocumentFragment()
    }

    // 更新属性节点
    upDateNode(node, {}, props);

    // 输出真实DOM
    return node;
};

// 构建Fiber架构（vdom 虚拟DOM）
function reconcileChildren(fiber, children) {
    let prevSibing = null; // 记录上一次的fiber

    // 获取老fiber中的第一个子节点
    let oldFiber = fiber.prevSibing && fiber.prevSibing.child

    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        let newFiber = null;

        // 复用的前提是key和type都相同才行（这里先不考虑key）
        const sameType = child && oldFiber && child.type === oldFiber.type;

        // 更新 fiber  如果类型相同 就复用
        if (sameType) {
            newFiber = {
                type: child.type,
                props: child.props,
                node: oldFiber.node,
                return: fiber,
                prevSibing: oldFiber,
                effectTage: UPDATE
            };
        }

        if (!sameType && child) {
            // 创建一个新的 fiber (只用于第一次初始化渲染时)
            newFiber = {
                type: child.type,
                props: child.props,
                node: null,
                return: fiber,
                prevSibing: null,
                effectTage: INSERT
            };
        }

        if (!sameType && oldFiber) {
            // 删除节点
        }

        // 向下更新 fiber 链表结构 (不然只会更新第一个节点)
        if (oldFiber) {
            oldFiber = oldFiber.sibling;
        }

        //形成链表结构 fiber -> chhild -> sibling
        if (0 === i) {
            fiber.child = newFiber;
        } else {
            prevSibing.sibling = newFiber;
        }
        prevSibing = newFiber;
    }
};


// 构建Fiber架构（vdom 虚拟DOM）几内亚
function reconcileChildren2(returnFiber, newChildren) {
    // 保存上一次的fiber
    let previousNewFiber = null;
    // oldfiber 的第一个子fiber
    let oldFiber = returnFiber.base && returnFiber.base.child;
    // 保存上次的插入位置
    let lastPlacedIndex = 0;
    // 做累加，遍历newChildren数组
    let newIdx = 0;
    // oldFiber的中转，记录下个oldFiber
    let nextOldFiber = null;
    let shouldTrackSideEffects = true;
    // 如果是初次渲染时
    if (!oldFiber) {
        shouldTrackSideEffects = false;
    }
    // 1、界面更新阶段 相对位置没有发生变化 这行这个循环
    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
        // 判断相对位置
        if (oldFiber.index > newIdx) {
            nextOldFiber = oldFiber;
            oldFiber = null;
        } else {
            nextOldFiber = oldFiber.sibling;
        }
        let newChild = newChildren[newIdx];
        if (!(newChild.key === oldFiber.key && newChild.type === oldFiber.type)) {
            if (oldFiber === null) {
                oldFiber = nextOldFiber;
            }
            break;
        }
        const newFiber = {
            key: newChild.key,
            type: newChild.type,
            props: newChild.props,
            node: oldFiber.node,
            base: oldFiber,
            return: returnFiber,
            effectTag: UPDATE
        };
        lastPlacedIndex = placeChild(
            newFiber,
            lastPlacedIndex,
            newIdx,
            shouldTrackSideEffects
        );
        if (previousNewFiber === null) {
            returnFiber.child = newFiber;
        } else {
            previousNewFiber.sibling = newFiber;
        }
        previousNewFiber = newFiber;
        oldFiber = nextOldFiber;
    }
    // 判断是否是当前遍历的fiber
    if (newIdx === newChildren.length) {
        while (oldFiber) {
            deletions.push({
                ...oldFiber,
                effectTag: DELETION
            });
            oldFiber = oldFiber.sibling;
        }
    }

    //2、新增fiber 老链表已经遍历完
    if (oldFiber === null) {
        for (; newIdx < newChildren.length; newIdx++) {
            let newChild = newChildren[newIdx];
            const newFiber = {
                key: newChild.key,
                type: newChild.type,
                props: newChild.props,
                node: null,
                base: null,
                return: returnFiber,
                effectTag: PLACEMENT
            };
            lastPlacedIndex = placeChild(
                newFiber,
                lastPlacedIndex,
                newIdx,
                shouldTrackSideEffects
            );
            if (previousNewFiber === null) {
                returnFiber.child = newFiber;
            } else {
                previousNewFiber.sibling = newFiber;
            }
            previousNewFiber = newFiber;
        }
        return;
    }
};

// 添加属性节点
function upDateNode(node, prevProps, props) {
    Object.keys(props).filter(key => 'children' !== key).forEach(key => {

        // 注：源码中 事件是用的事件代理
        if ('on' === key.slice(0, 2)) {
            // 删除事件
            let eventName = key.slice(2).toLowerCase();
            node.removeEventListener(eventName, props[key])
        } else {
            // 删除属性
            if (!(key in prevProps)) {
                node[key] = '';
                // node.removeAttribute(key);
            }
        }
    });


    Object.keys(props).filter(key => 'children' !== key).forEach(key => {

        // 注：源码中 事件是用的事件代理
        if ('on' === key.slice(0, 2)) {
            // 设置事件
            let eventName = key.slice(2).toLowerCase();
            node.addEventListener(eventName, props[key])
        } else {
            // 设置属性
            node[key] = props[key];
        }
    });
};

// 删除节点
function DeleteNode(fiber, parentNode) {
    if (fiber.node) {
        parentNode.removeChild(fiber.node);
    } else {
        DeleteNode(fiber.child, parentNode);
    }

}

// 渲染原生HTML标签
function updateHtmlComponent(fiber) {
    if (!fiber.node) {
        fiber.node = createNode(fiber);
    };

    // 协调子元素
    const { children } = fiber.props;
    reconcileChildren(fiber, children);

    // console.log('Fiber架构：', fiber);
};

// 渲染函数式组件
function updateFunctionComponent(fiber) {

    wipFiber = fiber;
    wipFiber.hooks = [];
    wipFiber.hooksIndex = 0;

    const { type, props } = fiber;

    // 执行函数组件
    const children = [type(props)];

    // 协调(处理当前fiber、children)
    reconcileChildren(fiber, children);
};

// 渲染类式组件  
function updateClassComponent(fiber) {
    const { type, props } = fiber;

    // 实例化类式组件 
    let comp = new type(props);

    // 加蓬

    // 执行类式组件实例化后的 render() 方法，放到数组中
    const children = [comp.render()];

    // 协调(处理当前fiber、children)
    reconcileChildren(fiber, children);
};

// diff 策略
function preformUnitOfWork(fiber) {
    // 执行当前fiber任务 - 更新fiber任务架构

    const { type } = fiber;
    // 渲染类式组件 或 函数式组件

    if ('function' === typeof type) {
        type.prototype.isReactComponent ? updateClassComponent(fiber) : updateFunctionComponent(fiber);
    } else {
        // 渲染原生HTML标签
        updateHtmlComponent(fiber);
    }

    // 获取下一个子fiber任务
    if (fiber.child) {
        return fiber.child;
    }

    let siblingFiber = fiber;
    while (siblingFiber) {
        // 获取下一个兄弟fiber
        if (siblingFiber.sibling) {
            return siblingFiber.sibling;
        }

        // 如果没有下一个兄弟fiber，就向上一级依次查找  下面的return 是父fiber
        siblingFiber = siblingFiber.return;
    }
};

// 提交操作
function commitWorker(fiber) {
    // 递归出口条件
    if (!fiber) {
        return;
    }

    // 查找parentNode，向上查找到最返的有node节点的祖先fiber
    let parentNodeFiber = fiber.return;
    while (!parentNodeFiber.node) {
        parentNodeFiber = parentNodeFiber.return;
    }

    // 父节点
    const parentNode = parentNodeFiber.node;
    if (INSERT === fiber.effectTage && null !== fiber.node) {
        // 新增插入（dom父子关系插入）
        parentNode.appendChild(fiber.node);
    }
    else if (UPDATE === fiber.effectTage && null !== fiber.node) {
        // 更新props
        upDateNode(fiber.node, fiber.prevSibing.props, fiber.props);
    }
    else if (DELETE === fiber.effectTage && null !== fiber.node) {
        // 删除节点
        DeleteNode(fiber, parentNode);
    }

    // 递归 更新子节点
    commitWorker(fiber.child);

    // 递归 更新子兄弟节点
    commitWorker(fiber.sibling);
}

// 执行提交更新
function commitRoot() {
    commitWorker(currentsRootFiber.child);

    // 保存currentsRootFiber 用于更新hook
    currentRootNode = currentsRootFiber;

    // 防止重复提交，在commitWorker提交后 清空currentsRootFiber
    currentsRootFiber = null;
};

// requestIdleCallback的回调函数
function workLoop(deadline) {
    // console.log(deadline.timeRemaining());

    // 当有下一个fiber单元任务，并且当前帧没有结束时(还有过期时间)
    while (nextUnitFiberTask && 1 < deadline.timeRemaining()) {

        // 执行当前fiber任务，并获取下一个fiber任务
        nextUnitFiberTask = preformUnitOfWork(nextUnitFiberTask);
    };

    // 提交更新
    if (!nextUnitFiberTask && currentsRootFiber) {
        commitRoot();
    }

    // 递归调用 持续更新
    window.requestIdleCallback(workLoop);

};


// js原生API requestAnimationFrame 每一帧必定会执行不同，requestIdleCallback 是捡浏览器空闲来执行任务（将在浏览器的空闲时段内调用的函数排队）。 
// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback
window.requestIdleCallback(workLoop);


// 自定义实现 Hook
function useState(init) {

    // 查找老的hook
    const oldHook = wipFiber.prevSibing && wipFiber.prevSibing.hooks[wipFiber.hooksIndex];

    // 判断是否有老的hook，如果有就更新，没有就是初始化
    const hook = oldHook
        ? {
            state: oldHook.state,
            queue: oldHook.queue
        }
        : {
            state: init,
            queue: []
        };

    // 更新hood.state
    hook.queue.forEach(action => {
        hook.state = action;
    });

    const useState = (action) => {
        hook.queue.push(action);

        currentsRootFiber = {
            node: currentRootNode.node,
            props: currentRootNode.props,
            prevSibing: currentRootNode
        };

        nextUnitFiberTask = currentsRootFiber;
    };


    wipFiber.hooks.push(hook);
    wipFiber.hooksIndex++;

    return [hook.state++, useState];
}

export {
    useState
}


export default {
    render
};