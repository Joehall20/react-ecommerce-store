import React, { Component } from 'react'
import Title from './Title';
import {CartButton} from './Button';


export default class AboutUs extends Component {
    render() {
        return (
            <div className="py-5">
                <Title title="About Us"/>
                <div className="body">

                    The finest armour in the galaxy

                    <div>
                    <CartButton prodbtn onClick={()=>{
                        window.location.href="mailto:TheBrushWarrior@hotmail.com"
                            }}>
                        <span className="title">Want Something Custom?</span>
                    </CartButton>
                    </div>
                </div>
            </div>
        )
    }
}
