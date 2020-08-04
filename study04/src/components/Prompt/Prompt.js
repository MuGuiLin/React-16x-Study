import React from 'react';
import Context from './Context';
import LifeCycle from './LifeCycle';

const index = ({ show = true, message }) => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    if (show) {
                        return (
                            <LifeCycle
                                onMount={(self) => {
                                    console.log(self);
                                }}
                                onUnMount={(self) => {

                                    if (window.confirm(message)) {

                                    } else {
                                        console.log('context:', context);
                                        context.history.push(context.match.path)
                                    }

                                }}
                                message={message}>
                            </LifeCycle>
                        )
                    } else {
                        return null;
                    }
                }
            }
        </Context.Consumer>
    );
}

export default index;



