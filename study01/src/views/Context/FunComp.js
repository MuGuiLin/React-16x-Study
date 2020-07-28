import React, { useContext } from 'react';
import { ThemeContext, MupiaoContext } from '../../context/theme';

const FunComp = () => {
    // 用hooks方式来接收 context
    const context = useContext(ThemeContext);
    console.log(context);

    // let color = '[object Object]' === Object.prototype.toLocaleString(context) ? context.color : context;

    const { color, size } = context;

    const { name, age, job } = useContext(MupiaoContext)

    return (
        <div>
            <h3>🎨 消费者3：我是function组件，用 useContext(ThemeContext); 来获取!</h3>
            <p style={{ background: color }}>这是我接收到的context: {color}，{size}</p>
            <p>姓名：{name}，年龄：{age}，职业：{job}</p>
        </div>
    );
}

export default FunComp;
