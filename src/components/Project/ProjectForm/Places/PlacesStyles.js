import styled from 'styled-components';

export const FOrmPlacesContainer = styled.div `
    width: 250px;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 40px;
    -moz-user-select: none;
    user-select: none;
    justify-self: center;
`

export const PlacesTitle = styled.p `
    grid-column: 1/-1;
    margin: 0;
`

export const PlacesContainer = styled.div `
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);

`

export const Place = styled.div `
    height: 38px;
    width: 38px;
    border-radius: 10px;
    background: ${props => props.status ? "#434343" : "rgba(55, 88, 206, 0.8)"};
`

export const PlusButton = styled.div `
margin-left: 20%;
display: inline-block;
text-align: center;
height: 38px;
width: 38px;
display: inline-block
.button{
    background-color: rgba(55, 88, 206, 0.8);
    font-size: 30px;
    width:100%;
    border-radius:30%;
    border-style:none;
}
`
export const Section = styled.div `
display: inline-block;
`