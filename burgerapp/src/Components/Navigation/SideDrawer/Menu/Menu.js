
import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'

const Menu =(props)=>{

    return(
        
        <HamburgerMenu
               isOpen={props.open}
	            menuClicked={props.clicked}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
        >

        </HamburgerMenu>
    )
}
export default Menu