import { getByTitle } from "@testing-library/react";
import React from "react";
class CartItem extends React.Component
{
 
    
    increaseQuantity=()=>
    {
        //this.state.qty+=1;
        //set state form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });
        //form 2
        this.setState((prevState)=>{
            return {
            qty:prevState.qty+1
            }
        });
    }
    decreaseQuantity=()=>{
        const{qty}=this.state;
        if(qty==0)
        return;
        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        });
    }
    render()
    {
        const{price,title,qty}=this.props.product;
        return (
<div className="cart-item">
    <div className="left-block">
     <img style={styles.image}/>
    </div>
    <div className="right-block">
    <div style={{fontSize:25}}>{title}</div>
    <div style={{color:'green'}}>{price}</div>
    <div style={{color:'blue'}}>Qty:{qty}</div>
    <div className="cart-item-actions">
        {/*buttons*/}
        <img alt ="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={this.decreaseQuantity}/>
        <img alt ="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"  onClick ={this.increaseQuantity}/>
        <img alt ="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
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