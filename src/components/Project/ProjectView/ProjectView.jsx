import React from 'react';
import { ProjectViewContainer } from './ProjectViewStyles'
import ProjectInfo from './ProjectInfo/ProjectInfo'
import ProjectOwner from './ProjectOwner/ProjectOwner'
import SimilarProjects from './SimilarProjects/SimilarProjects'


const ProjectView = ({ match }) => {
        return (
            <ProjectViewContainer>
                <ProjectOwner projectId={match.params.id} />
                <ProjectInfo />
                <SimilarProjects />
            </ProjectViewContainer>

        );
    }

export default ProjectView;