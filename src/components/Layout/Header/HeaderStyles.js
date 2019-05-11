import styled from 'styled-components';

export const HeaderContainer = styled.div`
    box-sizing: border-box;
    height: 85px;
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: center;

    @media (max-width:500px) {
        grid-template-columns: 100%;
        grid-template-rows: 50px;
        margin: 2% 0 3%;
    }
`
export const FindItLogo = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const Buttons = styled.div`
    justify-self: flex-end;
    
    @media (max-width:500px) {
    justify-self: center;
    } 
`
export const Button = styled.button`
    color: white;
    width: 145px;
    height: 35px;
    text-decoration: none;
    border-radius: 10px;
    border:none;
    margin: 0 40px 0 0;
    background: ${props => props.changeColor ? "#434343" : "#3758CE"};

    @media (max-width:500px) {
    margin: 0 2vh 0; 
    }
`