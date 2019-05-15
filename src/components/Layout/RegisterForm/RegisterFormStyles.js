import styled from 'styled-components'

export const RegisterContainer = styled.div`
    display:grid;
    grid-template-columns: [line1] 50vw [line2] 50vw [line3]; 
    grid-template-rows: [line1] 100px [line2] 100px [line3] 100px [line4]; 
    justify-items:center;
    grid-column-gap: 5vw;
    margin-top: 10px;

    input {
        border:none;
        border-radius:10px;
        height:40px; 
        width: 30vw;
        font-size: 18px;   
    }
`
export const NameForm = styled.div`
    grid-column-start: line1;
    grid-column-end: line2;
    grid-row-start: line1;
    grid-row-end:  line2;
    justify-self:flex-end;
`
export const UsernameForm = styled.div`
    grid-column-start: line2;
    grid-column-end: line3;
    grid-row-start: line1;
    grid-row-end:  line2;
    justify-self:flex-start;
`
export const EmailForm = styled.div`
    grid-column-start: line1;
    grid-column-end: line2;
    grid-row-start: line2;
    grid-row-end:  line3;
    justify-self:flex-end;
`
export const PasswordForm = styled.div`
    grid-column-start: line2;
    grid-column-end: line3;
    grid-row-start: line2;
    grid-row-end:  line3;
    justify-self:flex-start;
`
export const RegisterButton = styled.button`
    grid-column-start: line1;
    grid-column-end: line3;
    grid-row-start: line3;
    grid-row-end:  line4;
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