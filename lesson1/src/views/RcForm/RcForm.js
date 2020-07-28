import React, { Component } from 'react';

import { createForm, formShape } from 'rc-form';


// @createForm()
class RcForm extends React.Component {
    static propTypes = {
        form: formShape,
    };

    submit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
        });
    }

    render() {
        let errors;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <section className="page-main antd-form rc-field-form">
                <h1>rc-form Class类式 Form</h1>
                <p>表单组件，基于rc-form来实现的！https://www.npmjs.com/package/rc-form</p>
                <input {...getFieldProps('normal')} />
                <input {...getFieldProps('required', {
                    onChange() { }, // have to write original onChange here if you need
                    rules: [{ required: true }],
                })} />
                {(errors = getFieldError('required')) ? errors.join(',') : null}
                <button onClick={this.submit}>提交</button>
            </section>

        );
    }
}

export default createForm()(RcForm);