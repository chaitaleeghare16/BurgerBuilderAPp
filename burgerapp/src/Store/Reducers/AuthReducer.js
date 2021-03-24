
import * as actionTypes from '../Actions/actionTypes'

const initialState = {

    token : null,
    userId:null,
    loading:false,
    error:false
    

}




const reducer =(state=initialState,action)=>{


    switch(action.type){
        case(actionTypes.AUTHSTART) :
            return{
                ...state,
               loading:true
            }

        case(actionTypes.AUTHSUCCESS) :
            return{
                ...state,
                loading:false,
                token:action.token,
                userId:action.userId
                
            }

        case(actionTypes.AUTHFAIL):{
            console.log('inside reducer')
            console.log(action.ingredients)
            return{
                ...state,
                loading:false,
                error:action.error

                
            }
        }

        case(actionTypes.AUTHLOGOUT):{
            console.log('inside reducer')
            console.log(action.ingredients)
            return{
                ...state,
               token:null,
               userId:null

                
            }
        }




       

        default :
            return state
    }
   
}

export default reducer