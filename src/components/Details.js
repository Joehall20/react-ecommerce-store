import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {CartButton} from './Button';

export default class Details extends Component {
    render() {
        
        return (
            <ProductConsumer>
                {(value)=>{
                    
                    const {id, imgMain, img1, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-black my-2 title">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/*Product Img*/}
                            <div className="row">
                                
                                <div className="col-10 mx-auto col-md-6 my-3">  
                                    <img src={imgMain} className="img-fluid"/>
                                    <img src={img1} className="img-fluid"/>
                                </div>                                
                            {/*Product Text*/}
                                <div className="body col-10 mx-auto col-md-6 my-3 position-sticky">
                                <p>{info}</p>
                                    <h4>
                                        <strong>
                                            <span>£</span>{price}
                                        </strong>
                                    </h4>
                            {/*Button*/}
                                <div>
                                    <Link to='/productList'>
                                        <CartButton prodbtn>
                                            Back to Products
                                        </CartButton>
                                    </Link>

                                    <Link to='/cart'>
                                        <CartButton cartBtn 
                                        disabled={inCart ? true : false} 
                                        onClick={() => {
                                            value.addToCart(id);
                                            }}>
                                                {inCart ? "Go to Cart" : "Add to Cart"}
                                        </CartButton>
                                    </Link>
                                </div>
                                </div>
                            
                            </div>
                                    
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}


