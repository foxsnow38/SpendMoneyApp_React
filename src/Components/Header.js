import React from 'react'
import { moneyFormat } from '../helper'

export default function header({ money, setMoney, total }) {
    return (
        <div className="header">
          
                
                    

                        Harcamak Icin {moneyFormat(money-total)} $ paraniz var


          
        </div>
    )
}
