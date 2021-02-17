import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'  
import {Link} from 'react-router-dom';
import Title from './Title';

export default class Home extends Component {
    
    render() {
        return (  
            <div className="py-5 bg-dark">
                    <Carousel autoPlay={true} interval={4000} indicators={false}>
                        <Carousel.Item>
                            <img className="mx-auto d-block h-100" src={'img/product1_carousel.png'} width="auto"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block h-100" src={'img/product4.png'} width="auto"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block h-100" src={'img/product3.png'} width="auto"/>
                        </Carousel.Item>
                    </Carousel>
            </div>  
    )  
    }
}