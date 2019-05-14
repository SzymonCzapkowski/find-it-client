import React from 'react';
import { FOrmPlacesContainer } from './PlacesStyles';
import { PlacesTitle } from './PlacesStyles';
import { PlacesContainer } from './PlacesStyles';
import { Place } from './PlacesStyles';

//const placesQuantity = [1,2,3,4,5];

function innerPlaces() {
};

const Places = (props) => {

    return (
        <FOrmPlacesContainer>
            <PlacesTitle>Places:</PlacesTitle>
           
            <PlacesContainer>
               {props.places.map((place, i) => {
        console.log(place)
        return (<Place className = "placeButton" key= {i} status = {false} > </Place>)
    })}
            </PlacesContainer>
        </FOrmPlacesContainer>
    );
}

// usunąć className i dodać onclick

/*
const placeButton = document.querySelectorAll('.placeButton');
*/



export default Places;