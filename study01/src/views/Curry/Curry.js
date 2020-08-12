import React from 'react';



/**
 * 柯里化
 */

//柯里化前
// function add(x, y) {
//     return x + y;
// }
// 一次性调用
// console.log(add(1, 2)) // 3

//柯里化后
function add(x) {
    return function (y) {
        return x + y;
    }
};

console.log(add(2)(1)) // 3

// 每次调用都是独立的，add函数接收一个参数并返回一个新的函数，在调用add之后，返回的函数就是通过闭包的方式记住了add函数的第1个参数。
var increment = add(1);
var addTen = add(10);

console.log(increment(2));
console.log(addTen(2));

// 

/**
 * 先认识一下 ES6 新增的 [].reduce(() => {}, initVal) 数组方法
 */

// 实现数组中的值相加？
// reduce()数组方法是ES6新增的 Reduce方法是指将多个值缩减为一个
let val = [1, 2, 3, 4, 5].reduce((sum, val) => {
    return sum + val
});
console.log(val); // 15


// 四舍五入后计算数组元素的总和？
function getSum(total, num) {
    return total + Math.round(num);
}
var num = [15.5, 2.3, 1.1, 4.7].reduce(getSum, 0);
console.log(num); // 24




/**
 * 聚合函数 的由来
 */

// 怎么执行多个函数？
function fun1(arg) {
    console.debug('fun1-执行了-', arg);
    return arg;
}

function fun2(arg) {
    console.debug('fun2-执行了-', arg);
    return arg;
}

function fun3(arg) {
    console.debug('fun3-执行了-', arg);
    return arg;
}

// 洋葱模型、聚合函数 将里面函数执行后返回的结果，作为外面函数参数据执行
let res = fun1(fun2(fun3('333')));
console.log('res-最后结果-', res);



/**
 * 聚合函数 的实现
 */
// 组合函数 由于以面的洋葱模型 执行函数的写法过于复杂，所以 用一个叫 组合函数 的函数来专门做这件事
function compose1(...funs) {
    // ...funs 把传进来的函数解构为数组

    // 处理兼容问题1，如果funs数组长度为0（也就是一个fun都没传时)
    if (1 > funs.length) {
        return function (args) {
            return args;
        };
        // 用ES6的写法：
        return args => args;
    }

    // 处理性能优化2，如果funs函数长度为1（也就是只传了一个fun时）就没必要去遍历了
    if (1 === funs.length) {
        // return function(args) {
        //     return funs[0](args);
        // }

        // 用ES6的写法：
        return funs[0];
    }

    // 把传进来的函数聚合一下
    return funs.reduce(function (total, item, index, arr) {
        // console.log(total)
        return function (...args) {
            return total(item(...args))
        }
    });

    // 用ES6的写法： 把传进来的函数聚合一下
    return funs.reduce((total, item, index, arr) => (...args) => total(item(...args)));
};

/**
 * 聚合函数 ES6的实现
 */
function compose(...funs) {
    if (1 > funs.length) {
        return args => args;
    }

    if (1 === funs.length) {
        return funs[0];
    }

    return funs.reduce((total, item) => (...args) => total(item(...args)));
}

// 组合函数compose(funs)(args)函数在执行后返回值是一个函数，然后这个函数再接收一个参数并执行！
let res2 = compose(fun1, fun2, fun3)('666');
console.log('res2-最后结果-', res2);

let res3 = compose()('888');
console.log('res3-一个fun都没传时-最后结果-', res3);

let res4 = compose(fun2)('999');
console.log('res4-只传一个fun时-最后结果-', res4);

const Curry = () => {
    return (
        <section className="page-main">
            <h1>currying函数柯里化 与 compose合成(组合)函数</h1>
            <hr />
            <pre>
                <h2>函数式编程：</h2>
                <b>函数式编程倡导: 利用若干简单的执行单元 让计算结果不断渐进，逐层推导复杂的运算。</b>
                <b>函数式编程有两个最基本的运算：1、柯里化（currying）；2、合成（compose）。</b><br />

                <h2>1、currying函数柯里化：</h2>
                <b>在数学和计算机科学中，柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术。</b>
                <p>柯里化又称卡瑞化、加里化，是把接收多个参数的函数变换成接收1个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数而且返回结果的新函数的技术。</p>
                <p>柯里化的作用：就是将普通函数转变成高阶函数，实现动态创建函数、延迟计算、参数复用等等作用。</p>
                <b>所谓柯里化：就是把一个多参数的函数，转化为单个参数的函数。（通俗点说就是先给原始函数传入几个参数，它会生成一个新的函数，然后让新的函数去处理接下来的参数。）</b>
                <p>实现上，就是返回一个高阶函数，通过闭包把传入的参数保存起来。当传入的参数数量不足时，递归调用 bind 方法；数量足够时则立即执行函数。</p><br />


                <h2>2、compose合成函数、组合函数：</h2>
                <b>如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，这就叫函数的合成（compose）、合成函数、组合函数，有点类似于中间件的概念！</b>
                <p>将子函数串联起来执行，一个函数的输出结果是另一个函数的输入参数，一旦第一个函数开始执行，会像多米诺骨牌一样推导执行后续函数。</p>
                <p>合成的好处显面易见，它让代码变得简单而富有可读性，同时通过不同的组合方式，我们可以轻易组合出其他常用的函数。</p>
                <code>
                    // 组合函数
                    {'\n'}function compose (...funs) ｛
                    {'\n'}    if(1 ﹥ funs.length) ｛
                    {'\n'}        return args =﹥ args;
                    {'\n'}    ｝
                    {'\n'}    if(1 === funs.length) ｛
                    {'\n'}        return funs[0];
                    {'\n'}    ｝
                    {'\n'}    return funs.reduce((total, item) =﹥ (...args) =﹥ total(item(...args)));
                    {'\n'}｝
                    {'\n'}// 调用组合函数
                    {'\n'}let res = compose(fun1, fun2, fun3)('666');
                </code>
                <ul>
                    <b>reduce的定义和用法</b>
                    <li>reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。</li>
                    <li>reduce() 可以作为一个高阶函数，用于函数的 compose。</li>
                    <li>注意: reduce() 对于空数组是不会执行回调函数的。</li>
                </ul>
            </pre>
        </section>
    );
}

export default Curry;
