import React from 'react'
import { ProjectContainer } from './ProjectInfoStyles'
import { ProjectName } from './ProjectInfoStyles'
import { ProjectDescription } from './ProjectInfoStyles'

const ProjectInfo = () => {
    
    return(
        <ProjectContainer>
            <ProjectName>
                <p>Project Name</p>
            </ProjectName>
            <ProjectDescription>
                <p>Description</p>
            </ProjectDescription>
        </ProjectContainer>
    );

};

export default ProjectInfo;