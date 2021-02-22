import React, { Component } from 'react'
import { Link } from "react-router-dom";
import navlogo from '../logo.svg';
import styled from 'styled-components';
import { CartButton } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrap className="navbar navbar-expand-sm navbar-dark px-sm-1">
                {/*https://www.iconfinder.com/icons/1626610/boba_fett_hunter_mandalorian_star_wars_bounty_icon Creative Commons (Attribution 3.0 Unported); https://www.iconfinder.com/sensibleworld8*/}
                <Link to='/'>
                    <img src={navlogo} alt="store" className="navbar-brand"/>
                </Link>
                
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"></li>
                    <Link to="/productlist" className="nav-link">
                        Products
                    </Link>
                </ul>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"></li>
                    <Link to="/aboutus" className="nav-link">
                        About Us
                    </Link>
                </ul>
                
                <Link to="/cart" className="title ml-auto">
                    <CartButton>
                        <span className="mr-2">
                            <i className="fas fa-shopping-cart"/>
                        </span>
                        My Cart
                    </CartButton>
                </Link>
                
            </NavWrap>            
        )
    }
}


const NavWrap = styled.nav`
    background: var(--mainNav);
    
    .nav-link{
        color: var(--mainWhite);
        font-size: 1.8rem;
        text-transform: capitalize;
    }
`;
