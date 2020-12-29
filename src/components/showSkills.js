import React from 'react'
import '../css/showSkills.css'
const ShowSkills = (props) => {
    const theme = props.theme
    const styles = {
        container:{ backgroundColor: theme.buttonColor, color: theme.buttonTextColor}
    }
    return (
        <div className='skill-container' style={styles.container}>{props.title}</div>
    )
}
export default ShowSkills