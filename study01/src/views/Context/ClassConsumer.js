import React, { Component } from 'react';
import { ThemeConsumer, MupiaoConsumer } from '../../context/theme';

class ClassConsumer extends Component {

    render() {
        return (
            <div>
                <ThemeConsumer>
                    {
                        // Consumer 内部是一个函数, 这个函数的参数就是Provider里面提供的数据。
                        (context) => {
                            return (
                                <div>
                                    <h3> 🍓消费者2：我是类式组件，用 ThemeConsumer; 来获取！</h3>
                                    <p style={{ color: context.color }}>这是我接收到的context: {context.color}，{context.size}</p>

                                    <MupiaoConsumer>
                                        {
                                            // Consumer之间也可以嵌套的
                                            (userContext) => userContext ? <UserComp {...userContext} /> : ''
                                        }
                                    </MupiaoConsumer>
                                </div>
                            )
                        }}
                </ThemeConsumer>
            </div>
        );
    }
}


function UserComp(uct) {
    return (
        <>
            <h3> 🍓消费者2：我是嵌套的Consumer！</h3>
            <h2>姓名：{uct.name}，年龄：{uct.age}，职业：{uct.job}</h2>
        </>
    );
};

export default ClassConsumer;
