import React from 'react'
import Base from '../utils/base'
import {ThemeContext} from '../utils/theme'
import ExperienceContent from '../content/experienceContent'
const Experience = (props) => {
    return (
        <Base url = {props.match.url}>
            <ThemeContext.Consumer>
                {context => <ExperienceContent context = {context}/>}
            </ThemeContext.Consumer>
        </Base>
    )
}
export default Experience