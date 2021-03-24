

import React  from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.css'


const Burger = (props)=>{

        const ingredients = props.ingredients
       
       console.log('inside Burger ******',ingredients)
        //convert object into array
        
        let dynamicIngredients =Object.keys(ingredients).map((item)=>{
            // here its create an array of empty space.
            
            // Array() -> in this method we pass value which indicates how many elemnts have in array
            // as per our ingrgrients its create an array like 
            // [ ] = array with one empty space for value 1
            // [ , ]=array with two empty spcae for value 2
            
          
            //  console.log([...Array(ingredients[item])])
            return [...Array(ingredients[item])].map((ingr,index)=>{
                return <BurgerIngredients key = {index} type={item}/>
        
          
        })

    }).reduce((arr,element) => 
        {
            console.log("####",element)
           return  arr.concat(element)  // concat array elemnts into single array
        },[])
   
        
     console.log("****",dynamicIngredients)
     
        if(dynamicIngredients.length ===0){
            dynamicIngredients = <p>please add ingredients</p>
        }

          return(
            <div className={classes.Burger}>
            
             <BurgerIngredients type="bread-top"/>
               
               {dynamicIngredients}
             <BurgerIngredients type="bread-bottom"/> 
            </div>
        )


    }


export default Burger