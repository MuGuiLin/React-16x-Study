import React from 'react';

// HOC高阶组件：是一个函数，参数是一个组件，返回值也是一个组件！

// ES6 的写法
const HocComp = (Comp) => (props) => {
    // 双箭头函数意思是导出一个函数
    return (
        <section className="border">
            我是高阶组件： 把传进来的props 又传给了传进来的组件！
            <Comp {...props}></Comp>
        </section>
    )
};

// ES5 的写法
const HocComp2 = function(Comp) {
    // console.log('这是传进来的组件：------', Comp);
    return function(props) {
        return (
            <section className="border">
                我是高阶组件： 把传进来的props 又传给了传进来的组件！
                <Comp {...props}></Comp>
            </section>
        )
    }
}


// export default HocComp;
export default HocComp2;