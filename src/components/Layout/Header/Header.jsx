import React from 'react';
import { HeaderContainer, Button, FindItLogo, Buttons } from './HeaderStyles';
import findItLogo from '../../../images/findit_logo.png';
import { Link } from 'react-router-dom'

const Header = () => {

        return (
            <HeaderContainer>
                    <FindItLogo>
                    <img src={findItLogo} alt="logo" />
                    </FindItLogo>
                    <Buttons>
                        <Link to='/RegisterForm'> <Button changeColor={false}> 
                                register
                            </Button></Link>
                        <Link to='/LoginForm'><Button changeColor>
                                login
                            </Button></Link>
                </Buttons>
            </HeaderContainer>
        );

}

export default Header;