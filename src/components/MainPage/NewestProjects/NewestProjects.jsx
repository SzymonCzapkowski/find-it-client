import React, {useEffect} from 'react'
import { ProjectsContainer } from './NewestProjectsStyles'
import { NewestProjectsBar} from './NewestProjectsStyles'
import { NewestProjectsBox} from './NewestProjectsStyles'
import { NewestProjectsBoxes} from './NewestProjectsStyles'
import react_logo from '../../../images/react.png'
// import axios from 'axios'

const NewestProjects = () => {
    
    // useEffect(() => {
    //     axios.get('');
    // }, []);

    return(
        <ProjectsContainer>
            <NewestProjectsBar>
                <p> The newest projects </p>
            </NewestProjectsBar>
            <NewestProjectsBoxes>
                <NewestProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p className="bottomLine">Lorem ipsum dolor sin amet</p>
                    <p>user</p>
                </NewestProjectsBox>
                <NewestProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p>Lorem ipsum dolor sin amet</p>
                    <p>user</p>
                </NewestProjectsBox>
                <NewestProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p>Lorem ipsum dolor sin amet</p>
                    <p>user</p>
                </NewestProjectsBox>
                <NewestProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p>Lorem ipsum dolor sin amet</p>
                    <p>user</p>
                </NewestProjectsBox>
            </NewestProjectsBoxes>            
        </ProjectsContainer>
       
    );  
};

export default NewestProjects;