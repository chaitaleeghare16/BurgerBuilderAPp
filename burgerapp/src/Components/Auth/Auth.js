
import React, { Component } from 'react'
import Input from "../UI/Input/Input";
import classes from './Auth.css'
import Button from '../UI/Button/Button'
import {connect} from 'react-redux'
import * as AuthActionCreator from '../../Store/Actions/index'
import Spinner from '../UI/Spinner/Spinner';



class Auth extends Component{

    state={
        loginForm:{
            email:{
                elementType:'input',
                elementConfig:{
                    type : 'text',
                    placeholder :'Your e-mail'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            password:{
                elementType : 'input',
                elementConfig:{
                    type :'text',
                    placeholder :'Your Password'
                },
                value:'',
                validation:{
                    required:true,
                    maxLength:6
                },
                valid:false,
                touched:false


            }
        },

        isAuthenticated : false,
        isSignUp :true
    }



    inputChangeHandler = (event,loginFormElement) =>{

        // loginFormElement = email,password
        const updatedLoginForm = {
            ...this.state.loginForm,
            [loginFormElement] :{
                ...this.state.loginForm[loginFormElement], //deep cloning of object
                value:event.target.value,
                touched:true,
                valid:this.handleCustomValidation(event.target.value,this.state.loginForm[loginFormElement].validation)
            }
        }

        let loginFormValid = true
            for(let key in updatedLoginForm){
                loginFormValid =  updatedLoginForm[key].valid && loginFormValid
            }

        this.setState({loginForm : updatedLoginForm,isAuthenticated:loginFormValid})

    }

    handleCustomValidation=(value,rules)=>{

        let valid = true

            // false && false: false

            // false && true: false

            // true && false: false

            // true && true: true

       

        if(rules.required)
        {
            valid = value.trim() !== ''  && valid  
        }

        if(rules.maxLength)
        {
            valid = value.length === rules.maxLength
        }

        return valid

    }


    submitHandler=(event)=>{
        event.preventDefault()

        this.props.onAuth(this.state.loginForm['email'].value,this.state.loginForm['password'].value,this.state.isSignUp)
        
    }

    SwitchHandler=(event)=>{

        
        this.setState(prevState=>{
            return{
                isSignUp : !prevState.isSignUp
            }
        })
    }
    render()
    {
        console.log('Token ***************')
        console.log(this.props.token)

        console.log('UserId ***************')
        console.log(this.props.userId)

        console.log(this.props.loading)



        console.log('Inside Login...........')
        console.log('valid.....',this.state.loginForm['password'].valid)
        console.log(this.state.isSignUp)


        var form = []
       
           for(let key in this.state.loginForm)
            {
                form.push(
                    {
                        id : key,
                        value: this.state.loginForm[key]

                    }
                )
                 
               
            }

            
            
              let loginForm = form.map(formElement=>{
                
                return(
                    <Input 
                                key={formElement.id}
                                elementType={formElement.value.elementType}
                                elementConfig={formElement.value.elementConfig}
                                value={formElement.value.value}
                                onChangeHandler={(event)=>this.inputChangeHandler(event,formElement.id)}
                                havingValidation={formElement.value.validation}
                                touched={formElement.value.touched}
                                invalid={!formElement.value.valid}
                                valueType={formElement.id}

                                />
                )
            })
           
            if(this.props.loading)
            {
                loginForm = <Spinner/>
            }
            
            console.log('loginForm')

            console.log(loginForm)
        return(
            
            <div className={classes.Login}>

                <form onSubmit={this.submitHandler}>
                {loginForm }
                
                <div className={classes.loginButton}>
                     <Button btnType='Success' Disabled= {!this.state.isAuthenticated}>SUBMIT</Button>
                </div>
                </form>
                <Button clicked={this.SwitchHandler} btnType="Danger" >Switch to {this.state.isSignUp ? 'SignIn' : 'SignUp'}</Button>
               
            </div>
        )
    }
}

const mapStateToProps=(state)=>{

    return{

    token : state.auth.token,
    userId : state.auth.userId,
    loading:state.auth.loading
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onAuth : (email,password,isSignUp) => dispatch(
            AuthActionCreator.auth(email,password,isSignUp)
        )

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Auth)