import styled from 'styled-components';

export const MainProfileView = styled.div`
    margin: 45px;
`
export const Head = styled.div`
    display: grid;
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: 1fr 1fr 1fr;
`
export const Account = styled.h1`
    grid-column: 1;
    grid-row: 1;
    font-weight: 300;
    font-size: 40px;
    color: #434343;
`
export const ProfilePhoto = styled.img`
    grid-column: 2;
    grid-row: 2;
    margin: auto;
`
export const Logos = styled.div`
    grid-column: 3;
    grid-row: 3;
    height: 33px;
    opacity: 0.6;
    margin: auto;
    margin-right: 0;
`
export const Img = styled.img`
    padding: 10px;  
`
export const Titles = styled.h1`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #434343;
`
export const Input = styled.input`
    height: 40px;
    background: #FFFFFF;
    border-radius: 10px;
    width: 100%;
    padding-left: 5px;
`
export const Div = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr 1fr;
`
export const Label = styled.label`
    padding: 10px;
`
export const Label1 = styled(Label)`
    grid-column: 1 / 3;
`