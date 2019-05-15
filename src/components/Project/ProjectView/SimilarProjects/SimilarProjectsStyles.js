import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display:grid;
    grid-template-rows: 80px 1fr;
    background: #F2F0F0;
    padding-top: 20px;
`
export const SimilarProjectsBar = styled.div`
    display: flex;
    position: relative;
    font-size: 30px;
    width: 90%;
    height: 80%; 
    background: #FFFFFF;
    box-shadow: 0px 4px 5px #C8C8C8;
    justify-self: center;
    align-items:center;

        :before {
            content: '';
            position: absolute;
            left: -10px;
            width: 10px;
            height: 100%;
            background: rgba(55, 88, 206, 1);
            box-shadow: 0px 4px 3px rgba(55, 88, 206, 0.8);
        }
`
export const SimilarProjectsBoxes = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 0 20px;
`

export const SimilarProjectsBox = styled.div`
    display:grid;
    justify-items: center;
    text-align: center;
    box-sizing:border-box;
    padding-top:10px;
    height: 300px;
    width: 250px;
    background: #FFFFFF;
    border: 1px solid #C8C8C8;
    border-radius: 5px;
   
        .bottomLine{
            border-bottom: 2px solid #C8C8C8;
        }
`
