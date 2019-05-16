import React from 'react'
import { ProjectsContainer } from './PopularProjectsStyles'
import { PopularProjectsBar } from './PopularProjectsStyles'
import { PopularProjectsBox } from './PopularProjectsStyles'
import { PopularProjectsBoxes } from './PopularProjectsStyles'
import react_logo from '../../../images/react.png'
import axios from 'axios'


class PopularProjects extends React.Component {
    state = {
        projects: []
    }

    componentDidMount() {
        axios.get('https://sleepy-sands-37154.herokuapp.com/api/projects/')
        .then(res => {
            const slicedProject = res.data.slice(0,3);
            this.setState({projects:slicedProject});
            console.log(slicedProject)
        });
    }

    render () {
        return (
            <ProjectsContainer>
                <PopularProjectsBar>
                    <p> Popular projects </p>
                </PopularProjectsBar>
                <PopularProjectsBoxes>
                    {this.state.projects.map(data=>
                    <PopularProjectsBox>
                        <img src={react_logo} alt="logo"></img>
                        <p>{data.name}t</p>
                        <p>{data.category}</p>
                    </PopularProjectsBox>)}
                </PopularProjectsBoxes>
            </ProjectsContainer>
        );
    }
};

export default PopularProjects;