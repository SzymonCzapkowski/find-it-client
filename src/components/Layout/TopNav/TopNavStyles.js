import styled from 'styled-components';

export const TopNavContainer = styled.div`
    display: flex;
    justify-content:center;
    font-size: 18px;
    background: rgba(154, 176, 254, 0.8);

    ul {
        display: flex;
        list-style: none;
        align-items: center; 
        padding: 0;
        justify-content: space-around;
        height: 3vmin;
        width: 60%;
        box-sizing: border-box;

        li {
            color: white;  
            margin: 0 1vh 0;
            text-align: center;
        }

        li:hover {
            background: rgba(154, 176, 254, 0.9);
        }

       
    @media (max-width:500px) {
       display: grid; 
       grid-template-rows: 5fr;
       height: auto;
       gap: 1vh;    
    }
    }
`
export const HamburgerButton = styled.button`
    /* display: hidden; */
    width: 40px;
    height: 35px;
    border: 0;
    border-top: 5px solid white;
    background: transparent;
    position: relative;
    transition: 0.3s transform linear;
    transform: translateY(10px);

    ::before, ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 5px solid white;
    transform: translateY(10px);
    }

    ::after { 
    transform: translateY(25px);
    transition: 0.3s transform linear;
    }
   
    :focus {
    transform: rotate(90deg);
    } 
/* 
    :focus, ::before, {
    transform: translateY(-50px);
    }   */
`