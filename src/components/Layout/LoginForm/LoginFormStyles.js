import styled from 'styled-components'

export const LoginContainer = styled.div`
    display:grid;
    grid-template-rows: 1fr 100px 100px 100px;;
    font-size: 18px;
    
    .header {
        font-size: 40px;
    }
`
export const EmailForm = styled.div`
    justify-self: center;
       
    input {
        border:none;
        border-radius:10px;
        height:40px; 
        width: 30vw;
        font-size: 18px;   
    }
`
export const PasswordForm = styled.div`
    justify-self: center;

    input {
        border:none;
        border-radius:10px;
        height:40px; 
        width: 30vw;
        font-size: 18px;   
    }
`
export const LoginButton = styled.button`
    justify-self: center;
    color: white;
    width: 145px;
    height: 35px;
    text-decoration: none;
    border-radius: 10px;
    border:none;
    margin: 20px;
    background: #3758CE;
`
