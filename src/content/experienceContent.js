import React from 'react'
import '../css/experienceContent.css'
const ExperienceContent = (props) => {
    const theme = props.context.theme
    const styles ={
        container:{ backgroundColor: theme.background, color: theme.color,fontSize: theme.defaultFontSize},
        title:{ fontSize: '2rem'},
        info: {fontSize: theme.defaultFontSize},
        experienceBorder:{borderBottom: '1px solid '+ theme.color}
    }
    const responsibilites = [
        '- Worked with Google firebase push notification feature',
        '- Worked with Google map & Geolocation feature',
        '- Worked with Google firebase OTP Feature',
        '- Reviewed code of other developers',
        '- Implemented Payment gateways (bKash, SSLCommerz)'
    ]
    return(
        <div id='experience-contaienr' style={styles.container}>
            <div id='experience-info' style={styles.experienceBorder}>
                <p id='organization-title' style={styles.title}>3S</p>
                <div>
                    <p style={styles.info}>Fullstack Developer</p>
                    <p style={styles.info}>React Native, Codeigniter, Laravel, MySQL</p>
                    <p style={styles.info}>Apr 2020 - Sep 2020</p>
                </div>
            </div>
            <ul id='reponsibilites'>
                {responsibilites.map((r,index)=>(
                    <li key={index}>{r}</li>
                ))}
            </ul>
        </div>
    )
}
export default ExperienceContent