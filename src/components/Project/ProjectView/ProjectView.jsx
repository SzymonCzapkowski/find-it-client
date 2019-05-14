import React from 'react';
import { ProjectViewContainer } from './ProjectViewStyles'
import ProjectInfo from './ProjectInfo/ProjectInfo'
import ProjectOwner from './ProjectOwner/ProjectOwner'
import SimilarProjects from './SimilarProjects/SimilarProjects'

const ProjectView = () => {

    return (
        <ProjectViewContainer>
            <ProjectOwner />
            <ProjectInfo />
            <SimilarProjects />
        </ProjectViewContainer>

    );

}

export default ProjectView;