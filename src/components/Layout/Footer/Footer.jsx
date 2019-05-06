import React from 'react';
import { FooterContainer } from './FooterStyles';
import { FindItLogo } from './FooterStyles';
import { GithubLogo } from './FooterStyles';
import gitLogo from '../../../images/github_logo.png';
import findItLogo from '../../../images/findit_logo.png';


const Footer = () => {

        return (
            <FooterContainer>
                <FindItLogo>
                    <img src={findItLogo} alt="logo" />
                </FindItLogo>
                <GithubLogo>
                    <a href="https://github.com/SzymonCzapkowski" title="Szymon Czapkowski"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/SzymonCzapkowski" title="Szymon Czapkowski"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/SzymonCzapkowski" title="Szymon Czapkowski"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/SzymonCzapkowski" title="Szymon Czapkowski"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/SzymonCzapkowski" title="Szymon Czapkowski"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/SzymonCzapkowski" title="Szymon Czapkowski"><img src={gitLogo} alt="logo" /></a>
                </GithubLogo>
            </FooterContainer>
        );

}

export default Footer;