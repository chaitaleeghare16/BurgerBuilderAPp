import React, { Component } from 'react'
import axiosInstance from '../../../api/axiosInstance'
import Button from '../../../Components/UI/Button/Button'
import classes from './ContactData.css'
import Spinner from '../../../Components/UI/Spinner/Spinner'
import Input from '../../../Components/UI/Input/Input'
import {connect} from 'react-redux'
import * as OrdersActionCreator from   '../../../Store/Actions/index'
import withErrorHandler from '../../../HOC/withErrorHandler'




class ContactData extends Component{

    state={
        orderForm :{
            name:
            {
                elememtType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder:'Your Name',
                   
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false

            },
            street:
            { 
                    elememtType : 'input',
                    
                    elementConfig : {
                    type : 'text',
                    placeholder:'Street'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                touched:false

            },
            zipCode:
            { 
                    elememtType : 'input',
                    
                    elementConfig : {
                    type : 'text',
                    placeholder:'ZIP code'
                    },
                    value:'',
                    validation:{
                        required:true,
                        minLength:5,
                        maxLenght:5
                    },
                    valid:false,
                touched:false

            },
            country:
            { 
                    elememtType : 'input',
                    
                    elementConfig : {
                    type : 'text',
                    placeholder:'Country'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                touched:false

            },
                
           
            email:
            { 
                elememtType : 'input',
                
                elementConfig : {
                type : 'email',
                placeholder:'Your E-mail'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            
            deliveryspeed : 
            { 
                elememtType : 'select',
            
                elementConfig : {
                
                option : [
                    {value:'fastest',displayValue:'Fastest'},
                    {value:'cheapest',displayValue:'Cheapest'}
                    ]
                },
                value:'fastest',
                valid:true,
                validation:{
                
                }
            },
            
        
    },

    
    formValid:false
}
    orderHandler=(event)=>{
        console.log('inside order Handler')

        event.preventDefault(); // prevent unnecessary request
       
        const formData={}

        for(let key in this.state.orderForm)
        {
            formData[key] = this.state.orderForm[key].value
            //this will create key value pair in formData object
            //  formadata={
            //         name : 'name enterred by user'
            //         street: 'street entered by user'
            //         same for other
            //  }
        }

        const orders = {
           
            ingredients : this.props.ings,
            price:this.props.tPrice,
            usersFormData:formData
            
            
        }   

       
       if(this.state.formValid){ 
       
        this.props.onOrderPlaced(orders,this.props.token)
        
    }
}

    inputChangedHandler=(event,inputIndentifier)=>{
        console.log('inside inputChangedHandler')
        const value= event.target.value
        const name = event.target.name
       
            console.log("value",event.target.value)

            const formElement = {...this.state.orderForm}
            formElement[inputIndentifier].value = event.target.value
            formElement[inputIndentifier].valid=this.handleCustomValidation(formElement[inputIndentifier].value ,formElement[inputIndentifier].validation )
            formElement[inputIndentifier].touched = true
            const updatedFormElement = formElement

            let formValid = true
            for(let indentifier in updatedFormElement)
            {
                formValid=updatedFormElement[indentifier].valid && formValid
            }
            this.setState({orderForm : updatedFormElement,formValid : formValid})
        }

    handleCustomValidation=(value,rules)=>{

        let isValid = true;

        if(rules.required)
        {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength)
        {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength)
        {
            isValid = value.length <= rules.minLength&& isValid;
        }

        return isValid;
        

    }
   
    render()
    {
        console.log('***************************',this.state.orderForm)
        console.log('Inside ContactData')
        console.log('ingredients from checkoutsummary',this.props.totalPrice)
        console.log('formValid *********',this.state.formValid)
        var formElementArray = []

        for(let key in this.state.orderForm){

            formElementArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }



        let form = (
        <form>
       
        
        {formElementArray.map(formElement =>(
            
                <Input
                 key={formElement.id}
                 elementType={formElement.config.elememtType}
                 elementConfig={formElement.config.elementConfig}
                 value={formElement.config.value}
                 invalid = {!formElement.config.valid}
                 havingValidation={formElement.config.validation}
                 touched={formElement.config.touched}
                 valueType={formElement.id}
                 onChangeHandler={(event)=>{this.inputChangedHandler(event,formElement.id)}}
                
                 />
            
        ))}
      
        <Button btnType='Success' clicked={this.orderHandler} Disabled={!this.state.formValid} >ORDER</Button>
        </form>
        )

        if(this.props.loading){
            form = <Spinner/>
        }
        return(
            <div className={classes.orderForm}>
                  <label className={classes.Label}>Enter your contact details</label>
               {form}
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        ings:state.burgerBuilder.ingredients,
        tPrice:state.burgerBuilder.totalPrice,
        loading :state.orders.loading,
        token:state.auth.token

    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        onOrderPlaced :(orders,token)=>dispatch(
            OrdersActionCreator.purchaseburger(orders,token)
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axiosInstance))