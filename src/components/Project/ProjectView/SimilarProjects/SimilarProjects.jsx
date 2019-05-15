import React from 'react'
import { ProjectsContainer } from './SimilarProjectsStyles'
import { SimilarProjectsBar } from './SimilarProjectsStyles'
import { SimilarProjectsBox } from './SimilarProjectsStyles'
import { SimilarProjectsBoxes } from './SimilarProjectsStyles'
import react_logo from '../../../../images/react.png'
import axios from 'axios'

class  SimilarProjects extends React.Component {
    state = {
        projects: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/projects/')
        .then(res => {
            const slicedProject = res.data.slice(0,4);
            this.setState({projects:slicedProject});
            // console.log(slicedProject)
        });
    }

    render () {
        return (
            <ProjectsContainer>
                <SimilarProjectsBar>
                    <p> Similar projects </p>
                </SimilarProjectsBar>
                    <SimilarProjectsBoxes>
                        {this.state.projects.map(data=>
                        <SimilarProjectsBox>
                        <img src={react_logo} alt="logo"></img>
                        <p className="bottomLine">{data.name}</p>
                        <p>{data.category}</p>
                        </SimilarProjectsBox>)}
                </SimilarProjectsBoxes>
            </ProjectsContainer>          
        )
    }
};

export default SimilarProjects;