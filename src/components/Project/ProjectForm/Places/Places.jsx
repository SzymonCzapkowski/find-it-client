import React from 'react';
import { FOrmPlacesContainer } from './PlacesStyles';
import { PlacesTitle } from './PlacesStyles';
import { AddPlacesButton } from './PlacesStyles';
import { PlacesContainer } from './PlacesStyles';
import { Place } from './PlacesStyles';

//const placesQuantity = [1,2,3,4,5];

function innerPlaces() {
};

const Places = () => {
    return (
        <FOrmPlacesContainer>
            <PlacesTitle>Places:</PlacesTitle>
            <AddPlacesButton><div>+</div></AddPlacesButton>
            <PlacesContainer>
                <Place className="placeButton" status={false}></Place>  
                <Place className="placeButton" status={true}></Place>
                <Place className="placeButton" status={false}></Place>
                <Place className="placeButton" status={true}></Place>
                <Place className="placeButton" status={true}></Place>
                <Place className="placeButton" status={false}></Place>
                <Place className="placeButton" status={false}></Place>
                <Place className="placeButton" status={true}></Place>
            </PlacesContainer>
        </FOrmPlacesContainer>
    );
}

// usunąć className i dodać onclick

/*
const placeButton = document.querySelectorAll('.placeButton');
*/



export default Places;