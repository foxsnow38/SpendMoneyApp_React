import Header from './components/Header';
import { useState ,useEffect} from 'react';
import './App.css';
import plist from './products.json'
import Product from './components/Product';
import BasketP from './components/Basket';

function App() {

  const [money,setMoney] = useState(1000000)
  const [basket,setBasket] = useState([])
  const [total,setTotal] = useState(0)
  const resetBasket= () => {
    return setBasket([])
  }

  useEffect(() => {
    
   setTotal(basket.reduce((acc,item) => {
    
    return acc+(item.amount * (plist.find(p=>p.id=== item.id).price))
   },0
  ))
   
  }, [basket])
  return (
   <>
   <Header  total={total} money={money} setMoney={setMoney}/>
<div className="container products">{plist.map(p => (< Product total={total} money={money} setBasket={setBasket} basket={basket} product={p}/>))}</div>
   
   <button onClick={resetBasket}>Sepeti Sifirla </button>
   <BasketP total={total} basket={basket} products={plist}/>

   
   
   </>
  )
}

export default App;
