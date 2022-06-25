import React from 'react'
import MainContext from '../Maincontext'
import { useContext } from 'react'
export default function Product({ product }) {

    const { basket, setBasket } = useContext(MainContext)
    const basketItem = basket.find(item => item.id === product.id)

    const addAmount = () => {


        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }
        else {
            setBasket([...basket, { id: product.id, amount: 1 }])
        }

    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)

       const basketWithOutCurrent = basket.filter(item => item.id !== product.id)
            

            
        if(currentBasket.amount ===0 || currentBasket.amount ===null || currentBasket.amount === undefined) {
            
            setBasket([...basketWithOutCurrent])
        }

       else
        {
            currentBasket.amount -= 1
            setBasket([...basket.filter(item => item.id !== product.id), currentBasket])
        }

    }
    return (
        <div>

            <div className="product">
                <h6>
                    {product.title}

                </h6>
                <div className="price">
                    {product.price}
                </div>
                <div className="actions">
                    <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <span className="amount"> {basketItem && basketItem.amount || 0} </span>
                    <button onClick={addAmount}>Satin Al</button>
                </div>

            </div>
            <style jsx>{`.product{ padding:10px; background:#fff; border:1px solid #ddd; margin-bottom:20px;}`
            } </style>
        </div>
    )
}
