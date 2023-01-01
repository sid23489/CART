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
      qty:1,
      img:'',
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
    </div>
  );
}
}

export default App;
