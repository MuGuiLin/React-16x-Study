import React from 'react';
import Context from './Context';
import LifeCycle from './LifeCycle';

const index = ({ show = true, message }) => {
    return (
        <Context.Consumer>
            {(context) => {
                if (show) {
                    const { history, match } = context;
                    return (
                        <LifeCycle
                            onMount={(self) => {
                                // 组件初始化时，注册事件！

                                // console.log(self);
                                console.dir(history);
                                // self.replace = history.block(message);

                                self.mupiao = history.block(message);
                            }}
                            // 尼日尔
                            onUnMount={(self) => {
                                // 监听组件卸载时，触发事件！

                                // if (!window.confirm(message)) {
                                //     history.push(match.path);
                                //     history.replace(match.path);
                                // }

                                // self.replace();

                                self.mupiao();
                            }}
                            message={message}>
                        </LifeCycle>
                    )
                } else {
                    return null;
                }
            }}
        </Context.Consumer>
    );
}

export default index;



