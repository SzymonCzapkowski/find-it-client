import React from 'react';
import axios from 'axios';
import ellipse from '../../../../images/Ellipse.png';
import githublogo from '../../../../images/github_logo.png';
import linkedinlogo from '../../../../images/linked-in-logo.png';
import wwwlogo from '../../../../images/worldwide.png';
import { MainProfileView } from './ProfileViewMainStyles';
import { Account } from './ProfileViewMainStyles';
import { ProfilePhoto } from './ProfileViewMainStyles';
import { Logos } from './ProfileViewMainStyles';
import { Titles } from './ProfileViewMainStyles';
import { Input } from './ProfileViewMainStyles';
import { Head } from './ProfileViewMainStyles';
import { Div } from './ProfileViewMainStyles';
import { Img } from './ProfileViewMainStyles';
import { Label } from './ProfileViewMainStyles';
import { Label1 } from './ProfileViewMainStyles';


class ProfileViewMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            userName: '',
            city: '',
            country: '',
            github: '',
            linkedin: '',
            website: ''
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/api/users/${this.props.userId}/`)
            .then(response => {
                this.setState({ 
                    fullName: response.data.name,
                    email: response.data.email,
                    userName: response.data.username,
                    city: response.data.city,
                    country: response.data.country,
                    github: response.data.gitHub,
                    linkedin: response.data.linkedin,
                    website: response.data.www
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <MainProfileView>
                <Head>
                    <Account>Account Information</Account>
                    <ProfilePhoto src={ellipse} alt="photo" />
                    <Logos>
                        <a href={this.state.github} target="_blank">
                            <Img src={githublogo} alt="github" />
                        </a>
                        <a href={this.state.linkedin} target="_blank">
                            <Img src={linkedinlogo} alt="linkedin" />
                        </a>
                        <a href={this.state.website} target="_blank">
                            <Img src={wwwlogo} alt="website" />
                        </a>
                    </Logos>
                </Head>
                <Div>
                    <Label1>
                        <Titles>Full Name:</Titles>
                        <Input type="text" value={this.state.fullName} name="name" readonly></Input>
                    </Label1>
                    <Label>
                        <Titles>Email:</Titles>
                        <Input type="text" value={this.state.email} name="email" readonly></Input>
                    </Label>
                    <Label>
                        <Titles>User Name:</Titles>
                        <Input type="text" value={this.state.userName} name="username" readonly></Input>
                    </Label>
                    <Label>
                        <Titles>City:</Titles>
                        <Input type="text" value={this.state.city} name="city" readonly></Input>
                    </Label>
                    <Label>
                        <Titles>Country:</Titles>
                        <Input type="text" value={this.state.country} name="country" readonly></Input>
                    </Label>
                </Div>
            </MainProfileView>
        );
    }
}

export default ProfileViewMain;
