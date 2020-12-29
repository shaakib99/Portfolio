import React from 'react'
import {ThemeContext} from '../utils/theme'
import SideBarContent from '../content/sidebarContent'
const SideBar = (props) => {
    return(
        <ThemeContext.Consumer>
            {context=> <SideBarContent theme = {context} url = {props.url}/> }
        </ThemeContext.Consumer>
    )
}
export default SideBar