import Layout from "./Containers/LayOut/LayOut"
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import React  from "react";
import {Switch,Route} from 'react-router-dom'
import Checkout from "./Containers/Checkout/Checkout";
import Orders from './Containers/Orders/Orders'
import Login from "./Components/Auth/Auth";
import LogOut from "./Components/LogOut/LogOut";



function App() {
  // const [state,setState] = React.useState(true)
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setState(false)
  //   },5000);
  // })
  return (
    <div>
        <Layout>
          
          {/* destroy the component  just to check componentwillunmount is called or not
          {state ? <BurgerBuilder/>:null} */}
          <Switch>
         

            <Route path='/' exact component={BurgerBuilder}/>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/login' component={Login}/>
            <Route path='/logout' component={LogOut}/>




            
          </Switch>
           
        </Layout>
    </div>
  );
}

export default App;
