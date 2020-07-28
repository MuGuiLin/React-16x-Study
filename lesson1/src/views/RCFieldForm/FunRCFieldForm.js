import React, { useEffect } from 'react';

import Form, { Field } from 'rc-field-form';

import MyInput from '../../components/my-rc-field-form/Input';

const FunRCFieldForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        alert('验证通过！');
        console.log(values);
    };

    const onFinishFailed = error => {
        alert('验证失败！');
        console.log(error);
    }

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            userName: 'Hello Earth!!',
            Password: '888',
        });
    };

    // 函数式组件挂载完成时 useEffect就是函数组件执行副作用的地方
    useEffect(() => {
        form.setFieldsValue({
            userName: 'Hello Earth!',
            Password: '888',
        });
    }, []);

    return (
        <section className="page-main antd-form rc-field-form">
            <h1>rc-field-form Function 函数式 Form </h1>
            <p>antd 4 中的表单组件，就是基于rc-field-form来实现的！</p>
            <Form form={form} name="control-ref" onFinish={onFinish} onFinishFailed={onFinishFailed} onReset={onReset}>
                <Field name="userName" rules={[{ required: true, message: "请输入姓名！" }]} >
                    <MyInput label="账户：" placeholder="请输入账户" />
                </Field>
                <Field name="Password" rules={[{ required: true, },]} >
                    <MyInput label="密码：" placeholder="请输入密码" />
                </Field>
                <Field>
                    <button type="submit"> 提交 </button>
                    <button type="reset"> 重置 </button>
                    <button type="button" onClick={onFill}> 设置 </button>
                </Field>
            </Form>
        </section>
    );
}

export default FunRCFieldForm;
