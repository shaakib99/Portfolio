import React from 'react'
import {ThemeContext} from '../utils/theme'
import ThemeChangeContent from '../content/themeChangeContent'
const ThemeChange = (props)=>{
    return(
        <ThemeContext.Consumer>
            {context=> <ThemeChangeContent context = {context}/>}
        </ThemeContext.Consumer>
    )
}
export default ThemeChange