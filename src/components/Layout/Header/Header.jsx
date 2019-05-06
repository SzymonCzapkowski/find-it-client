import React from 'react';
import { HeaderContainer } from './HeaderStyles';
import { Button } from './HeaderStyles';
import { FindItLogo } from './HeaderStyles';
import { Buttons } from './HeaderStyles';
import findItLogo from '../../../images/findit_logo.png';

const Header = () => {

        return (
            <HeaderContainer>
                    <FindItLogo>
                    <img src={findItLogo} alt="logo" />
                    </FindItLogo>
                    <Buttons>
                        <Button color={false}>
                            register
                        </Button>
                        <Button color>
                            login
                        </Button>
                </Buttons>
            </HeaderContainer>
        );

}


export default Header;