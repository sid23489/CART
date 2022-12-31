import { getByTitle } from "@testing-library/react";
import React from "react";
class CartItem extends React.Component
{
 
    render()
    {
        const{price,title,qty}=this.props.product;
        const{product,
            onIncreaseQuantity,
            onDecreaseQuantity,
        onDeleteProduct}=this.props;
        return (
<div className="cart-item">
    {this.props.jsx}
    <div className="left-block">
     <img style={styles.image}/>
    </div>
    <div className="right-block">
    <div style={{fontSize:25}}>{title}</div>
    <div style={{color:'green'}}>{price}</div>
    <div style={{color:'blue'}}>Qty:{qty}</div>
    <div className="cart-item-actions">
        {/*buttons*/}
        <img alt ="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={()=>onDecreaseQuantity(product)}/>
        <img alt ="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"  onClick ={()=>onIncreaseQuantity(product)}/>
        <img alt ="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" onClick={()=>onDeleteProduct(product.id)}/>
    </div>
    </div>
    </div>
        );
    }
}
const styles={
    image:{
        height:110,
        width:112,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;