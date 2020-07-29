import React, { Component } from 'react';

import './style.scss';

class Dialog extends Component {
    render() {
        const { title, content } = this.props;
        return (
            <section className="dialog-box">
                <div className="dialog-main" >
                    <h2 className="title">{title}</h2>
                    <div className="content">{content}</div>
                </div>
            </section>
        );
    }
}

export default Dialog;
