import React from 'react';
import { createForm } from 'rc-form';
import { Button, InputItem, WhiteSpace, WingBlank } from 'antd-mobile';

interface LoginFormProps {
    form: {
        getFieldProps: Function;
        getFieldsValue: Function;
    },
    handleSubmit: Function;
}
const LoginForm: React.FC<LoginFormProps> = ({ form, handleSubmit }) => {

    const { getFieldProps, getFieldsValue } = form;
    // console.log('rc-form 提供的方法：', form);

    const submit = () => {
        const val = getFieldsValue();
        handleSubmit(val);
    };

    return (
        <WingBlank size="lg">
            <InputItem type="text" {...getFieldProps('username')} clear placeholder="请输入账户名称"></InputItem>
            <WhiteSpace size="lg"></WhiteSpace>
            <InputItem type="password" {...getFieldProps('password')} clear placeholder="请输入账户密码" autoComplete="new-password"></InputItem>
            <WhiteSpace size="lg"></WhiteSpace>
            <Button type="primary" onClick={submit} >登 录</Button>
        </WingBlank>
    );
};

export default createForm()(LoginForm);
