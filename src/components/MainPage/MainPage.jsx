import React from 'react';
import { Link } from "react-router-dom";
import { MainPageContainer } from './MainPageStyles';

const MainPage = () => {

        return (
            <MainPageContainer>
                <p>Strona główna</p>
                <Link to='./profile'>Go to example profile</Link> <br/>
                <Link to='./profile/123'>Go to profile of user with ID: 123</Link>
            </MainPageContainer>
        );

}

export default MainPage;