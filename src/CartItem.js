import React from "react";
class CartItem extends React.Component
{
    render()
    {
        return (
<div className="cart-item">
    <div className="left-block">
     <img style={styles.image}/>
    </div>
    <div className="right-block">
    <div style={{fontSize:25}}>PHONE</div>
    <div style={{color:'green'}}>RS 9999</div>
    <div style={{color:'blue'}}>QTY: 1</div>
    <div className="cart-item-actions">
        {/*buttons*/}
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