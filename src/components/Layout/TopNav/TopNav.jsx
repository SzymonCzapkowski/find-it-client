import React, { useState, useEffect } from "react"
import { TopNavContainer } from "./TopNavStyles"
import { HamburgerButton } from "./TopNavStyles"

const TopNav = () => {
    const [isMenuDisplayed, setMenuDisplayed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth);
    }, []);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    const handleClick = () => {
        setMenuDisplayed(!isMenuDisplayed);
    };

    return (
        <TopNavContainer>
        <div className="bar">
            {windowWidth <= 500 ? (
                <>                
                <div className="hamburgerBar"></div>
                <HamburgerButton onClick={() => handleClick()} isMenuDisplayed={isMenuDisplayed}/>
                </>) : null}
            
            {isMenuDisplayed || windowWidth > 500 ? (
                <ul>
                    <li>Front-end</li>
                    <li>Node.js</li>
                    <li>.NET</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
            ) : null}
        </div> 
        <p>Make your IT project done</p>
        </TopNavContainer>
    );
};

export default TopNav;
