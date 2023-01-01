import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor()
  {
      super();
      this.state={
      products: [{
          price:999,
          title:'WATCH',
          qty:1,
          img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id:1
      },{price:9999,
      title:'Phone',
      qty:1,
      img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      id:2
  }
      ,{price:99999,
      title:'LAPTOP',
      qty:1,
      img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  id:3}]
  }
 
}
handleIncreaseQuantity=(product)=>
{
const{products}=this.state;
const index=products.indexOf(product);
products[index].qty+=1;
this.setState({
  products:products
})
}
handleDecreaseQuantity=(product)=>
{
const{products}=this.state;
const index=products.indexOf(product);
if(products[index].qty!=0)
{
products[index].qty-=1;
this.setState({
  products:products
})
}
}
handleDeleteProduct=(id)=>
{
  const {products}=this.state;
  const items=products.filter((item)=>item.id!==id);
  this.setState(
      {
          products:items
      }
  )
}
getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((item)=>{
    count+=item.qty;
  })
  return count;
 }
 getCartTotal=()=>
 {
  const {products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    cartTotal+=(product.qty)*(product.price)
  })
  return cartTotal;
 }
  render()
  {
    const {products}=this.state;
  return (
    <div className="App">
      <Navbar
      count={this.getCartCount()}
      />
     <Cart
      products={products}
       onIncreaseQuantity={this .handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}
     />
     <div style={{fontSize:20,padding:10}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
