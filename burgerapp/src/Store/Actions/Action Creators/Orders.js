import * as actionType  from '../actionTypes'
import axiosInstance from '../../../api/axiosInstance'


export const purchaseburgersuccess = (id,orderData)=>{
    console.log('inside burgerordersuccess')
    return{
        type:actionType.PURCHASEBURGERSUCCESS,
        orderId:id,
        orderData:orderData
        
    }
}

export const purchaseburgerfail = (error)=>{
    return{
        type:actionType.PURCHASEBURGERFAIL,
        error :error
    }
}

export const purchaseburgerstart=()=>{

    return{
        type : actionType.PURCHASEBURGERSTART
    }
}

export const purchaseburger=(orders,token)=>{

    return dispatch=>{

        //call dispatch method before order post on server
        dispatch(purchaseburgerstart()) // method for setting loader to true
        axiosInstance.post('/customerOrder.json?auth='+token,orders).then(response=>{
                console.log('response.....',response.data)
                //call dispatch after order post on server
                dispatch(purchaseburgersuccess(response.data.name,orders)) 
               
            }).catch(error=>{
                dispatch(purchaseburgerfail(error))
                console.log('errorfromresponse',error)}
                
            )}

    }
export const resetpuchasestate=()=>{
    return{
        type : actionType.RESETPURCHASESTATE
    }
}

export const fetchordersstart=()=>{
    return{
        type : actionType.FETCHORDERSTART,
       
    }
}

export const fetchorderssuccess=(fetchOrders)=>{
    return{
        type : actionType.FETCHORDERSUCCESS,
        fetchedOrders:fetchOrders
    }
}
export const fetchordersfail=()=>{
    return{
        type : actionType.FETCHORDERSFAIL,
       
    }
}

export const fetchorders=(token)=>{
    return dispatch=>{ 
        dispatch(fetchordersstart())
        axiosInstance.get('/customerOrder.json?auth='+token).then(response=>{
            console.log('response******',response.data)
            const fetchOrders=[]
            for(let key in response.data)
            {
                console.log(response.data[key].ingredients)
                console.log(response.data[key].price)
                fetchOrders.push({...response.data[key],id:key})
                // this.setState({orders:fetchOrders,loading:false})
                dispatch(fetchorderssuccess(fetchOrders))
                console.log('fetchedOrders ******')
                console.log(fetchOrders)

            }
        }).catch(error=>{
            dispatch(fetchordersfail())
            console.log(error)
        })
    }
}

