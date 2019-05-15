import React from 'react';
import { ProjectContainer } from './ProjectOwnerStyles'
import { ProjectInformationText } from './ProjectOwnerStyles'
import { ProjectOwnerText } from './ProjectOwnerStyles'

const ProjectOwner = () => {

    return (
        <ProjectContainer>
            <ProjectInformationText>
                <p>Project Information</p>
            </ProjectInformationText>
            <ProjectOwnerText>
                <p>Project Owner:</p>
                <p>Created:</p>
                <p>Status:</p>
            </ProjectOwnerText>
        </ProjectContainer>
    );

}

export default ProjectOwner;