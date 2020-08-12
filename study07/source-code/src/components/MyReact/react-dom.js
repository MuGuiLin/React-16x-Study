import { TEXT } from "./const";

/* render方法接收两个参数：
 *      ReactDOM.render(jsx, document.querySelector('#root'));

 * render()主要实现两个功能：
 *      1、将vdom 转为 真实的dom，
 *      2、将真实的dom挂载到宿主节点 container 中
 **/
function render(vdom, container) {
    // 得到真实dom
    const dom = createNode(vdom);

    // 将真实的dom挂载到宿主节点 container 中
    container.appendChild(dom);
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

        // 组件
    } else if ('function' === typeof type) {

        // 判断是类式组件 还是 函数式组件
        node = type.prototype.isReactComponent ? createClassComponent(vdom) : createFunctionComponent(vdom);

    } else {

        // 这是原生js API - createDocumentFragment()，用于创建一个虚拟的节点对象，节点对象包含所有属性和方法。
        node = document.createDocumentFragment()
    }

    // 将children中的vdom 转成真实的dom
    reconcileChildren(props.children, node);

    // 更新属性节点
    upDateNode(node, props);

    // 输出真实DOM
    return node;
};

// 创建类式组件
function createClassComponent(vdom) {
    const { type, props } = vdom;

    let comp = new type(props);
    const vnode = comp.render();
    // console.log(vnode);

    // 将vdom 转为 真实的dom，
    const node = createNode(vnode);
    return node;
};

// 创建类式组件
function createFunctionComponent(vdom) {
    const { type, props } = vdom;

    let vnode = type(props);
    // console.log(vnode);

    // 将vdom 转为 真实的dom，
    const node = createNode(vnode);
    return node;
}

// 循环props.children中的vdom，将vdom 转为 真实的dom
function reconcileChildren(children, node) {
    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        // 如果child是一个数组，不是单个值时
        if (Array.isArray(child)) {
            for (let j = 0; j < child.length; j++) {
                // 递归调用render() 将children中的vdom 转成真实的dom，再插入到node中
                render(child[j], node);
            }
        } else {
            // 递归调用render() 将children中的vdom 转成真实的dom，再插入到node中
            render(child, node);
        }

    }
};

// 添加属性节点、文本节点等
function upDateNode(node, props) {
    Object.keys(props).filter(key => 'children' !== key).forEach(key => {
        node[key] = props[key];
    });
};


export default {
    render
};