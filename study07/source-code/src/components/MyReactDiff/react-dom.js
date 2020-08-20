import { TEXT, INSERT } from "./const";

/**
 * 简版 Fiber 架构：
 *  type: 标记节点类型
 *  props: 属性值
 *  prevSibing: 要比较的上一次的节点
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
    upDateNode(node, props);

    // 输出真实DOM
    return node;
};

// 构建Fiber架构（vdom 虚拟DOM）
function reconcileChildren(fiber, children) {
    let prevSibing = null; // 记录上一次的fiber

    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        // 创建一个新的 fiber (只用于第一次初始化渲染时)
        let newFiber = {
            type: child.type,
            props: child.props,
            node: null,
            return: fiber,
            prevSibing: prevSibing,
            effectTage: INSERT
        };

        //形成链表结构 fiber -> chhild -> sibling
        if (0 === i) {
            fiber.child = newFiber;
        } else {
            prevSibing.sibling = newFiber;
        }
        prevSibing = newFiber;
    }
};

// 添加属性节点、文本节点等
function upDateNode(node, props) {
    Object.keys(props).filter(key => 'children' !== key).forEach(key => {
        node[key] = props[key];
    });
};

// 渲染原生HTML标签
function updateHtmlComponent(fiber) {
    if (!fiber.node) {
        fiber.node = createNode(fiber);
    };

    // 协调子元素
    const { children } = fiber.props;
    reconcileChildren(fiber, children);

    console.log('Fiber架构：', fiber);
};

// 渲染函数式组件
function updateFunctionComponent(fiber) {
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
        // 新增插入
        parentNode.appendChild(fiber.node);
    }

    // 递归 更新子节点
    commitWorker(fiber.child);

    // 递归 更新子兄弟节点
    commitWorker(fiber.sibling);
}

// 执行提交更新
function commitRoot() {
    commitWorker(currentsRootFiber.child);
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


export default {
    render
};