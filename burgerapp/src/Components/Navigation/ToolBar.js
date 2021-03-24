import classes from './ToolBar.css'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'

import Menu from './SideDrawer/Menu/Menu'


const ToolBar =(props)=>{

    console.log('inside ToolBar')
    console.log(props.isAuth)
         return(
        <header className={classes.ToolBar}>
            
               
            <div className={classes.Menu}>
                <Menu
                open={props.open}
                 clicked={props.clicked}
                 />
            </div>


            <div className={classes.Logo}><Logo/></div>

            <div className={classes.NavigationItems}><NavigationItems isAuth={props.isAuth}/></div>

        </header>
        
    )
    
}
export default ToolBar

