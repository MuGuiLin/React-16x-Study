import React, { Component, useEffect } from 'react';

import Form, { Field } from 'rc-field-form';
// import Form, { Field } from '../../components/my-rc-field-form';

import MyInput from '../../components/my-rc-field-form/Input';

import FunMyRCFieldForm from './FunMyRCFieldForm';

import './MyRCFieldForm.scss'

class MyRCFieldForm extends Component {
    constructor() {
        super();

        this.formRef = React.createRef();
    }

    onFinish = values => {
        alert('验证通过！');
        console.log(values);
    };

    onFinishFailed = error => {
        alert('验证失败！');
        console.log(error);
    }

    onReset = () => {
        this.formRef.current.resetFields();
    };

    onFill = () => {
        this.formRef.current.setFieldsValue({
            userName: 'Hello world!',
            Password: '666',
        });
    };

    componentDidMount() {
        console.log('表单对象中的各种方法：', this.formRef.current);

        // this.formRef.current.setFieldsValue({
        //     userName: 'Hello world!',
        //     Password: '666',
        // });
    }

    render() {
        return (
            <section className="page-main antd-form my-rc-field-form">
                <h1> my-rc-field-form Class 类式 Form </h1>
                <p>自定义实现的 my-rc-field-form 组件库！</p>
                <Form ref={this.formRef} name="control-ref" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} onReset={this.onReset}>
                    <Field name="userName" rules={[{ required: true, message: "请输入姓名！" }]} >
                        <MyInput label="账户：" placeholder="请输入账户" />
                    </Field>
                    <Field name="Password" rules={[{ required: true, },]} >
                        <MyInput label="密码：" placeholder="请输入密码" />
                    </Field>
                    <Field>
                        <button type="submit"> 提交 </button>
                        <button type="reset"> 重置 </button>
                        <button type="button" onClick={this.onFill}> 设置 </button>
                    </Field>
                </Form>

                <FunMyRCFieldForm></FunMyRCFieldForm>
            </section>
        );
    }
}

export default MyRCFieldForm;
