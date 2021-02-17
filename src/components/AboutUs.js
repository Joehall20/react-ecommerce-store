import React, { Component } from 'react'
import Title from './Title';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="py-5">
                <Title title="About Us"/>
                <div className="body">
                    The finest armour in the galaxy
                </div>
            </div>
        )
    }
}
