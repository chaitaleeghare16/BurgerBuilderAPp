
import React, { Component } from 'react'
import axiosInstance from '../../api/axiosInstance'
import {connect} from'react-redux'
import Order from '../../Components/Order/Order'
import Modal from '../../Components/UI/Modal/Modal'
import Spinner from '../../Components/UI/Spinner/Spinner'
import withErrorHandler from '../../HOC/withErrorHandler'
import * as orderActionCreator from '../../Store/Actions/index'

class Orders extends Component{  

  

    componentDidMount(){
        this.props.fetchOrders(this.props.token)
    }

   
    render(){

        console.log('inside orders *******')
        console.log(this.props.orders)

        var orders = <Spinner />;
        if ( !this.props.loading ) {
            orders = this.props.orders.map(order =>{
                
                return(
                <Order
                    
                    ingredients={order.ingredients}
                    price={order.price} />
            ) })
        }
        if(this.props.error)
        {
            orders='Ingredient cannot be loaded'
        }
       

      
       
        return(
            <div>
             {orders}
            
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{

        orders:state.orders.fetchOrders,
        error:state.orders.error,
        loading:state.orders.loading,
        token:state.auth.token
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{

        fetchOrders : (token) =>dispatch(
            orderActionCreator.fetchorders(token)
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axiosInstance))