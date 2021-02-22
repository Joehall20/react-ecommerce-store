import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, title, imgMain } = this.props.product;
        return (
            <ProductWrap className="mx-center col-xs-1 col-md-1 col-lg-6 my-3 ">
                <div className="card">
                    <ProductConsumer>
                        {(value)=> (
                        <div className="img-cont p-1" onClick={()=> value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={imgMain} alt="Product Image" className="card-img"/>
                                <div className="img-overlay">
                                    {title}
                                </div>
                            </Link>
                        </div>
                        )}
                    </ProductConsumer>
                </div>
                
            </ProductWrap>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        price:PropTypes.number,
        incart:PropTypes.bool

    }).isRequired
}

const ProductWrap = styled.div`
.card {
    overflow: hidden;
    position: relative;
    height: auto;    
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    
}
.card img {
    transition: transform 1.7s ease;
}
.card:hover img {
    transform: scale(1.5);
    filter: blur(1px);
}

.img-overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    color: var(--mainWhite);
    width: 100%;
    opacity: 0;
    font-size: 1.5rem;
    padding: 0.4rem;
    text-align: center;
    bottom: 10%;
    font-family:'Share Tech Mono', monospace!important;
    text-transform: uppercase;
}
.card:hover .img-overlay {
    opacity: 1;
}
`;