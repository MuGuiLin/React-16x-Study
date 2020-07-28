import React, { Component } from 'react';

import { createForm, formShape } from 'rc-form';

import MyInput from "../../components/my-rc-form/Input";

// @createForm()
class RcForm extends Component {

    submit = () => {
        const { getFieldsValue } = this.props.form;
        console.log(getFieldsValue())

        this.props.form.validateFields((error, value) => {
            console.log(error, value);
        });
    }

    componentDidMount() {
        this.props.form.setFieldsValue({
            userName: '沐枫',
            Password: '123456'
        });
    }

    render() {
        console.log(this.props);

        let errors;
        const { getFieldDecorator, getFieldProps, getFieldError } = this.props.form;

        return (
            <section className="page-main antd-form my-rc-form">
                <h1>my-rc-form Class 类式 Form </h1>
                <p>自定义实现的 my-rc-form 组件库！</p>
                <div>
                    {getFieldDecorator('userName')(<MyInput label="账户：" placeholder="请输入账户" />)}
                    {getFieldDecorator('Password')(<MyInput label="密码：" placeholder="请输入密码" />)}

                    <input {...getFieldProps('normal')} />
                    <input {...getFieldProps('required', {
                        onChange() { }, // have to write original onChange here if you need
                        rules: [{ required: true }],
                    })} />
                    {(errors = getFieldError('required')) ? errors.join(',') : null}

                    <button type="button" onClick={this.submit}>提交</button>
                    <button type="button" onClick={this.submit}>重置</button>
                    <button type="button" onClick={this.submit}>设置</button>
                </div>
            </section>
        );
    }
}

export default createForm()(RcForm);