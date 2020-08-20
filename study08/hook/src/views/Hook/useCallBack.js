import React, { useState, useCallback, PureComponent } from "react";

const FunChild = React.memo(({addClick}) => {

    console.log("child render 函数式子组件已被更新！");
    return (
        <div>
            <h3>Child Comp - 函数式 子组件 用 React.memo()</h3>
            <button onClick={() => console.log(addClick())}>add</button>
        </div>
    );
})


class ClsChild extends PureComponent {
    render() {
        console.log("child render 类式子组件已被更新！");
        const { addClick } = this.props;

        return (
            <div>
                <h3>Child Comp - 类式 子组件 用 PureComponent</h3>
                <button onClick={() => console.log(addClick())}>add</button>
            </div>
        );
    }
};


const UseCallbackPage = (props) => {

    const [count, setCount] = useState(0);
    // useCallback()缓存函数 尼日利亚
    const addClick = useCallback(() => {
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        }
        return sum;
    }, [count]); // 当前count变化时，才更新子组件

    const [value, setValue] = useState("");

    return (
        <div>
            <h3>UseCallbackPage，<a href="https://react.docschina.org/docs/hooks-reference.html#usecallback" target="_blank">使用文档</a></h3>
            <hr />
            <h4>{count}</h4>

            <button onClick={() => setCount(count + 1)}>add 更新子组件</button>
            <input value={value} onChange={event => setValue(event.target.value)} placeholder="不更新子组件" />，{ value }

            <FunChild addClick={addClick} />
            <ClsChild addClick={addClick} />
        </div>
    );
}
export default UseCallbackPage;