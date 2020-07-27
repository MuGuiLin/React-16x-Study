import React, { Component } from 'react';

import { Form, Input, Button, Select } from 'antd';

import './Antd.scss'

const { Option } = Select;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Antd extends Component {
    constructor() {
        super()
    }

    formRef = React.createRef();

    rules = {
        userName: [
            { required: true, message: '用户名不能空！' }
        ]
    }

    onGenderChange = value => {
        this.formRef.current.setFieldsValue({
            userName: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    onFinish = values => {
        console.log(values);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    onFill = () => {
        this.formRef.current.setFieldsValue({
            userName: 'Hello world!',
            Password: '666',
        });
    };

    render() {
        return (
            <section className="page-main antd-form">
                <h1>React UI框架</h1>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                    <Form.Item name="userName" label="账户：" rules={this.rules.userName} >
                        <Input />
                    </Form.Item>
                    <Form.Item name="Password" label="密码：" rules={[{ required: true, },]} >
                        <Input />
                    </Form.Item>

                    {/* <Form.Item name="gender" label="Gender" rules={[{ required: true, },]} >
                    <Select placeholder="Select a option and change input text above" onChange={this.onGenderChange} allowClear >
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
                        <Button type="dashed" htmlType="button" onClick={this.onReset}> 重置 </Button>
                        <Button type="default" htmlType="button" onClick={this.onFill}> 设置 </Button>
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

export default Antd;
