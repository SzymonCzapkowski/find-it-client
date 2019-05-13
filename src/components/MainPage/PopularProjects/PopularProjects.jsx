import React from 'react'
import { ProjectsContainer } from './PopularProjectsStyles'
import { PopularProjectsBar } from './PopularProjectsStyles'
import { PopularProjectsBox } from './PopularProjectsStyles'
import { PopularProjectsBoxes } from './PopularProjectsStyles'
import react_logo from '../../../images/react.png'


const PopularProjects = () => {
    return (
        <ProjectsContainer>
            <PopularProjectsBar>
                <p> Popular projects </p>
            </PopularProjectsBar>
            <PopularProjectsBoxes>
                <PopularProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p>Lorem ipsum dolor sin amet</p>
                    <p>user</p>
                </PopularProjectsBox>
                <PopularProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p>Lorem ipsum dolor sin amet</p>
                    <p>user</p>
                </PopularProjectsBox>
                <PopularProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p>Lorem ipsum dolor sin amet</p>
                    <p>user</p>
                </PopularProjectsBox>
                <PopularProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p>Lorem ipsum dolor sin amet</p>
                    <p>user</p>
                </PopularProjectsBox>
            </PopularProjectsBoxes>
        </ProjectsContainer>

    );
};

export default PopularProjects;