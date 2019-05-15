import React from 'react';
import { PlacesAndCategoryContainer} from './ProjectViewStyles';
import { Category } from './Category/Category';
import PlacesList from './PlacesList/PlacesList';
import { ProjectViewContainer } from './ProjectViewStyles'
import ProjectInfo from './ProjectInfo/ProjectInfo'
import ProjectOwner from './ProjectOwner/ProjectOwner'
import SimilarProjects from './SimilarProjects/SimilarProjects'

const PlacesAndCategory = () => {
    // dodać usera do propsów placesListElement!
    return (
        <PlacesAndCategoryContainer>
            <Category />
            <PlacesList />
        </PlacesAndCategoryContainer>
    );
};

const ProjectView = ({ match }) => {

    return (
        <ProjectViewContainer>
            <ProjectOwner projectId={match.params.id} />
            <ProjectInfo />
            <PlacesAndCategory />
            <SimilarProjects />
        </ProjectViewContainer>

        );
    }

};

export default ProjectView;