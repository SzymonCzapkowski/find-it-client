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
           margin: 0 1vw 0;
           text-align: center;

           :hover {
               background: rgba(154, 176, 254, 0.9);
           }
       }

   @media (max-width:500px) {
      display: grid;
      margin-top: 50px;
      height: auto;
      gap: 1vh;
    }
   }
`
export const HamburgerButton = styled.button`
   width: 40px;
   height: 35px;
   border: 0;
   border-top: 5px solid black;
   background: transparent;
   position: absolute;
   transition: 0.4s transform linear;
   transform: translateY(10px);

   ::before, ::after {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   border-top: 5px solid black;
   transform: translateY(10px);
   }

   ::after {
   transform: translateY(25px);
   transition: 0.4s transform linear;
   }

   transform: ${props => props.isMenuDisplayed ? 'rotate(90deg) translateX(10px)' : ''}
`