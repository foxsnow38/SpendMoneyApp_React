import React from 'react'
import BasketItem from './BasketItem'
import { moneyFormat } from '../helper'
export default function Basket({ basket,products,total }) {

    return (

        <>

            {
                basket.map(i => (<BasketItem item={i} product={products.find(p => p.id===i.id)}/>

                ))
            }
            <div>
                Toplam: {moneyFormat(total)}  $
            </div>

        </>

    )
}
