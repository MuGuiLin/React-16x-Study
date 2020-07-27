import React from 'react';

// 默认值 可设置为字符串 或 对象；
// const theme = 'red'
// export const Mupiao = React.createContext(theme || 'red');

// export const { Provider, Consumer, displayName } = React.createContext(theme || 'red');

// 默认值
const theme = {
    color: 'red',
    background: 'blue'
};

// Context 实例对象
export const ThemeContext = React.createContext(theme);

// Context 提供者
export const ThemeProvider = ThemeContext.Provider;

// Context 消费者
export const ThemeConsumer = ThemeContext.Consumer;



// 默认值
const user = {
    name: '沐枫',
    age: '28',
    job: 'web前端'
};

const MupiaoContext = React.createContext(user);

const MupiaoProvider = MupiaoContext.Provider;

const MupiaoConsumer = MupiaoContext.Consumer;

export {
    MupiaoContext, MupiaoProvider, MupiaoConsumer
}