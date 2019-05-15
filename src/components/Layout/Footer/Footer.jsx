import React from 'react'
import { FooterContainer } from './FooterStyles'
import { FindItLogo } from './FooterStyles'
import { GithubLogo } from './FooterStyles'
import gitLogo from '../../../images/github_logo.png'
import findItLogo from '../../../images/findit_logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {

        return (
            <FooterContainer>
                <Link to='/'><FindItLogo>
                    <img src={findItLogo} alt="logo" />
                </FindItLogo></Link>
                <GithubLogo>
                    <a href="https://github.com/SzymonCzapkowski" title="Szymon Czapkowski"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/MagdalenaKania" title="Magdalena Kania"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/rzezniczakmateusz" title="Mateusz Rzeźniczak"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/angellika" title="Angelika Cieślik"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/marzenazavala" title="Marzena Bortnowska-Zavala"><img src={gitLogo} alt="logo" /></a>
                    <a href="https://github.com/RyszardPolechonski" title="Ryszard Polechonski"><img src={gitLogo} alt="logo" /></a>
                </GithubLogo>
            </FooterContainer>
        );

}

export default Footer;