import React from 'react';
import { HeaderContainer, Button, FindItLogo, Buttons } from './HeaderStyles';
import findItLogo from '../../../images/findit_logo.png';

const Header = () => {

        return (
            <HeaderContainer>
                    <FindItLogo>
                    <img src={findItLogo} alt="logo" />
                    </FindItLogo>
                    <Buttons>
                        <Button changeColor={false}>
                            register
                        </Button>
                        <Button changeColor>
                            login
                        </Button>
                </Buttons>
            </HeaderContainer>
        );

}

export default Header;