import React from 'react'
import '../css/sidebarContent.css'
import userImg from '../assets/images/user.png'
import {useHistory} from 'react-router-dom'
import {gsap} from 'gsap'
const SideBarContent = (props) => {
    const history = useHistory()
    const driveLink = 'https://drive.google.com/u/0/uc?id=1rapt7vitBYZcUw4qdSNvD1fwY--utcZA&export=download'
    const theme = props.theme.theme
    const urls = ['/Portfolio','/Portfolio/experience','/Portfolio/projects','/Portfolio/contact']
    const [urlIndex, setUrlIndex] = React.useState(urls.findIndex((u)=> u === props.url))
    React.useEffect(()=>{setUrlIndex(urlIndex === -1 ? 0 : urlIndex)},[])
    React.useEffect(()=>{
        gsap.to('.selected-button',{marginLeft:'1.2rem',duration:0.1,ease:'expo.in'})
    },[])

    const name = 'Wahid Sakib'
    const position = 'Fullstack Developer'
    const styles = {
        container:{backgroundColor: theme.background, color: theme.color },
        name:{ fontSize: theme.headingFontSize },
        position: {fontSize: theme.defaultFontSize},
        cite : {fontSize: theme.citeFontSize, textAlign: 'center',padding:'0 0.5rem 0 0.5rem'},
        hr:{backgroundColor: theme.color},
        buttons:{backgroundColor: theme.buttonColor, color: theme.buttonTextColor, fontSize:theme.defaultFontSize},
        selectedButton: {backgroundColor: theme.selectedButtonColor, color: theme.selectedButtonTextColor, fontSize:theme.defaultFontSize},
        socialLinkImg:{height:theme.headingFontSize, width: theme.headingFontSize, margin:'1rem 0.5rem 0.5rem 0.5rem',cursor:'pointer' }
    }
    const buttons = [
        {title: 'About me', onClick: ()=>{history.replace('/Portfolio')}},
        {title: 'Experience', onClick: ()=>{history.replace('/Portfolio/experience')}},
        {title: 'Projects', onClick: ()=>{history.replace('/Portfolio/projects')}},
        {title: 'Contact me', onClick: ()=>{history.push('/Portfolio/contact')}},
        {title: 'Download Resume', onClick: ()=>{window.open(driveLink)}},
        // {title: 'Download Resume', onClick: ()=>{setUrlIndex(3)}},
    ]
    const socialButtons = [
        {img: theme.git.default, onClick:()=> window.location.href = 'https://github.com/shaakib99'},
        {img: theme.linkedin.default, onClick:()=> window.location.href = 'https://www.linkedin.com/in/wahid-sakib-4736461a5/'},
        {img: theme.leetcode.default, onClick:()=> window.location.href = 'https://leetcode.com/wsakib87/'},
        
    ]
    React.useEffect(()=> {document.getElementById('sidebar').style.borderRight = '1px solid '+theme.borderColor},[theme])
    return (
        <div id='sidebar-container' style={styles.container}>
            <img src={userImg} alt='useImg'/>
            <p className='center-items' style={styles.name}>{name}</p>
            <p className='center-items' style={styles.position}>{position}</p>
            <p className='center-items' style={styles.cite}><cite>" The <strike>mirror</strike> docs <strike>is</strike> are my best friend
                because when I cry they don't laugh "
            </cite></p>
            <p className='center-items' style={styles.cite}>- Unknown</p>
            <div id='social-links'>
                {socialButtons.map((s,index)=>(
                    <img src={s.img} style={styles.socialLinkImg} key={index} onClick={s.onClick}/>
                ))}
            </div>
            <div id='hr' style={styles.hr}></div>
            {buttons.map((b,index)=>(
                index === urlIndex ?
                    <button key={index} onClick={b.onClick} className='buttons selected-button' style={styles.selectedButton}>{b.title}</button>
                    : <button key={index} onClick={b.onClick} className='buttons' style={styles.buttons}>{b.title}</button>
            ))}
        </div>
    )
}
export default SideBarContent