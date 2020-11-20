import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validation/validators';
import { createField, Input } from '../common/FormsControl/FormsControls';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import style from "./../common/FormsControl/FormsControls.module.css"

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
        {createField("Email", "email", [required], Input)}
        {createField("Password", "password", [required], Input, { type: "password" })}
        {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
        {props.error && <div className={style.formssummaryerror}  >
            {props.error}
        </div>}
        <div><button>Login</button></div>
    </form>

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);