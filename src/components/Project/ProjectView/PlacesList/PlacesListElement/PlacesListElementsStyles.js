import styled from 'styled-components';

export const PlaceElement = styled.div`
    height: 38px;
    width: 38px;
    border-radius: 10px;
    background: ${props => props.status ? "#434343" : "rgba(55, 88, 206, 0.8)"};
    position: relative;

    .container{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 200px;
        min-height: 220px;
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr;
    }

    .closeBtn{
        position: absolute;
        top: -12px;
        right: -12px;
        background: green;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background: #C4C4C4;
    }
    .closeBtn p{
        margin: 0;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        color: black;
        position: absolute;
        top:-5px;
        left: 5px
    }

    .name{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        color: #434343;
    }

    .name p{
        margin: 0 auto 0 20px;;
    }

    .skills{
        width: 100%;
    }

    .skills p{
        margin: 10px auto 10px 22px;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        color: #434343;

    }

    .skills ul{
        list-style: none;
        list-style-type: none;
        margin: 0 0 0 20px;
        padding: 0 0;
    }

    .takeBtn{
        margin: 35px auto;
        width: 119px;
        height: 32px;
        background: ${props => props.status ? "#434343" : "rgba(55, 88, 206, 0.8)"};
        border-radius: 10px;
        font-family: Ubuntu;
        font-size: 18px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .takeBtn p{
        margin: 0;
    }
`;