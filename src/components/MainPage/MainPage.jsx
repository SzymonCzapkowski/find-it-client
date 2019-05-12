import React from 'react';
import { Link } from "react-router-dom";
import { MainPageContainer } from './MainPageStyles';
import Find from './Find/Find';
import SearchBar from './SearchBar/SearchBar';

const MainPage = () => {

        return (
            <MainPageContainer>
                <SearchBar />
                <p>Strona główna</p>
                <Link to='./profile'>Go to example profile</Link> <br/>
                <Link to='./profile/123'>Go to profile of user with ID: 123</Link>
                <Find />
            </MainPageContainer>
            
        );

}

export default MainPage;