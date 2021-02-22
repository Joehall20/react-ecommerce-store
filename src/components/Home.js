import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'  
import {Link} from 'react-router-dom';
import Title from './Title';

export default class Home extends Component {
    
    render() {
        return (  
            <div className="bg-dark">
                    <Carousel autoPlay={true} interval={3000} controls={false} indicators={false}>
                        <Carousel.Item>
                            <img className="mx-auto d-block img-fluid" src={'img/product1_carousel.png'}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block img-fluid" src={'img/product4.png'} width="auto"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block img-fluid" src={'img/product3.png'} width="auto"/>
                        </Carousel.Item>
                    </Carousel>

            </div>  
            

    )  
    }
}