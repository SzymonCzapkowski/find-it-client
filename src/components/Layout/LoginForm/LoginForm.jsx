import React from 'react'
import { LoginContainer } from './LoginFormStyles'
import { EmailForm } from './LoginFormStyles'
import { PasswordForm } from './LoginFormStyles'
import { LoginButton } from './LoginFormStyles'

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

export default LoginForm;