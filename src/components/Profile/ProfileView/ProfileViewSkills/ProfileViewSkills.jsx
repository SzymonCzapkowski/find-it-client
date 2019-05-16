import React from 'react';
import { Skills } from './ProfileViewSkillsStyles';
import { SkillsList } from './ProfileViewSkillsStyles';
import axios from 'axios';


class ProfileViewSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            skills: [] 
        }
    }

    componentDidMount() {
        axios.get(`https://sleepy-sands-37154.herokuapp.com/api/users/${this.props.userId}/`)
            .then(response => {
               this.setState({ 
                    skills: response.data.skills
               })
            })
            .catch(error => {
               console.log(error);
            });
    }

    render() {
        return(
            <div>
                <Skills>Skills:</Skills>
                <SkillsList>
                    {this.state.skills.map((item, i) =>
                        <li>{item}</li>
                    )}
                </SkillsList>
            </div>
            
        )
    }

}

export default ProfileViewSkills;