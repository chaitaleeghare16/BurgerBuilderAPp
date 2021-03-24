import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as LogOutActionCreater from '../../Store/Actions/index'

class LogOut extends Component{

    componentDidMount()
    {
        this.props.onLogOut()
    }
    render()
    {
        return(
            <div></div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onLogOut : ()=>dispatch(
            LogOutActionCreater.logout()
        )
    }
}
export default connect(mapDispatchToProps)(LogOut)



