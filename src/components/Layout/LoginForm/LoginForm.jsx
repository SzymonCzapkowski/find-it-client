import React from 'react'
import { LoginContainer } from './LoginFormStyles'
import { EmailForm } from './LoginFormStyles'
import { PasswordForm } from './LoginFormStyles'
import { LoginButton } from './LoginFormStyles'
import { withFormik, Form, Field } from "formik";



const LoginForm = ({ values }) => ( <
    Form >
    <
    label > Email:
    <
    Field type = "email"
    name = "email"
    placeholder = "email" / >
    <
    /label> <
    label > Password:
    <
    Field type = "password"
    name = "password"
    placeholder = "password" / >
    <
    /label> <
    button type = "submit" > Login < /button>      < /
    Form >
);

export default withFormik({
    mapPropsToValues() {
        return {
            email: "",
            password: ""
        };
    },
    handleSubmit(values) {
        console.log(values)
    }
})(LoginForm);

//</button>const rootElement = document.getElementById("root");
//</label>ReactDOM.render( < FormikApp / > , rootElement);
/*
const LoginForm = () => {

    return (
        <LoginContainer>
            <p>Login To Your Account</p>
          <EmailForm>
            <p>Email:</p>
          </EmailForm>
          <PasswordForm>
            <p>Password:</p>
            <p>Forgot your password? Click Here!</p>
          </PasswordForm>
          <LoginButton>
            Login
          </LoginButton>
            <p>New to Find IT? Register Now</p>
        </LoginContainer>

    );
};
*/
//export default LoginForm;