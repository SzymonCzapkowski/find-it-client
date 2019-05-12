import styled from 'styled-components';

export const ViewPlacesContainer = styled.div`
    margin-left: 300px;
    width: 250px;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 40px;
    -moz-user-select: none;
    user-select: none;
    justify-self: center;
`
export const PlacesTitle = styled.p`
    grid-column: 1/-1;
    margin: 0;
`

export const AddPlacesButton = styled.div`
    display: flex;
        justify-content: center;
        align-items: center;
    
    div{
        width: 38px;
        height: 38px;
        background-color: rgba(55, 88, 206, 1);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        color: white;
    }

    div:hover {
        background-color: rgba(55, 88, 206, 0.8);
        color: white;
    }
`

export const PlacesContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
`