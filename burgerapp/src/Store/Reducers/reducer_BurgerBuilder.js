
import * as actionTypes from '../Actions/actionTypes'

const initialState = {

    ingredients : null,
    totalPrice:0,
    error:false
    

}

const Ingredients_Price ={
    salad:3,
    bacon:6,
    cheese:8,
    meat:4
}



const reducer =(state=initialState,action)=>{


    switch(action.type){
        case(actionTypes.ADDINGRIDENTS) :
            return{
                ...state,
                ingredients : {
                    ...state.ingredients,// deep cloning
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice :state.totalPrice + Ingredients_Price[action.ingredientName],
              
                       

            }

        case(actionTypes.REMOVEINGRIDENTS) :
            return{
                ...state,
                ingredients : {
                    ...state.ingredients,// deep cloning
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                totalPrice :state.totalPrice - Ingredients_Price[action.ingredientName]

                
            }

        case(actionTypes.SETINGREDIENTS):{
            console.log('inside reducer')
            console.log(action.ingredients)
            return{
                ...state,
                ingredients :action.ingredients,
                error:false,
                totalPrice:0 

            }
        }

        case(actionTypes.INGREDIENT_FETCHING_FAILED):{
            return{
                ...state,
                error : true
            }
        }

        default :
            return state
    }
   
}

export default reducer