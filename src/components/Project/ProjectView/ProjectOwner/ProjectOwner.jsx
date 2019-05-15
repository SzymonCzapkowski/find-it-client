import React from 'react';
import { ProjectContainer } from './ProjectOwnerStyles'
import { ProjectInformationText } from './ProjectOwnerStyles'
import { ProjectOwnerText } from './ProjectOwnerStyles'
import { StatusButton } from './ProjectOwnerStyles'
import axios from 'axios'

class ProjectOwner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            createDate: '',
            status: 'Open'
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/api/project/${this.props.projectId}/`)
            .then(response => {
                this.setState({ 
                    author: response.data.author,
                    createDate: response.data.createDate,
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <ProjectContainer>
                <ProjectInformationText>
                    <p>Project Information</p>
                </ProjectInformationText>
                <ProjectOwnerText>
                    <p>Project Owner:</p>
                        {this.state.author}
                    <p>Created:</p>
                        {this.state.createDate}
                    <p>Status:</p>
                        <StatusButton>{this.state.status}</StatusButton>
                </ProjectOwnerText>
            </ProjectContainer>
        );
    }
}

export default ProjectOwner;