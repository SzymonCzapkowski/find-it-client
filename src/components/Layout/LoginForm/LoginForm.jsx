import React from 'react'
import { LoginContainer } from './LoginFormStyles'
import { EmailForm } from './LoginFormStyles'
import { PasswordForm } from './LoginFormStyles'
import { LoginButton } from './LoginFormStyles'
import { withFormik, Field } from "formik";
import axios from "axios";



const LoginForm = ({ values }) => { 
    
  return( 
   
 <LoginContainer>
    <p className="header">Login To Your Account</p>
    <EmailForm>
      <p>Email:</p>
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
    <LoginButton type="submit"> 
      Login
    </LoginButton>      
  </LoginContainer>
)
};


export default withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },
  handleSubmit(values) {
    console.log(values);
    axios.post(`https://sleepy-sands-37154.herokuapp.com/api/auth/login`, values)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

})(LoginForm);