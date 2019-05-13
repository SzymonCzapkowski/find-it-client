import React from 'react';
import axios from 'axios';
import { TitleBar, Project, Project1 } from './SimilarProjectsStyles';

class SimilarProject extends React.Component {
    state = {
        category: null,
        name: null
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/projects/')
        .then(res => {
            const random = () => {return Math.floor(Math.random() * (res.data.length - 0) + 0)};
            const randomProject = res.data[`${random()}`];
            const name = randomProject.name;
            const category = randomProject.category;
            this.setState({category:category, name:name});
            // console.log()
        });
    }

    render() {
        return (
            <div>
            <TitleBar>Similar Project
            <Project>{this.state.name}+++{this.state.category}</Project>
            <Project1>{this.state.name}+++{this.state.category}</Project1>
            </TitleBar>           
            </div>
        )
    }
}

export default SimilarProject;