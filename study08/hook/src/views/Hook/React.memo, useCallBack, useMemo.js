// https://www.jianshu.com/p/014ee0ebe959


// 实例一 React.memo()
// import React, { useState,memo , useCallback, } from "react";

// const ChildComp = () => {
//     console.log('render child-comp ... 父组的重新渲染，我也会重新渲染！')
//     return <div>Child Comp ...</div>
// };

// const ChildComp2 = memo(() => {
//     console.log('render child-comp ... 父组的重新渲染，我就不会重新渲染！，因为我用memo来优化，以减少不必要的渲染！')
//     return <div>Child Comp ...</div>
// });


// const UseCallbackPage = (props) => {

//     const [count, setCount] = useState(0)
//     const increment = () => setCount(count + 1)

//     return (
//         <div>
//             <button onClick={increment}>点击次数：{count}</button>
//             <ChildComp />
//             <ChildComp2 />
//         </div>
//     );

// };

// export default UseCallbackPage;










/**
 * 实例二  React.useCallback()
 * 
 * 
 * 
 */
// 上面的例子中，父组件只是简单调用子组件，并未给子组件传递任何属性。

// 点击父组件按钮，改变了父组件中 count 变量值（父组件的 state 值），进而导致父组件重新渲染；
// 父组件重新渲染时，会重新创建 changeName 函数，即传给子组件的 onClick 属性发生了变化，导致子组件渲染；

// useCallback() 起到了缓存的作用，即便父组件渲染了，useCallback() 包裹的函数也不会重新生成，会返回上一次的函数引用。

// import React, { useState, memo, useCallback, } from "react";


// const ChildComp = memo(function ({ name, onClick }) {
//     console.log('render child-comp ...，由于父组传了数据过来，用memo来优化就不管用了， 父组的重新渲染，子组件也会重新渲染！')
//     return <>
//         <div>Child Comp ... {name}</div>
//         <button onClick={() => onClick('hello')}>改变 name 值</button>
//     </>
// })

// const ChildComp2 = memo(function ({ name, onClick }) {
//     console.log('render child-comp ...，即便父组传了数据过来，在父组中用useCallback() 钩子函数包裹一层， 父组的重新渲染，子组件就不会重新渲染啦！')
//     return <>
//         <div>Child Comp ... {name}</div>
//         <button onClick={() => onClick('hello')}>改变 name 值</button>
//     </>
// })


// const UseCallbackPage = (props) => {

//     const [count, setCount] = useState(0)
//     const increment = () => setCount(count + 1)


//     const [name, setName] = useState('hi~')
//     const changeName = (newName) => {
//         setName(newName)
//     } // 父组件渲染时会创建一个新的函数

//     const changeName2 = useCallback((newName) => {
//         setName(newName)
//     },[]) // 父组件渲染时会创建一个新的函数

//     return (
//         <div>
//             <button onClick={increment}>点击修改次数：以重新渲染：{count}</button>
//             <ChildComp name={name} onClick={changeName} />
//             <ChildComp2 name={name} onClick={changeName2} />
//         </div>
//     );

// };

// export default UseCallbackPage;






/**
 * 实例三 React.useMemo()
 * 
 * useMemo 有两个参数：
 *      第1个参数是个函数，返回的对象指向同一个引用，不会创建新对象；
 *      第2个参数是个数组，只有数组中的变量改变时，第一个参数的函数才会返回一个新的对象；
 */

// 前面父组件调用子组件时传递的 name 属性是个字符串，如果换成传递对象会怎样？ 父组件渲染，const info = { name, age } 一行会重新生成一个新对象，导致传递给子组件的 info 属性值变化，进而导致子组件重新渲染。


// import React, { useState, memo, useCallback, useMemo } from "react";

// const ChildComp = memo(function ({ name, age, onClick }) {
//     console.log('render child-comp ...，由于父组传了数据过来，用memo来优化就不管用了， 父组的重新渲染，子组件也会重新渲染！')
//     return <>
//         <div>Child Comp ... {name}</div>
//         <button onClick={() => onClick('hello')}>改变 name 值</button>
//     </>
// })

// const ChildComp2 = memo(function ({ name, age, onClick }) {
//     console.log('render child-comp ...，即便父组传了数据过来，在父组中用useCallback() 钩子函数包裹一层， 父组的重新渲染，子组件就不会重新渲染啦！')
//     return <>
//         <div>Child Comp ... {name}</div>
//         <button onClick={() => onClick('hello')}>改变 name 值</button>
//     </>
// })


// const UseCallbackPage = (props) => {

//     const [count, setCount] = useState(0)
//     const increment = () => setCount(count + 1)


//     const [name, setName] = useState('hi~')
//     const [age, setAge] = useState(20)

//     const changeName = useCallback((newName) => {
//         setName(newName)
//     }, []) // 父组件渲染时会创建一个新的函数

//     const changeName2 = useCallback((newName) => {
//         setName(newName)
//     }, []) // 父组件渲染时会创建一个新的函数

//     const user = { name, age }    // 复杂数据类型属性

//     const user2 = useMemo(() => {
//         return { name, age }
//     }, [name, age])  // 复杂数据类型属性

//     return (
//         <div>
//             <button onClick={increment}>点击修改次数：以重新渲染：{count}</button>
//             <ChildComp user={user} onClick={changeName} />
//             <ChildComp2 user={user2} onClick={changeName2} />
//         </div>
//     );

// };

// export default UseCallbackPage;