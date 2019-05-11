import React, { useState, useEffect } from "react";
import { TopNavContainer } from "./TopNavStyles";
import { HamburgerButton } from "./TopNavStyles";

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
            {windowWidth <= 500 ? (
                <>
                <div className="hamburgerBar"></div>
                <HamburgerButton onClick={() => handleClick()} isMenuDisplayed={isMenuDisplayed}/>
                </>) : null}
            
            {isMenuDisplayed || windowWidth > 500 ? (
                <ul>
                    <li>Kategoria 1</li>
                    <li>Kategoria 2</li>
                    <li>Kategoria 3</li>
                    <li>Kategoria 4</li>
                    <li>Kategoria 5</li>
                </ul>
            ) : null}
        </TopNavContainer>
    );
};

export default TopNav;
