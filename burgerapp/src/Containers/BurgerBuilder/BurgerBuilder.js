

import React, { Component } from 'react'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Burger from '../../Components/Burger/Burger'
import Aux from '../../HOC/Aux'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import axiosInstance from '../../api/axiosInstance'
import Spinner from '../../Components/UI/Spinner/Spinner'
import withErrorHandler from '../../HOC/withErrorHandler'
import {connect} from 'react-redux'
import * as BurgerBuilderactionCreator from '../../Store/Actions/index'
// import { object } from 'prop-types'


class BurgerBuilder extends Component
{
    

    state={
        
        purchasable : false,
        open:false,
        loading:false,
       
       
       
    }
    componentDidMount=()=>{

    this.props.initialised_Ingredients_fromServer(

    )
        
    }
   updatePurchaseIngredients =()=>{

    
    const sum  = Object.keys(this.props.ings).map(igkey=>{
        return this.props.ings[igkey]
    }).reduce((e1,e2)=>{
               console.log('e1',e1)
               console.log('e2',e2)

               return e1 + e2

    })
    console.log('sum ******************',sum)
    return sum>0
   }


    

   
    showOrderSummaryHandler = ()=>{
        
        this.setState({purchasable : true})
    }

    modalClosedHandler = ()=>{
       
       
        this.setState({purchasable : false})
        

    }
       
    purchaseContinueHandler= () =>{
    //    // send ingredients as query parameter in URL (?salad=1&bacon=2)
    //     const queryParam = []
    //     for(let i in this.props.ings){
    //         queryParam.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]))
    //     }
    //     queryParam.push('totalPrice=' +this.props.tPrice)
    //     const queryString=queryParam.join('&')
    //    this.props.history.push({
    //     pathname:'/checkout',
    //     search:'?' + queryString
    //    })


            //after successful purchasing burger purchased state become true.
            //we have to reset it when we redirect to checkout page
            //therefore we create a action here resetPurchasedState  and in  reducer function we reset the value of purchased state to false

            this.props.resertPurchasedState()
            this.props.history.push('/checkout')
    }
      
       
       
    render(){

       console.log(this.props)

       console.log(this.props.ings)
        const disableInfo = 
        {
            ...this.props.ings
        
        }


        for(let key in disableInfo)
        {
           console.log('key.............')
          disableInfo[key] = disableInfo[key] === 0  // set true for 0 value
        
        
        // ingredients:
        // {
        //     salad:true,
        //     bacon:true,
        //     cheese:true,
        //     meat:true
        // }
        
    }

    
    let orderSummary = null
    if(this.props.ings){
        orderSummary=<OrderSummary 
        ingredients={this.props.ings}
        continue={this.purchaseContinueHandler}
        price={this.props.totalPrice} 
        cancel={this.modalClosedHandler}
        loading={this.state.loading} />
    }
   
    let burger = this.props.error? <Modal show={this.props.error}>Ingredients can't be loaded</Modal>:<Spinner/>
    if(this.props.ings){
   burger = 
      <Aux>
      <Burger ingredients={this.props.ings}/>
     <BuildControls 
                   added={this.props.addIngredientHandler}
                   removed={this.props.removeIngredientHandler}
                   isDisabled={disableInfo}
                   price={this.props.tPrice} 
                   ordered={this.showOrderSummaryHandler}
                   disabledOrderButton={this.updatePurchaseIngredients()} //method shouls be called on render so add () after method name
                   />
                   
     </Aux>
        }
     
    


        return(
           
            <Aux>
              
               <Modal open ={this.state.open} show={this.state.purchasable} modalClosed={this.modalClosedHandler}>
                       {orderSummary}
               </Modal>
             
               
                
               {burger}
                
              
            </Aux> 
        )
    }
}

const mapStateToProps =(state)=>{
    console.log('tp from store...',state.totalPrice)
    return{
       
        ings :state.burgerBuilder.ingredients,
        tPrice :state.burgerBuilder.totalPrice,
        error:state.burgerBuilder.error,
        purchased:state.orders.purchased
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{

        addIngredientHandler : (ingName)=> dispatch(
           
            BurgerBuilderactionCreator.addIngredients(ingName)
        ),
        removeIngredientHandler: (ingName)=> dispatch(
            BurgerBuilderactionCreator.removeIngredients(ingName)
        ),
        initialised_Ingredients_fromServer : ()=>dispatch(
            BurgerBuilderactionCreator.initIngredients()
        ),
        resertPurchasedState : ()=>dispatch(
            BurgerBuilderactionCreator.resetpuchasestate()
        )
        
    

        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axiosInstance))






















































































































 