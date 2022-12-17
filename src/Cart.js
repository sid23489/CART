import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component
{
    constructor()
    {
        super();
        this.state={
        products: [{
            price:999,
            title:'WATCH',
            qty:10,
            img:'',
            id:1
        },{price:9999,
        title:'Phone',
        qty:1,
        img:'',
        id:2
    }
        ,{price:99999,
        title:'LAPTOP',
        qty:4,
        img:'',
    id:3}]
    }
}
    render()
    {
        const {products}=this.state;
        return(
          
            <div class="cart">
                {
                    products.map((product)=>{
                        return <CartItem product={product} key ={product.id}/>
                    })
                }
            </div>
        );
    }
}
export default Cart;