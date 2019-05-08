import React from 'react';
import { TopNavContainer } from './TopNavStyles';
import { HamburgerButton } from './TopNavStyles';


const TopNav = () => {

        return (
            <TopNavContainer>
                <HamburgerButton>
                </HamburgerButton>    
                    <ul>
                        <li>Kategoria 1</li>
                        <li>Kategoria 2</li>
                        <li>Kategoria 3</li>
                        <li>Kategoria 4</li>
                        <li>Kategoria 5</li>
                    </ul>
            </TopNavContainer>
        );

}

export default TopNav;