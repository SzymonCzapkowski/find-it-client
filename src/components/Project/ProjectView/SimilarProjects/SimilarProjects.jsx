import React from 'react'
import { ProjectsContainer } from './SimilarProjectsStyles'
import { SimilarProjectsBar } from './SimilarProjectsStyles'
import { SimilarProjectsBox } from './SimilarProjectsStyles'
import { SimilarProjectsBoxes } from './SimilarProjectsStyles'
import react_logo from '../../../../images/react.png'

const SimilarProjects = () => {

    return (
        <ProjectsContainer>
            <SimilarProjectsBar>
                <p> Similar projects </p>
            </SimilarProjectsBar>
            <SimilarProjectsBoxes>
                <SimilarProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p className="bottomLine">Lorem ipsum dolor sin amet</p>
                    <p>user</p>
                </SimilarProjectsBox>
            </SimilarProjectsBoxes>
        </ProjectsContainer>

    );
};

export default SimilarProjects;