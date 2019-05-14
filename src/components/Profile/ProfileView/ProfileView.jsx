import React from 'react';
import { Link } from "react-router-dom";
import { ProfileViewContainer } from './ProfileViewStyles';
import ProfileViewMain from './ProfileViewMain/ProfileViewMain';
import ProfileViewSkills from './ProfileViewSkills/ProfileViewSkills';
/*import {SearchBar} from '../../MainPage/SearchBar/SearchBar';*/


const ProfileView = ({ match }) => {
        console.log(match);
        return (
            <ProfileViewContainer>
                {/* <SearchBar /> */}
                <p>Profil użytkownika</p>
                <ProfileViewMain userId={match.params.id}/>
                <ProfileViewSkills />
                <p>User: {match.params.id || "No user with this ID"}</p>
                <Link to='/'>Go to mainpage</Link>
            </ProfileViewContainer>
        );

}

export default ProfileView;