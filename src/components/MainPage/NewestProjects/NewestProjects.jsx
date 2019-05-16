import React  from 'react'
import { ProjectsContainer } from './NewestProjectsStyles'
import { NewestProjectsBar} from './NewestProjectsStyles'
import { NewestProjectsBox} from './NewestProjectsStyles'
import { NewestProjectsBoxes} from './NewestProjectsStyles'
import react_logo from '../../../images/react.png'
import axios from 'axios'

class NewestProjects extends React.Component {
    state = {
        projects: []
    }

    componentDidMount() {
        axios.get('https://sleepy-sands-37154.herokuapp.com/api/projects/')
        .then(res => {
            const slicedProject = res.data.slice(0,3);
            this.setState({projects:slicedProject});
            // console.log(slicedProject)
        });
    }
    
    render () {
        return(
            <ProjectsContainer>
                <NewestProjectsBar>
                    <p> The newest projects </p>
                </NewestProjectsBar>
                <NewestProjectsBoxes>
                    {this.state.projects.map(data=>
                    <NewestProjectsBox>
                    <img src={react_logo} alt="logo"></img>
                    <p className="bottomLine">{data.name}</p>
                    <p>{data.category}</p>
                    </NewestProjectsBox>)} 
                </NewestProjectsBoxes>            
            </ProjectsContainer>
        
        );  
    };
}

export default NewestProjects;