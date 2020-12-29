import React from 'react'
import {ThemeContext} from '../utils/theme'
import ContactMeContent from '../content/contactmeContent'
import Base from '../utils/base'
const ContactMe = (props) => {
    return(
        <Base url = {props.match.url}>
            <ThemeContext.Consumer>
                {context=> <ContactMeContent context = {context}/>}
            </ThemeContext.Consumer>
        </Base>
    )
}
export default ContactMe