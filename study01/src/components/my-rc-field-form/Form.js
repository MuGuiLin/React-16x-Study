import React from 'react';

import { Context } from './Context';

import useForm from './useForm';



const Form = ({ form, children, onFinish, onFinishFailed }) => {

    const [useFormObj] = useForm();

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <Context.Provider value={useFormObj}>
                {children}
            </Context.Provider>

        </form>
    );
}

export default Form;
