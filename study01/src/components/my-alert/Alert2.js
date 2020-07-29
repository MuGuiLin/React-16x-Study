import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';

import './style.scss';

const Alert2 = () => {
    let num = -150
    const createDom = ({ title, content }, style) => {
        const node = document.createElement('div');

        window.document.body.appendChild(node);

        function hidden() {
            num = num - 150
            window.document.body.removeChild(node);
        }

        num = num + 150

        const dialog = (<section className={'dialog-box ' + style} style={{top: num +'px'}} >
            <div className="dialog-main" >
                <h2 className="title">{title}</h2>
                <div className="content">{content}</div>
                <button onClick={hidden} >确定</button>
                <button onClick={hidden} >取消</button>
            </div>
        </section>);

        // return createPortal(dialog, window.document.body);


        ReactDOM.render(dialog, node);
    }


    const info = (ags) => {
        createDom(ags, 'info')
    }

    const success = (ags, ) => {
        createDom(ags, 'success')
    }

    const error = (ags) => {
        createDom(ags, 'error')
    }

    const warning = (ags) => {
        createDom(ags, 'warning')
    }

    return {
        info,
        success: success,
        error,
        warning: warning
    }
}

export default Alert2();

