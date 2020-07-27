import React from 'react';

const FunComp = (props) => {
    console.log(props)
    return (
        <div className="border">
            <h2>我是一个函数式子组件： {props.name}</h2>
        </div>
    );
}

export default FunComp;
