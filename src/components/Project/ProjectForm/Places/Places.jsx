import React from 'react';
import { FOrmPlacesContainer } from './PlacesStyles';
import { PlacesTitle } from './PlacesStyles';
import { PlacesContainer } from './PlacesStyles';
import { Place } from './PlacesStyles';
import { Button } from 'react-bootstrap';
import AddPlaceClass from '../AddPlace/AddPlace';
import {PlusButton} from './PlacesStyles';
import { Section } from './PlacesStyles';

class Places extends React.Component {

    state = {
        isModalOpen: false,
    }

    closeModal = () => { 
        this.setState({isModalOpen: false})
    }

    addPlace = (place) => {
        this.setState({isModalOpen: false})
        this.props.places.push(place)
    }

    render() {
    return (
        <FOrmPlacesContainer>
        
            <PlusButton>
                {this.state.isModalOpen ? 
                    <AddPlaceClass closeModal={this.closeModal} addPlace={this.addPlace}/>
                        : null
                }
                 <Button className = "button" onClick={() => this.setState({isModalOpen: true})}>+</Button>
            </PlusButton>
            <Section>
                <PlacesTitle>Places:</PlacesTitle>
                <PlacesContainer>
                {this.props.places.map((place, i) => {
                        console.log(place)
                        return (<Place className = "placeButton" key= {i} status = {false} > </Place>)
                })}
                </PlacesContainer>
            </Section>
        </FOrmPlacesContainer>
    );

}
}

// usunąć className i dodać onclick

/*
const placeButton = document.querySelectorAll('.placeButton');
*/



export default Places;