import React, { Component } from 'react';

import { createPortal } from 'react-dom';

import './style.scss';

class Dialog2 extends Component {
    constructor(props) {
        super(props);

        this.node = document.createElement('div');

        // 由于：这样每调一次会在body上追加一个div
        window.document.body.appendChild(this.node);
    }

    componentWillUnmount() {
        // 所以：要在组件卸载时，删除追加的div
        if(this.node) {
            window.document.body.removeChild(this.node);
        }
    }

    render() {
        const { title, content } = this.props;
        return createPortal (
            <section className="dialog-box">
                <div className="dialog-main" >
                    <h2 className="title">{title}</h2>
                    <div className="content">{content}</div>
                </div>
            </section>
            , this.node
        );
    }
}

export default Dialog2;
