import classes from './NavigationItem.css'
import {NavLink} from 'react-router-dom'
const NavigationItem = (props)=>{

    return(
        <li className={classes.NavigationItem}>
            <NavLink  
            to={props.link}
            exact={props.exact} 
            activeClassName={classes.active}
             >{props.children}</NavLink>
        </li>
    )

}
export default NavigationItem

//exact and activeclassName used for styling the  link which is active currently
