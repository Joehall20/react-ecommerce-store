import React from 'react'

export default function CartItem({item,value}) {
    const{ id, title, imgMain, price, total, count} = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-1 text-center">
            {/*Image*/}
            <div className="col-10 mx-auto col-lg-2">
                <img src={imgMain} style={{width: '10rem', height:'10rem'}} className="img-fluid"/>
            </div>
            {/*Title*/}
            <div className="col-10 mx-auto col-lg-2">
                <span>{title}</span>
            </div>
            {/*Price*/}
            <div className="col-10 mx-auto col-lg-2">
                <span>£{price}</span>
            </div>
            {/*Outer Container for Quantity*/}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        {/*Quantity*/}
                        <div>
                            <span className="btn btn-value mx-1" onClick={()=>decrement(id)}>
                                -
                            </span>
                            <span className="btn text-count">{count}</span>
                            <span className="btn btn-value mx-1" onClick={()=>increment(id)}>
                                +
                            </span>

                        </div>
                        
                    </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="trash-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong>£{total}</strong>
            </div>
        </div>
        
    )
}