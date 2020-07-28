import React from 'react';

// 高阶函数组件
export default function createForm(Comp) {

    // 返回一个新组件
    return class extends React.Component {

        constructor(props) {
            super(props);

            // 表单项数据存储
            this.state = {};

            // 表单项验证规则
            this.rules = {};
        }

        // 获取表单数据
        getFieldsValue = () => {
            return this.state;
        }

        // 更新表单数据
        setFieldsValue = (newStore) => {
            this.setState(newStore);
        }

        // 监听表单内容变化
        onChange = (event) => {
            console.log(event.target.value);
            const { name, value } = event.target;
            this.setState({ [name]: value });
        }

        // 设置表单项为受制表单
        getFieldDecorator = (name, rules) => inputComp => {
            // 根据name存储验证规则
            this.rules[name] = rules;

            // 在原有元素的基础上克隆一个新的元素，并添加为受控组件
            return React.cloneElement(inputComp, {
                name: name,
                value: this.state[name] || '',
                onChange: this.onChange
            })
        }

        // 校验表单
        validateFields = (callBack) => {
            let err = [];
            // 西撒哈拉
            for (let field in this.rules) {
                // 遍历表单数据项
                for (let value in this.state) {
                    // 判断是否有未填项
                    if (!this.state[value] || undefined === this.state[value]) {
                        err.push({ "errors": this.rules[field] });
                    }
                }
            };
            if (0 === err.length) {
                // 验证成功
                callBack(null, this.state);
            } else {
                // 验证失败
                callBack(err, this.state);
            }
        }

        // 返回form
        getForm = () => {
            return {
                form: {
                    getFieldsValue: this.getFieldsValue,
                    setFieldsValue: this.setFieldsValue,
                    getFieldDecorator: this.getFieldDecorator,
                    validateFields: this.validateFields
                }
            }
        }

        render() {
            return <Comp {...this.props} {...this.getForm()} />
        }
    }
};
