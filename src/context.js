import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
    state={
        products: [], 
        detailProduct: detailProduct,
        cart:[],
        cartSubtotal: 0,
        cartShipping: 0,
        cartTotal: 0
    };
    componentDidMount(){
        this.setProducts();
    };
    setProducts=()=>{
    let tempProducts = [];
    storeProducts.forEach(item =>{
        const singleItem={...item};
        tempProducts =[...tempProducts, singleItem];
    });
    this.setState(()=>{
        return {products:tempProducts}
    });
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{detailProduct:product}
        })
    };
    addToCart = id =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product]};
        },()=>{
            this.totals();
        });
    };

    /*Cart Methods*/

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct= tempCart.find(item=>item.id ===id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
            /*if Statement to limit number of any one item*/
        if(product.count === 5){
            product.count = product.count + 0;
            product.total = product.count * product.price;
        }else{
            product.count = product.count + 1;
            product.total = product.count * product.price;
        }
        this.setState(()=>{
                return {
                    cart:[...tempCart]
                }
            },()=>{
                this.totals();
            });
        

        
    };
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct= tempCart.find(item=>item.id ===id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        if(product.count === 0){
            this.removeItem(id);
        }else{
            product.total = product.count * product.price;this.setState(()=>{
                return {
                    cart:[...tempCart]
                }
            },()=>{
                this.totals();
            });
        }   
    };
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart =[...this.state.cart];

        tempCart = tempCart.filter(item =>item.id !==id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProd = tempProducts[index];
        removedProd.inCart=false;
        removedProd.count=0;
        removedProd.total=0;

        this.setState(()=>{
            return {
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },()=>{
            this.totals();
        }
        );
    };

    deleteCart = () => {
        this.setState(()=>{
            return{cart:[]};
        },()=>{
            this.setProducts();
            this.totals();
        });
    };
    
    totals = () => {
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        //Change shipping percentage
        const tempShipping = subTotal * 0.05;
        const shipping = parseFloat(tempShipping.toFixed(2));
        const total = subTotal + shipping;
        this.setState(()=>{
            return{
                cartSubtotal: subTotal,
                cartShipping: shipping,
                cartTotal:total
            }
        })
    };

    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state, 
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    increment:this.increment,
                    decrement:this.decrement,
                    removeItem: this.removeItem,
                    deleteCart: this.deleteCart
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
