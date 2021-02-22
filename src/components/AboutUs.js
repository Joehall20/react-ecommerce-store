import React, { Component } from 'react'
import Title from './Title';
import {CartButton} from './Button';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="py-5 px-3">
                <Title title="About Us"/>
                <div>
                    <p className="body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                    <CartButton prodbtn onClick={()=>{
                        //Take user to windows mail for email
                        window.location.href="mailto:TheBrushWarrior@hotmail.com"
                            }}>
                        <span className="title">Want Something Custom?</span>
                    </CartButton>
            </div>
        )
    }
}
