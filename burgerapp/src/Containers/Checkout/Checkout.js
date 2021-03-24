import React, { Component } from 'react'
import { Redirect, Route } from 'react-router'
import CheckoutSummary from '../../Components/Checkout/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'
import Aux from '../../HOC/Aux'

class Checkout extends Component {

    
    // state={
    //     ingredients:null,
    //     totalPrice:0
    // }
    // componentWillMount(){
    //     //extract query paramaeters from URL

    //   const query = new URLSearchParams(this.props.location.search)
    //   const ingredients= {}
    //   let price=0;
    //   console.log('query ****'+query)

    //    for(let param of query.entries())
    //    {
    //        console.log('param ******',param)

    //        if(param[0] === 'totalPrice')
    //        {
              
    //            console.log('price...',param[1])
    //            price = param[1]
              
    //        }
          

    //        else{
    //             //each entry have this format
    //        //['salad','1']

    //        //so turn it into object format

    //        //adding items into object => 
    //        // define object , const element = {}
    //       // add items into object , element[ yourKey ] = yourValue 

    //            ingredients[param[0]] = +param[1] // '1' convert into num by '+'
                 

    //        }
    //    }
    //    this.setState({ingredients:ingredients,totalPrice:price})
    //    console.log('ingredients...',ingredients)

       
    // }

    //*********instead query param we receives data from redux store********

    
    checkoutContinueHandler=()=>{
        this.props.history.replace('/checkout/contact-data')
    }
    checkoutCancelHandler=()=>{
        this.props.history.goBack()

    }
    render(){
        console.log('inside chekout')
        console.log('price',this.props.tPrice)
        console.log('checkout props........',this.props)

        //on page refresh give erros for ingredients.state ingredients become null
        
        let summary = <Redirect to='/' />
        if(this.props.ings)
        {
            //if purchased true the redirect from checkout to home page
            const redirect = this.props.purchased ?
            
            <Redirect to='/'/> :null
            summary=(
            <Aux>
                {redirect}
                <CheckoutSummary 
            ingredients={this.props.ings}
            totalPrice={this.props.tPrice}
            checkoutContinue={this.checkoutContinueHandler}
            checkoutCancel={this.checkoutCancelHandler}/>

            <Route 
                    path='/checkout/contact-data' 
                    // render={()=> (<ContactData ingredients={this.props.ings} totalPrice={this.props.tPrice}/>)}
                    component={ContactData}
                    />
            </Aux>
                )
        }
    return(
        <div>
            
            {summary}
        </div>
    )
    }
}
const mapStateToProps=(state)=>{
    return{

        ings:state.burgerBuilder.ingredients,
        tPrice:state.burgerBuilder.totalPrice,
        purchased : state.orders.purchased
    }
}

export default connect(mapStateToProps)(Checkout)