
import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = (props)=>{
    console.log('inside ordersummary')
    console.log(props.ingredients)

   const orderSummary = Object.keys(props.ingredients).map(igkey=>{
        return(
           
            <ul key={igkey}><strong>{igkey}</strong> : <span>{props.ingredients[igkey]}</span></ul>
          
        )})
    return(
        <div>
            <p>Order Summary :  </p>
            <p>Ingredients you have ordered is as below : </p>
            <div>
                
                {orderSummary }
            </div>
           <div><b>Total Price </b>: {props.price} </div>
            <div>
            <p>Continue to checkout ?</p>
                <Button btnType="Success" clicked={props.continue}>Continue</Button>
                <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>

            </div>
        </div>
    )
}
export default orderSummary