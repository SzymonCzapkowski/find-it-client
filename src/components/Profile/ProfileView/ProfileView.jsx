import React from 'react';
import { Link } from "react-router-dom";
import { ProfileViewContainer } from './ProfileViewStyles';
/*import {SearchBar} from '../../MainPage/SearchBar/SearchBar';*/

const ProfileView = ({ match }) => {
        console.log(match);
        return (
            <ProfileViewContainer>
                {/* <SearchBar /> */}
                <p>Profil użytkownika</p>
                <p>User: {match.params.id || "No user with this ID"}</p>
                <Link to='/'>Go to main page</Link>
            </ProfileViewContainer>
        );

}

export default ProfileView;