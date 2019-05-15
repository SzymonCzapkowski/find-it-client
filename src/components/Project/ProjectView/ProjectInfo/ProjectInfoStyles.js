import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display:grid;
    grid-template-rows: 80px 1fr;
`
export const ProjectName = styled.div`
    width: 90%;
    height: 50px; 
    border-radius: 10px;
    background-color: white;
    margin-top: 60px;
    justify-self:center;

        p {
            transform: translateY(-40px) translateX(10px);
        }
`
export const ProjectDescription = styled.div`
    width: 90%;
    height: 200px; 
    border-radius: 10px;
    background-color: white;
    margin: 80px 0 20px;
    justify-self:center;
        
        p {
            transform: translateY(-40px) translateX(10px);
        }
`