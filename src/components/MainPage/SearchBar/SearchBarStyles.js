import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    height:20vh;
    transform:translateY(-10vh);
`
export const SearchContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgba(55, 88, 206, 0.8);
    width:60%;
    border-radius:5px;
`
export const SearchForm = styled.input`
    height:40px;
    width: 40%;
    border-radius: 5px 0 0 5px;
    box-sizing:border-box;
    border:none;
    text-align:center;
`
export const SearchSelect = styled.select`
    height:40px;
    width: 20%;
    border-radius: 0 5px 5px 0;
    border:none;
    border-left: 1px solid #3758CE;
    margin: 0 10px 0 0;
`
export const SearchButton = styled.button`
    color: white;
    font-size:18px;
    width: 145px;
    height: 35px;
    text-decoration: none;
    border-radius: 5px;
    border:none;
    margin: 0 40px 0 0;
    background: #434343;
    margin: 0;
`