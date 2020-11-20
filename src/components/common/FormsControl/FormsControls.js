import React from 'react';
import { Field } from 'redux-form';
import style from './FormsControls.module.css';


export const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>
                {
                    meta.error
                }
            </span>}
        </div>
    )
}

export const TextArea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (

    <div>
        <Field placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>)
