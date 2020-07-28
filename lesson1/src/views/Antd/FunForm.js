import React, { useEffect } from 'react';

import { message, Form, Input, Button, Select } from 'antd';

import './Antd.scss';

const { Option } = Select;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const FunForm = (props) => {
    // 有hooks方式 创建表单对象
    const [form] = Form.useForm();

    const rules = {
        userName: [
            { required: true, message: '用户名不能空！' }
        ]
    }

    const onGenderChange = value => {
        form.setFieldsValue({
            userName: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    const onFinish = values => {
        message.success('验证通过！', 5);
        console.log(values);
    };

    const onFinishFailed = error => {
        message.error('验证失败！');
        console.log(error);
    }

    const onReset = () => {
        console.log(123)
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            userName: 'Hello Earth!',
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
        <section className="page-main antd-form">
            <h1>Antd Function 函数式 Form</h1>
            <Form {...layout} form={form} name="control-ref" onFinish={onFinish} onFinishFailed={onFinishFailed} onReset={onReset}>
                <Form.Item name="userName" label="账户：" rules={rules.userName} >
                    <Input />
                </Form.Item>
                <Form.Item name="Password" label="密码：" rules={[{ required: true, },]} >
                    <Input />
                </Form.Item>

                {/* <Form.Item name="gender" label="Gender" rules={[{ required: true, },]} >
                    <Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender} >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true, },]} >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item> */}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit"> 提交 </Button>
                    <Button type="dashed" htmlType="reset"> 重置 </Button>
                    <Button type="default" htmlType="button" onClick={onFill}> 设置 </Button>
                </Form.Item>
            </Form>
        </section>
    );
}

export default FunForm;
