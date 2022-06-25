import Header from './Components/Header'
import './App.css';
import {useState} from 'react'
import { useEffect } from 'react';
import products from "./product.json"
import Product from "./Components/Product"
import MainContext from './Maincontext';
function App() {

   const [money,setMoney] = useState(100)
   const [basket,setBasket] =useState([])
   const [total,setTotal] = useState(0)

   useEffect(() => {
     
   const t=  basket.reduce((acc,item) => {
      return acc + (item.amount*(products.find(pro => pro.id === item.id).price))
    },0)
   }, [basket])

   const data ={
     basket ,setBasket, money, setMoney,setTotal,total
   }

  return (

    <MainContext.Provider value={data}>
  

  
  <Header money={money}>
   
  </Header>
  {products.map( p => (<Product  product={p}/>))}
  
 

  </MainContext.Provider>
  );
}

export default App;
