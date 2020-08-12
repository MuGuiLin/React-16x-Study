import React, { Component } from 'react';











class Hof extends Component {
    
    render() {
        console.log(this);

        return (
            <section className="page-main">
                <h1>HOF 高阶函数</h1>
                <hr/>
                <pre>
                    <b>在JavaScript中，函数是一等公民，它是一种特殊的数据类型 - 对象(Object)[也就是Function对象]。更确切的说，函数是用Function()构造函数创建的function对象，既然函数就是对象，那么函数就可以作为参数(实参)进行传递。</b>

                    <br /><br />
                    <h2>回调函数：</h2>
                    回调函数就是一个通过函数指针调用的函数。
                    <br />如果把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，我们就说这是回调函数。
                    <br />回调函数不是由回调函数本身直接调用的，而是在特定的事件或条件发生时由另外一个函数（高阶函数）调用的。
                    <b>通俗来讲，一个函数A作为参数传递给另一个函数B，函数A在函数B中被调用，我们就称函数A为回调函数，称函数B为高阶函数。</b>
                    <br />再简单点讲就是：作为参数传递的函数 就是回调函数。接收函数作为参数或将函数作为输出返回的函数 就是高阶函数。
                    <code>
                        // 回调函数实例：
                        <br />function A(x)｛
                        <br />    console.log('我是普通回调函数：', x);
                        <br />｝;
                        <br />function B(y)｛
                        <br />    // 在函数B中调用传过来的函数A，此时的函数A就叫回调函数，
                        <br />    y('我是从函数B中传给函数A的数据');
                        <br />    y.call(null, '我还可以用call来调！');
                        <br />｝;
                        <br />// 将函数A作为参数传递给函数B，这里要切记不要在A后面加()，因为()表是执行
                        <br />B(A);
                        <br />// 匿名回调函数（没有函数名）
                        <br />B(function(x)｛
                        <br />    console.log('我是匿名回调函数：', x);
                        <br />｝);
                    </code>

                    <b>闭包</b>
                    在面向对象的程序设计语言里，比如Java和C++，要在对象内部封装一个私有变量，可以用private修饰一个成员变量。在ES6之前，由于没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。
                    <br />// 闭包的出现，可以获取函数内部的变量且变量一直在内存当中。一个作用域使用了另一个作用域中的变量。比如外层函数通过传参的方式，把某个变量传递给内层函数，就产生了闭包
                    <br />// 闭包：以函数作为返回值实现函数外部访问私有变量的，从而延迟函数的使用(函数套函数，外层函数传回里程函数，里程函数运行才能实现函数操作)
                    <br />// 闭包功能：
                    <br />// 延迟函数使用——副作用：外层变量为定值
                    <br />// 实现类中私有变量的功能 

                    <b>回调函数其实是闭包函数</b>
                    回调函数是在包含回调函数的函数中执行的，就好像这个回调函数是在包含它的函数中定义的一样。此时回调函数就可以访问该函数作用域中的变量，因此，回调函数可以算是闭包函数。
                     <code>
                        // 闭包函数实例：
                        <br />function A(x)｛
                        <br />    console.log('我是普通回调函数：', x);
                        <br />｝;
                        <br />function B(y)｛
                        <br />    var msg = '我是从函数B中传给函数A的数据';
                        <br />    y(msg);
                        <br />｝;
                        <br />B(A);
                    </code>

                    <br /><br />
                    <h2>递归函数：</h2>
                    简单来说：递归函数就是函数调用的地方在自己的函数体中，也就是函数自己调用自己！
                    <b>需要注意的是，递归函数一定要有判断条件，否则就是死循环了。</b>
                    <code>
                        // 递归函数实例：
                        <br /> function fn() ｛
                        <br />     console.log('递归函数：自己调用自己');
                        <br />     // 判断条件
                        <br />     if(xxx) ｛
                        <br />         fn(); // 递归调用
                        <br />     ｝
                        <br /> ｝;
                        <br /> fn(); // 触发递归函数
                    </code>
                    
                    <br/><br/>
                    <h2>高阶函数：</h2>
                    <b>高阶函数英文叫Higher-order function。<a href="https://www.liaoxuefeng.com/wiki/1022910821149312/1023021271742944" target="_blank">什么是高阶函数？</a></b>
                    JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
                    <b>高阶函数是对其他函数进行操作的函数，可以将它们作为参数或返回。 简单来说，高阶函数是一个函数，它接收函数作为参数或将函数作为输出返回。</b>
                    由此可见：按照高阶函数的定义，在上面回调函数中定义的函数B就是一个高阶函数。

                    <br />高阶函数的形式应至少满足下列条件之一：
                    <br />   1、函数可以作为参数被传递（函数可以作为函数被传入[因为高阶函数本身需要的参数就是一个函数]，也称为回调函数，如函数合成运算）。
                    <br />   2、函数可以作为返回值输出（可以返回函数作为输出，如函数柯里化运算）。

                    <code>
                        //高阶函数: 函数可以接受另一个函数作为参数的函数称作高阶函数，高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值输出返回。
                        
                        // 实例：计算组件中每个元素中字符的长度
                        <br />var arr = ['HTML5', 'CSS3', 'ES6', 'NodeJs', 'PHP', 'Java', 'C++'];
                        <br />function A (arr, fn) ｛
                        <br />    var itmeArr = [];
                        <br />    for (let i = 0; i ﹤ arr.length; ｛
                        <br />        itmeArr.push(fn(arr[i]));
                        <br />    ｝
                        <br />    return itmeArr;
                        <br />｝;
                        <br />var itemLen = A(arr, function (item)｛
                        <br />    return item.length;
                        <br />｝);
                        <br />console.log(itemLen); //[5, 4, 3, 6, 3, 4, 3]
                    </code>
                    
                    
                    <h2>JS数组中内置高阶函数：</h2>
                   
                    <b>map()方法：</b>
                    map方法通过将输入数组中的每个元素作为参数来调用提供的回调函数来创建一个新数组。 它会从回调函数中获取每个返回的值，并使用这些值创建一个新数组。
                    通俗来说就是：会将数组中的每一个值带入到回调函数中执行，把执行后的结果收集起来，放到一个新创建的数组中。
                    <code>
                        // map()方法必须要有返回 return
                        <br />var arr = [1, 2, 3].map(function (item, index, arr) ｛
                        <br />    return item + 3;
                        <br />｝, this);
                        console.log(arr); // [4, 5, 6]
                        
                        <br />// mpa()方法实例2
                        <br />var arr = [ ｛name: "zs", age: 12 ｝, ｛name: "ls", age: 13 ｝, ｛name: "ww", age: 14 ｝];
                        <br />var newArr = arr.map(function(item, index, arr)｛
                        <br />    return｛
                        <br />        name: item.name + "-技术部",
                        <br />        age: item.age + 10
                        <br />    ｝
                        <br />｝);
                        console.log(newArr);
                    </code>


                    <b>filter() 方法：</b>
                    用于筛选数组中满足条件的元素，过滤掉不满足条件的元素，返回一个筛选后的新数组，不会对原来的组数进行修改。
                    <code>
                        //将数组中的每一个元素依次传入到回调函数中，如果回调函数中运算结果返回为真，则将该元素选中将选中的元素放到一个新数组中，最后返回
                        function A(item, index, arr)｛
                        <br />    if (item ﹤ 4)｛
                        <br />        return true;
                        <br />    ｝
                        <br />｝
                        <br />var arr = [5, 1, 6, 3, 8, 2].filter(A);
                        <br />console.log(arr); //[1,2,3]
            
                    </code>  
                    
                    <b>reduce() 方法：</b>
                    reduce方法接收一个回调函数作为累加器，然后将数组中的每一个元素依次传入回调函数中并执行（第一次传入数组中的2个值）。
                    <code>
                        // 注：reduce() 方法在定义回调函数的时候，前两个参数是必传的
                        <br /> // total 为初始值，或者上一次调用回调返回的值
                        <br /> function A(total, item, index, arr)｛
                        <br />     console.log(total, item);
                        <br />     return total + item;
                        <br /> ｝;
                        <br /> var val = [1, 2, 3, 4].reduce(A);
                        <br /> cconsole.log(val);
                    </code>
                    
                    <b>every() 方法：</b>
                    用于判断数组中的每一项元素是否都满足条件，返回一个布尔值，类似and 并且操作。
                    <code>
                        // 将数组中的值依次传入回调函数中，如果每次返回的都是真，那么整体为真，只要有一个是假，那么整体为假，这个方法用在 判断是否全选是最好的实例
                        <br />var isTrue = [1, 2, 3].every(function(item, index, arr)｛
                        <br />    console.log(arguments);
                        <br />    if (item ﹤ 5)｛
                        <br />        return true;
                        <br />    ｝
                        <br />｝);
                        console.log(isTrue); // true
                    </code>

                    <b>some() 方法：</b>
                    用于判断数组中的是否存在满足条件的元素，返回一个布尔值，类似or 或者操作。
                    <code>
                        // 将数组中的值依次传入回调函数中，如果有一次返回值为真，那么整体为真，
                        <br />function A(item, index, arr) ｛
                        <br />    console.log(arguments);
                        <br />    if (item ﹤ 2) ｛
                        <br />        return true;
                        <br />    ｝
                        <br />｝;
                        <br />var isTrue = [1, 2, 3].some(A);
                        <br />console.log(isTrue); //true
                    </code>
                </pre>
            </section>
        );
    }
}

export default Hof;
