import React from 'react'

export default function product({ money,total,product, basket, setBasket }) {


    const removeBasket= () =>{
        const checkBasket = basket.find(i => i.id === product.id)
        
checkBasket.amount -=1
if (checkBasket.amount===0){
    setBasket([...basket.filter(i => i.id !== product.id)])
}
else{
setBasket([...basket.filter(i => i.id !== product.id),checkBasket])
}  
        


    }
    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(i => i.id === product.id)
        if (checkBasket) {
checkBasket.amount +=1
setBasket([...basket.filter(i => i.id !== product.id),checkBasket])
        }
        else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }

    }
    return (
        <>

            <div className="product">
                <img src={product.photo} alt={product.title} />
                <h6>
                    {
                        product.title
                    }
                </h6>
                <div className="price"><b> {product.price}$</b></div>
                <div className="actions">
                    <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <span>{basketItem && basketItem.amount || 0}</span>
                    <button disabled={total +product.price> money} onClick={addBasket}>Satin Al</button>
                </div>




                <style jsx>{`
                .product{
                    padding: 10px ;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
        `}


                </style>
            </div>
        </>

    )
}
