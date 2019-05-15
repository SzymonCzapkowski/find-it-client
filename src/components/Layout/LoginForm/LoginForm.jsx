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
    axios.post(`http://localhost:3001/api/auth/login`, values)
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