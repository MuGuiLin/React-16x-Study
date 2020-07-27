import React, { useContext } from 'react';
import { Mupiao } from '../../context/theme';

const FunComp = () => {
    // 用hooks来接收 context
    const context = useContext(Mupiao);
    return (
        <div>
            <h1>我是function组件</h1>
            <p>我接收到了context: {context}</p>
        </div>
    );
}

export default FunComp;
