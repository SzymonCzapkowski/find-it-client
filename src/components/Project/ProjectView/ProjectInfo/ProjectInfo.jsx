import React from 'react'
import { ProjectContainer } from './ProjectInfoStyles'
import { ProjectName } from './ProjectInfoStyles'
import { ProjectDescription } from './ProjectInfoStyles'
import axios from 'axios'

class ProjectInfo extends React.Component {
    state = {
        name: '',
        description: ''
    } 

    componentDidMount() {
        axios.get('http://localhost:3001/api/projects/', {params:{_id:"5cd1926120dfe817a4230ec6"}})
        .then(res => {
            const name = res.data[0].name;
            const description = res.data[0].description;
            this.setState({description:description, name:name});
            // console.log(res.data[0])
        });
    }

    render () {
        return(
            <ProjectContainer>
                <ProjectName>
                    <p>Project Name</p>
                    <p>{this.state.name}</p>
                </ProjectName>
                <ProjectDescription>
                    <p>Description</p>
                    <p>{this.state.description}</p>
                </ProjectDescription>
            </ProjectContainer>
        )
    }

};

export default ProjectInfo;

