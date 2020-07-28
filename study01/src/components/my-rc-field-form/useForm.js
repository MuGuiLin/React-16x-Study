import React, { useRef } from 'react';
import Form from './Form';

class FormStore {
    constructor() {
        // 用于存储表单项中的数据，如：input等中的value
        this.store = {
            userName: '沐枫'
        }
    };

    getFieldError = () => {

    }

    getFieldsError = () => {

    }

    // 获取value
    getFieldValue = (name) => {
        console.log('获取value', name)
        return this.store[name];
    }

    getFieldsValue = () => {

    }

    getFieldInstance = () => {

    }

    getInternalHooks = () => {

    }

    validateFields = () => {

    }

    setFields = () => {

    }

    // 更新value
    setFieldsValue = (newStore) => {
        console.log('更新value', this.store);
        this.store = { ...this.store, ...newStore };
    }

    scrollToField = () => {

    }

    resetFields = () => {

    }

    submit = () => {

    }

    getForm() {
        return {
            getFieldError: this.getFieldError,
            getFieldsError: this.getFieldsError,
            getFieldValue: this.getFieldValue,
            getFieldsValue: this.getFieldsValue,
            getFieldInstance: this.getFieldInstance,
            getInternalHooks: this.getInternalHooks,
            validateFields: this.validateFields,
            setFields: this.setFields,
            setFieldsValue: this.setFieldsValue,
            scrollToField: this.scrollToField,
            resetFields: this.resetFields,
            submit: this.submit
        }
    }

};

// 自定义hook
const useForm = (props) => {
    // React中的 useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数(initialValue)，返回的 ref 对象在组件的整个生命周期内保持不变。
    const formRef = useRef();
    console.log('useRef()', formRef);

    if (!formRef.current) {
        const FS = new FormStore();
        formRef.current = FS.getForm();
    }

    console.log('useRef()', formRef);

    return [formRef];
}

export default useForm;
