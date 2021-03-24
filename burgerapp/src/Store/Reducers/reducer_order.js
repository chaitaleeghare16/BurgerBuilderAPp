import * as actionType from '../Actions/actionTypes'

const initialState = {
    orders:[],
    loading : false,
    purchased:false,
    fetchOrders:[],
    error:false
}

const reducer =(state=initialState,action)=>{

    console.log('inside orders reducer')
    switch(action.type)
    {
        case(actionType.PURCHASEBURGERSTART):
        console.log('inside switch')
        return{
            ...state,
            loading: true
            
        }
        case(actionType.PURCHASEBURGERSUCCESS):
       
        const newOrder = {
            ...action.orderData,
            id:action.orderId,
        }
        return{
            ...state,
            orders: state.orders.concat(newOrder),
            loading:false,
            purchased:true,
            

           
            
        }
        case(actionType.PURCHASEBURGERFAIL):
        
        return{
            ...state,
            loading:false
           
            // error of order handle by withErrorHandler
        }

        case(actionType.RESETPURCHASESTATE):
        
        return{
            ...state,
            purchased:false
           
            // error of order handle by withErrorHandler
        }

        case(actionType.FETCHORDERSTART):
        
        return{
           ...state,
        //    loading:true
            
        }
        case(actionType.FETCHORDERSUCCESS):
        
        console.log('inside switch of fetch succees')
        console.log(action.fetchedOrders)
        return{
            ...state,
            fetchOrders:[...action.fetchedOrders],
            loading:false
          
        }
        case(actionType.FETCHORDERSFAIL):
        
        return{
            ...state,
            loading:false,
            error:true
        }
    }
    return state
}

export default reducer