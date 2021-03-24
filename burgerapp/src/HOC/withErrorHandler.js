import React,{ Component } from "react"
import Modal from "../Components/UI/Modal/Modal"
import Aux from "./Aux"

const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        componentDidMount(){
        console.log('componentDidMount of withHandler called.........')

            //this works fine only for post request
            
            this.reqInterceptor = axios.interceptors.request.use(req=>{
                this.setState({error:null}) //clear the error on request
                return req 
            })
            this.resInterceptor = axios.interceptors.response.use(null,error =>{
                 this.setState({error:error})
                
                })
            
        }
        componentWillUnmount(){
            //its good to remove the inceptor if componet not required any more
            //this leads to avoid memory leak
            console.log('will unmount called',this.reqInterceptor,this.resInterceptor)
            // axios.interceptors.request.eject(this.reqInterceptor)
            // axios.interceptors.response.eject(this.resInterceptor)

        }
        render(){
            return(
            <Aux>
                <Modal show={this.state.error}>
                   
                 {this.state.error ? this.state.error.message:null}
                    </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>
            )
        }
    }
}

export default withErrorHandler