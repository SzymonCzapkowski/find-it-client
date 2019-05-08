import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;  

    @media (max-width:500px) {
        grid-template-columns: 100%;
        grid-template-rows: 50px;
    }
`
export const FindItLogo = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const GithubLogo = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 33px);
    grid-gap: 10px;
    margin-right: 10px;
    justify-self: flex-end;
    align-items: center;    

     @media (max-width:500px) {
        justify-self: center;
    }
`
