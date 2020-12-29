import React from 'react'
import Base from '../utils/base'
import AboutMeContent from '../content/aboutmeContent'
import {ThemeContext} from '../utils/theme'
const AboutMe = (props) => {
    return <Base url = {props.match.url}>
        <ThemeContext.Consumer>
            {context => <AboutMeContent context = {context}/>}
        </ThemeContext.Consumer>
    </Base>
}
export default AboutMe