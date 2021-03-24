import * as actionType from '../actionTypes'
import axiosInstance from '../../../api/axiosInstance'


       
export  const addIngredients = (ingName)=>{
    return{
        type: actionType.ADDINGRIDENTS,
        ingredientName:ingName

    }
}


export const removeIngredients = (ingName)=>{
    return{
        type: actionType.REMOVEINGRIDENTS,
        ingredientName:ingName

    }
}

export const initIngredients =()=>{
    console.log('inside initIng')
    return dispatch => {
       
        axiosInstance.get('/Ingredients.json').then(response=>{
            console.log("response %%%%%%%%%%%%%%",response)
            dispatch(setIngredinetsfromserver(response.data))
        }).catch(error=>{
            console.log(error)
            dispatch(fetchingIngredinetsfromserverfailed())
        })
    }
}

export const setIngredinetsfromserver=(ingredients)=>{
    return{
       type:actionType.SETINGREDIENTS,
       ingredients : ingredients
    }

}

export const fetchingIngredinetsfromserverfailed=()=>{
    return{
        type:actionType.INGREDIENT_FETCHING_FAILED,
       
    }

}