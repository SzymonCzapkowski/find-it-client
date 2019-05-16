import React from 'react';
import { ProjectContainer } from './ProjectOwnerStyles'
import { ProjectInformationText } from './ProjectOwnerStyles'
import { ProjectOwnerText } from './ProjectOwnerStyles'
import axios from 'axios'

class ProjectOwner extends React.Component {
    state = {
        author: '',
        createDate: ''
    } 

    componentDidMount() {
        axios.get('https://sleepy-sands-37154.herokuapp.com/api/projects/', {params:{_id:"5cd1926120dfe817a4230ec6"}})
        .then(res => {
            const author = 'JohnyBravo';
            const createDate = res.data[0].createDate;
            this.setState({author:author, createDate:createDate});
            // console.log(res.data[0])
        });
    }

    render () {

        return (
            <ProjectContainer>
                <ProjectInformationText>
                    <p>Project Information</p>
                </ProjectInformationText>
                <ProjectOwnerText>
                    <p>Project Owner:{this.state.author}</p>
                    <p>Created:{this.state.createDate}</p>
                    <p>Status:</p>
                </ProjectOwnerText>
            </ProjectContainer>
        );
    }

}

export default ProjectOwner;