import styled from 'styled-components';

export const ViewPlacesContainer = styled.div`
    width: 200px;
    display: grid;
    grid-template-rows: 50px;
    -moz-user-select: none;
    user-select: none;
    justify-self: center;
`
export const PlacesTitle = styled.p`
    grid-column: 1/-1;
    margin: auto auto auto 0;
`
export const PlacesContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, 40px);
    margin-left: 50px;
`