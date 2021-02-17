import React from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton';

export default function CartTotal({value,history}) {
    const {cartSubtotal, cartTax, cartTotal, deleteCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-uppercase text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=> deleteCart()}>
                            Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <strong>
                                £ {cartSubtotal}
                            </strong>
                        </h5>
                        <h5>
                            <strong>
                                £ {cartTax}
                            </strong>
                        </h5>
                        <h5>
                            <strong>
                                £ {cartTotal}
                            </strong>
                        </h5>
                        <PayPalButton total={cartTotal} deleteCart={deleteCart} history={history}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
