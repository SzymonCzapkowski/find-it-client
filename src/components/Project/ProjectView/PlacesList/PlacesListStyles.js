import styled from 'styled-components';

export const ViewPlacesContainer = styled.div`
    margin-left: 300px;
    width: 180px;
    display: grid;
    grid-template-rows: 40px;
    -moz-user-select: none;
    user-select: none;
    justify-self: center;
`
export const PlacesTitle = styled.p`
    grid-column: 1/-1;
    margin: 0;
`

export const PlacesContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 50px;
`