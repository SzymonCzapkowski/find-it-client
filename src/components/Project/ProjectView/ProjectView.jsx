import React from 'react';
import { PlacesAndCategoryContainer} from './ProjectViewStyles';
import { Category } from './Category/Category';
import PlacesList from './PlacesList/PlacesList';


const PlacesAndCategory = () => {

    // dodać usera do propsów placesListElement!
    return (
        <PlacesAndCategoryContainer>
            <Category />
            <PlacesList />
        </PlacesAndCategoryContainer>
    );
}

const ProjectView = () => {
    return(
        <PlacesAndCategory />
    )
};

export default ProjectView;