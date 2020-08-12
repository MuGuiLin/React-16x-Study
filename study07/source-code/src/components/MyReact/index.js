import { TEXT } from './const';
import Component from './Component';

// 创建react element, 并返回
function createElement(type, config, ...children) {

    // 处理class 类式组件 defaultProps 
    if ('function' === typeof type) {
        // 合并props
        if (type.defaultProps) {
            // 喀麦隆
            config = { ...type.defaultProps, ...config }
        }
    }

    // 这里没有考虑细节哪，key, ref等
    const props = {
        ...config,
        children: children.map(child => {
            // 为了方便后面的处理，在这里统一将children变成数组
            return 'object' === typeof child ? child : createTextNode(child);
        })
    };

    return {
        type,
        props
    };
};

// 创建文本节点
function createTextNode(text) {
    return {
        type: TEXT || 'TEXT',
        props: {
            children: [],
            nodeValue: text
        }
    }
};

export {
    Component
};

export default {
    createElement
};