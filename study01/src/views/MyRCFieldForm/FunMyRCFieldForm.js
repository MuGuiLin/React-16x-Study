import React, { useEffect } from 'react';

import Form, { Field } from '../../components/my-rc-field-form';

import MyInput from '../../components/my-rc-field-form/Input';

const FunMyRCFieldForm = () => {
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
            userName: 'Hello Earth!',
            Password: '999',
        });
    };

    // 函数式组件挂载完成时 useEffect就是函数组件执行副作用的地方
    useEffect(() => {
        // form.setFieldsValue({
        //     userName: 'Hello Earth!',
        //     Password: '999',
        // });
    }, []);

    return (
        <section className="page-main antd-form my-rc-field-form">
            <h1>my-rc-field-form Function 函数式 Form </h1>
            <p>自定义实现的 my-rc-field-form 组件库！</p>
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

export default FunMyRCFieldForm;
