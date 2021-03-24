import React, { Component } from "react";
import { Route } from "react-router";
import ContactData from "../../Containers/Checkout/ContactData/ContactData";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";
import classes from './CheckoutSummary.css'


class CheckoutSummary extends Component{

    render(){
        console.log('inside checkout summarty',this.props.totalPrice)
        return(
            <div className={classes.CheckoutSummary}>
                <h1>we hope it taste well !!</h1>
               <div><Burger ingredients={this.props.ingredients}/></div> 
                <Button btnType="Success" clicked={this.props.checkoutContinue}>Continue</Button>
                <Button btnType="Danger" clicked={this.props.checkoutCancel}>Cancel</Button>


                {/* nested routing 
                    it will display contact data on same page of checkout and change the url.

                    note: if we write this Route in App.js then it will show contact data on another page 
                */}
                {/* In Route we can pass props like below. instaed of compoent={ContactData} we can write render */}
                
              
            </div>
        )
    }
}

export default CheckoutSummary