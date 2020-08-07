import React from 'react';


// HOC高阶组件：是一个函数，参数是一个组件，返回值也是一个组件！
const HocComp = (Comp) => (props) => {

    // 双箭头函数意思是导出一个函数
    return (
        <section className="border">
            我是高阶组件： 把传进来的props 又传给了传进来的组件！
            <Comp {...props}></Comp>
        </section>
    )
};


// const HocComp = function(Comp) {
//     return function(props) {
//         return (
//             <section>
//                 <Comp {...props}></Comp>
//             </section>
//         )
//     }
// }


export default HocComp;