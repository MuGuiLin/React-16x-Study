import React, { Component } from 'react';

import { createPortal } from 'react-dom';

import './style.scss';

class Alert extends Component {

    render() {
        const { title, content } = this.props;

        // ReactDOM.createPortal(child, container) React 传送门API
        return createPortal (
            <section className="alert-box">
                <div className="alert-main" >
                    <h2 className="title">{title}</h2>
                    <div className="content">{content}</div>
                </div>
            </section>
            , window.document.body  // 挂载到body上
        );
    }
}

export default Alert;
