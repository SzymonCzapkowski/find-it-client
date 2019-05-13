import React from 'react';
import { Content, Title } from './ProjectInfoStyles';
import axios from 'axios';

class ProjectInfo extends React.Component {
    state = {
        name: null,
        description: null
    } 

    componentDidMount() {
        axios.get('http://localhost:3001/api/projects/', {params:{_id:"5cd944bba1616d16b4aafd2c"}})
        .then(res => {
            const name = res.data[0].name;
            const description = res.data[0].description;
            this.setState({description:description, name:name});
            // console.log(data)
        });
    }

    render () {
        return (
            
            <Title>{this.state.name}
            <Content>{this.state.description}</Content>          
            </Title>
        )
    }
}

export default ProjectInfo;

