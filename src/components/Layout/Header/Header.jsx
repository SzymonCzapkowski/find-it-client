import React from 'react';
import { HeaderContainer, Button, FindItLogo, Buttons } from './HeaderStyles'
import findItLogo from '../../../images/findit_logo.png'
import { Link } from 'react-router-dom'

const Header = () => {

        return (
            <HeaderContainer>
                    <Link to='/'><FindItLogo>
                    <img src={findItLogo} alt="logo" />
                </FindItLogo></Link>
                    <Buttons>
                        <Link to='/register'> <Button changeColor={false}> 
                                register
                            </Button></Link>
                        <Link to='/login'><Button changeColor>
                                login
                            </Button></Link>
                </Buttons>
            </HeaderContainer>
        );

}

export default Header;