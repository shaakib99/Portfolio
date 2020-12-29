import React from 'react'
import Base from '../utils/base'
import {ThemeContext} from '../utils/theme'
import ProjectContent from '../content/projectContent'
const Projects = (props) => {
    return(
        <Base url = {props.match.url}>
            <ThemeContext.Consumer>
                {context => <ProjectContent context = {context}/>}
            </ThemeContext.Consumer>
        </Base>
    )
}
export default Projects