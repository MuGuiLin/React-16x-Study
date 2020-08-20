import React, { useState, useCallback, memo, useMemo } from "react";

const FunChildComp = memo(function ({ user, onClick }) {
    console.log('*******函数式 子组件已被重新渲染！');
    return <>
        <h2>函数式 子组件：{user.name}, {user.age}</h2>
        <button onClick={() => onClick('OK, 我很好 666！')}>改变 name 值 - 重新渲染子组件</button>
    </>
});

class CslChildComp extends React.PureComponent {
    render() {
        console.log('*******类式 子组件已被重新渲染！');
        const { user, onClick } = this.props;
        return (<>
            <h2>类式 子组件：{user.name}, {user.age}</h2>
            <button onClick={() => onClick('OK, 我很好 888！')}>改变 name 值 - 重新渲染子组件</button>
        </>);
    }
}

const UseMemoPage = (props) => {
    let [count, setCount] = useState(0);
    let [name, setName] = useState('你好！');
    let [age, setAge] = useState(20);

    const increment = () => setCount(count + 1);
    const inputSetName = (event) => {
        setCount(event.target.value);  // 不会更新子组件
    };
    const changeName = useCallback((newName) => {
        setName(newName); // 会更新子组件
    }, []);

    // 复杂数据类型属性 useMemo()缓存数据 尼日利亚
    // const user = { name, age };  // 这样会导致子组件的props数据没有更新，子组件也会被重新渲染
    const user = useMemo(() => {    // 这样会只要子组件的props数据没有更新，子组件就不会重新渲染
        return { name, age };
    }, [name, age]);

    return (
        <div>
            <h3>UseMemo，<a href="https://react.docschina.org/docs/hooks-reference.html#usememo" target="_blank">使用文档</a></h3>
            <hr />
            <b>当父组件传给子组件是数据是一个对象时，可在父组中用useMemo()方法将 数据缓存起来，当父组在重新渲染时，如果子组件的props数据没有更新，子组件就不会重新渲染啦！</b>
            <br />
            <br />
            <button onClick={increment}>点击修改次数：以重新渲染：{count}</button>
            <input type="text" value={count} onChange={event => { inputSetName(event) }} />

            <FunChildComp user={user} onClick={changeName} />
            <CslChildComp user={user} onClick={changeName} />
            <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
        </div>
    );
};

export default UseMemoPage;