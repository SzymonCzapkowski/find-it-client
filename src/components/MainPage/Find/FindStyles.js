import styled from 'styled-components';
import bgBlue from '../../../images/bg_blue.jpg'
import bgBlack from '../../../images/bg_black.jpg'


export const FindContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

     p {
        font-size: 5vh;
        justify-items: end;
    }
`
export const TeamMate = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: flex-end;
    text-align:center;
    background:url(${bgBlue});
    background-size: cover;
    color: black;
    
`
export const Project = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    text-align:center;
    background:url(${bgBlack});
    background-size:cover;
    color: white;

`
export const RegisterButton = styled.button`
    align-self: start;  
    justify-self:center;
    color: white;
    width: 145px;
    height: 35px;
    text-decoration: none;
    border-radius: 10px;
    border:none;
    margin: 0 40px 0 0;
    background: #3758CE;
    margin: 0;
`
