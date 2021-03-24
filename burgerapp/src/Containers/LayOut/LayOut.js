
import React,{Component} from 'react'
import Aux from '../../HOC/Aux'
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import ToolBar from '../../Components/Navigation/ToolBar';
import classes from './LayOut.css'
import { connect } from 'react-redux';

class LayOut extends Component {

state={
  showSideDrawer : false
}
  
closeSideDrawerHandler =()=>{
 console.log('inside closeSideDrawerHandler')
  

  this.setState((prevState)=>{
    return {
    showSideDrawer:!prevState.showSideDrawer
    }
  })
}

render(){
  return (
    <div>
        <Aux>
        <ToolBar isAuth={this.props.isAuthenticated} open={this.state.showSideDrawer} clicked={this.closeSideDrawerHandler}/>
        <SideDrawer  isAuth={this.props.isAuthenticated} open={this.state.showSideDrawer} closed={this.closeSideDrawerHandler}/>
       <main className={classes.Context}>
            {this.props.children}
          </main>
          
           </Aux>
    </div>
  );
}
}
const mapStateToProps=(state)=>{
  return{
    isAuthenticated : state.auth.token !== null
  }
}
export default connect(mapStateToProps)(LayOut);
