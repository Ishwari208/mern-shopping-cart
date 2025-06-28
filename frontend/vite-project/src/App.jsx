import { useState } from 'react'
import './App.css'
import Product from './Product'
function App() {
  const [cart,setCart] = useState([]);
 const products = [
    {id:1,title:'Product 1',price:100},
    {id:2,title:'Product 2',price:200},
    {id:3,title:'Product 3',price:300},
  ];

  const handleAddToCart = (product) => {
    setCart([...cart,product]);
  }
  

  return (
    <>
     <div>
      <h1>Shopping Cart</h1>
      {products.map((p)=>(
        <Product key={p.id} title={p.title} price={p.price} onAdd={()=>handleAddToCart(p)}/>
      ))}
      <h2>Cart Items:{cart.length}</h2>
     </div>
       
    </>
  )
}

export default App
