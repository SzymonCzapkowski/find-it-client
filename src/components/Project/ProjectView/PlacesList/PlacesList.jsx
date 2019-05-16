import React from 'react';
import { ViewPlacesContainer } from './PlacesListStyles';
import { PlacesTitle } from './PlacesListStyles';
import { PlacesContainer } from './PlacesListStyles';
import axios from 'axios';

import PlacesListElement from './PlacesListElement/PlacesListElement';

const PlacesList = () => {
    
    const url = 'https://sleepy-sands-37154.herokuapp.com/api/projects/';

    const currentProjectId = '5cd85cba6947af0f3c967d98';



    // tablica zrobiona do screenów
    // po skończeniu będzie wypełniania plejsami z bazy
    const projectPlaces = [
        {   
            _id: '1',
            name: 'React developer',
            requiredSkills: ['JavaScript', 'React', 'Node.js'],
            status: true
        },
        {   
            _id: '2',
            name: 'React developer',
            requiredSkills: ['JavaScript', 'React', 'Node.js'],
            status: true
        },
        {   
            _id: '3',
            name: 'Js dev3',
            requiredSkills: ['JS3', 'CSS3'],
            status: false
        },
        {   
            _id: '4',
            name: 'Js dev4',
            requiredSkills: ['JS4', 'CSS4'],
            status: false
        },
        {   
            _id: '5',
            name: 'Js dev5',
            requiredSkills: ['JS4', 'CSS4'],
            status: false
        },
        {   
            _id: '6',
            name: 'Js dev6',
            requiredSkills: ['JS4', 'CSS4'],
            status: false
        },
        {   
            _id: '7',
            name: 'Js dev7',
            requiredSkills: ['JS4', 'CSS4'],
            status: false
        },
        {   
            _id: '8',
            name: 'Js dev8',
            requiredSkills: ['JS4', 'CSS4'],
            status: false
        }
    ];




    function getProjectPlaces(){
        axios({
            method: 'get',
            url: `${url}`,
            body: {
                _id: '5cd85c766947af0f3c967d97' 
            }
        })
        .then(function (resp) {
            resp.data.map( item => {
                if(item._id === currentProjectId){
                    projectPlaces.push(item.places);
                };
            });
        });
    };

    //getProjectPlaces();


    // dodać usera do propsów placesListElement!
    return (
        <ViewPlacesContainer>
            <PlacesTitle>Places:</PlacesTitle>
            <PlacesContainer>
                {projectPlaces.map(item => {
                    return <PlacesListElement key={item._id} skills={item.requiredSkills} name={item.name} status={item.status}/>
                })}
            </PlacesContainer>
        </ViewPlacesContainer>
    );
}

export default PlacesList;