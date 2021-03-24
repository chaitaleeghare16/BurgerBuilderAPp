
import React, { Component } from 'react'
import classes from './Order.css'
import {connect} from 'react-redux'

class Order extends Component{
   
    render(){
        console.log('inside order &&&&&&')
        console.log(this.props.ingredients)
        console.log(this.props.price)

        let ingredients = []
        for(let i in this.props.ingredients){
            console.log(i + this.props.ingredients[i])
            //push into array as key value pair
            ingredients.push(
                {name :i,amount:this.props.ingredients[i]})
        }
        console.log(ingredients)


        
        return(
            <div className={classes.Order}>
           ingredients :
            {
                ingredients.map(i =>{ 
           return(
            <span
            style={{
                textTransform:'capitalize',
                border:'1px solid #ccc',
                display:'inline-block',
                padding:'5px',
                margin : '0px 4px'
                
            }}
            >
              {i.name} {" "} ({i.amount})
            
           </span>
           )})}

            <p>Price : <strong>Rs.{this.props.price}</strong></p>
            </div>
               
              
            
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        fetchOrders : state.orders.fetchedOrders
    }
}
export default connect(mapStateToProps)(Order)