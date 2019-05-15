import React from 'react'
import { RegisterContainer } from './RegisterFormStyles'
import { NameForm } from './RegisterFormStyles'
import { UsernameForm } from './RegisterFormStyles'
import { EmailForm } from './RegisterFormStyles'
import { PasswordForm } from './RegisterFormStyles'
import { RegisterButton } from './RegisterFormStyles'
import {withFormik,Field} from "formik"
import axios from "axios"



const RegisterForm = ({values}) => ( 
    <RegisterContainer >
        <NameForm>
            <p>Your name:</p>
            <label>
            <Field type = "name" name = "name" placeholder = "" />
            </label>
        </NameForm>
        <UsernameForm>
            <p>Your username:</p>
            <label>
            <Field type = "username" name = "username" placeholder = "" />
            </label>
        </UsernameForm>
        <EmailForm>
            <p>Your email:</p> 
            <label>
            <Field type = "email" name = "email" placeholder = "" />
            </label> 
        </EmailForm>
        <PasswordForm>
            <p>Password:</p>
            <label>
            <Field type = "password" name = "password" placeholder = "" />
            </label>
        </PasswordForm>
        <RegisterButton type = "submit"> Create Account </RegisterButton> 
    </RegisterContainer>
);

export default withFormik({
    mapPropsToValues() {
        return {
            name: "",
            username: "",
            email: "",
            password: ""
        };
    },
    handleSubmit(values) {
        console.log(values);
        axios.post(`http://localhost:3001/api/users/register`, values)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})(RegisterForm)