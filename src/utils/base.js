import React from 'react'
import {ThemeContext, defaultTheme,darkTheme} from '../utils/theme'
import SideBar from '../components/sidebar'
import '../css/base.css'
import ThemeChange from '../components/themeChange'
const Base = (props) => {
    const theme = localStorage.getItem('theme')
    const [value,setValue ]=React.useState(theme !== null ? JSON.parse(theme) : darkTheme)
    const toggleTheme = () => setValue(value === defaultTheme ? darkTheme : defaultTheme)
    return(

        <div id='container'>
            <div id={'sidebar'}><SideBar url = {props.url}/></div>
            <div id={'content'}>{props.children}</div>
            <ThemeChange />
        </div>  
    )
}
export default Base