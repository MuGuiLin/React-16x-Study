import React, { Component } from 'react';

import createForm from '../../components/my-rc-form';
import MyInput from "../../components/my-rc-form/Input";

import './MyRcForm.scss';

// Decorator 是 ES7 的一个新语法，他可以对一些对象进行装饰包装然后返回一个被包装过的对象，可以装饰的对象包括：类，属性，方法等。打个比方：你出去玩，出门前戴了一顶帽子，这是帽子就是装饰器，你自己就是被装饰的对象。
// 装饰器的作用就是为已经存在的函数或对象添加额外的功能。 装饰器应用场景及理解: 装饰器本质上是一个函数, 它可以让其他函数在不需要做任何代码变动的前提下增加额外功能 它经常用于有切面需求的 场景, 比如: 插入日志、性能测试、事务处理、缓存、权限校验等场景。
// 这里主要介绍一下类装饰器，使用类装饰器可以减少一些代码的重复编写。此时装饰器看起来更像是一个父类，但它又不是一个父类，因为被装饰的类重写一些生命周期函数的时候，装饰器里面的生命周期函数并不会被覆盖执行。对于componentDidMount 来说，先执被装饰类的componentDidMount 再执行 装饰器内的componentDidMount；对于componentWillUnmount 来讲先执行装饰器的componentWillUnmount 再执行被装饰的类的componentWillUnmount
// https://www.jianshu.com/p/c5f116716ed1

@createForm
class MyRcForm extends Component {

    submit = () => {
        const { getFieldsValue, validateFields } = this.props.form;

        // 获取表单数据
        //console.log(getFieldsValue())

        // 校验方法
        validateFields((err, val) => {
            if (err) {
                alert('验证失败！');
                console.log('失败内容：', err)
            } else {
                alert('验证成功！');
                console.log('表单数据：', val);
            }
        })

    }

    componentDidMount() {
        this.props.form.setFieldsValue({
            userName: '沐枫',
            Password: '123456'
        })
    }

    render() {
        console.log(this.props);
        const { getFieldDecorator } = this.props.form;
        return (
            <section className="page-main antd-form my-rc-form">
                <h1>my-rc-form Class 类式 Form </h1>
                <p>自定义实现的 my-rc-form 组件库！</p>
                <div>
                    {getFieldDecorator('userName', { rules: [{ required: true, message: "请输入姓名！" }] })(<MyInput label="账户：" placeholder="请输入账户" />)}
                    {getFieldDecorator('Password', { rules: [{ required: true, message: "请输入密码！" }] })(<MyInput label="密码：" placeholder="请输入密码" />)}
                    <button type="button" onClick={this.submit}>提交</button>
                    <button type="button" onClick={this.submit}>重置</button>
                    <button type="button" onClick={this.submit}>设置</button>
                </div>
            </section>
        );
    }
}

export default MyRcForm;