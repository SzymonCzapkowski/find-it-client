import React from 'react';
import { ViewPlacesContainer } from './PlacesListStyles';
import { PlacesTitle } from './PlacesListStyles';
import { PlacesContainer } from './PlacesListStyles';

import PlacesListElement from './PlacesListElement/PlacesListElement';

const PlacesList = () => {
    
    fetch('http://localhost:3000/api/places/5cd87d700c39a2432c1e6264').then(resp => {
        console.log(resp);
    });
    
    const places = [true,true,true,true,false,true,false,false]; //wstępnie, ostatecznie pobranie z api

    const skills = ['HTMl', 'CSS', 'JS']; //wstępnie, ostatecznie pobranie z api

    return (
        <ViewPlacesContainer>
            <PlacesTitle>Places:</PlacesTitle>
            <PlacesContainer>
                {places.map(item => {
                    const key = Math.random(); // potem zmienić na id plejsa
                    return <PlacesListElement key={key} skills={skills} name='JS Developer' status={item}/>
                })}
            </PlacesContainer>
        </ViewPlacesContainer>
    );
}

export default PlacesList;