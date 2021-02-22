import React, { Component } from 'react'
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <FooterWrap>
                <footer>
                    <div className="socials-footer">
                        <div className="socials-icons">
                            <a href="#"><i className="fa fa-instagram"/></a>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                        </div>
                    </div>
                </footer>
            </FooterWrap>
        )
    }
}
const FooterWrap = styled.nav`
    background: var(--mainNav);
    
    .nav-link{
        color: var(--mainWhite);
        font-size: 1.8rem;
        text-transform: capitalize;
    }
`;
