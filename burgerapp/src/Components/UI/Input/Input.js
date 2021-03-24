import React,{ Component } from "react";
import classes from './Input.css'

const Input =(props)=>{
            console.log('inside input')
            console.log(props.elementConfig)
            console.log(props.valueType)
            console.log('***********')
            console.log(props.invalid)
            console.log(props.touched)
            console.log(props.havingValidation)

            let formELement = null
            let errorMessage=''
                
    const inputClasses = [classes.inputElement]

    if(props.invalid && props.havingValidation && props.touched)
    {
            inputClasses.push(classes.inValid)
            errorMessage=<p className={classes.errorMessage}>Please enter {props.valueType}</p>
    }
    

    switch(props.elementType)
    {
        case('input'):
                formELement =<input 
                className={inputClasses.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.onChangeHandler}/>
                break;
        case('textarea'):
               formELement= <textarea
               className={inputClasses}

                {...props.elementConfig} 
                value={props.value}
                onChange={props.onChangeHandler}
                />
                break;
        case('select'):
                var optionArray=null
                for(let key in props.elementConfig)
                {
                    optionArray = props.elementConfig[key]
                }
                console.log('Arrayyyyyyyy')
                console.log(optionArray)
                formELement= <select className={inputClasses.join(' ')} onChange={props.onChangeHandler}>
                    <option value='fasest'>Select</option>
                    {optionArray.map(optionElement=>(
                        <option key={optionElement.value}value={optionElement.value}>{optionElement.displayValue}</option>
                    ))}
                    
                    
                </select>
                
                 break;        
                
        default:
            formELement= <input
            className={inputClasses.join(' ')}
            {...props.elementConfig} 
            value={props.value} 

           />      
    }
      return(
            <div className={classes.formELement}>
              
                    {formELement}
                    {errorMessage}
                   
            </div>
        )
    
}
export default Input