import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'  
import {Link} from 'react-router-dom';

export default class Home extends Component {
    
    render() {
        return (  
            <div className="bg-dark">
                {/*Link to Product List when image is clicked*/}
                <Link to="/productlist">
                    <Carousel autoPlay={true} interval={3000} controls={false} indicators={false}>
                        <Carousel.Item>
                            <img className="mx-auto d-block img-fluid" src={'img/product1_carousel.png'} height="100vh"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block img-fluid" src={'img/product4.png'} height="auto"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block img-fluid" src={'img/product3.png'} height="auto"/>
                        </Carousel.Item>
                    </Carousel>
                </Link>
            </div>  
            

    )  
    }
}