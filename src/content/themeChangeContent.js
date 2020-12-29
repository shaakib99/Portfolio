import React from 'react'
import '../css/themeChangeContent.css'
import {gsap} from 'gsap'
import {defaultTheme} from '../utils/theme'
const ThemeChangeContent = (props)=>{
    const sliderColor = {
        day: 'rgb(71, 69, 99)',
        night: 'rgb(233, 232, 255)'
    }
    const theme = props.context.theme
    const toggleTheme = props.context.toggleTheme
    const dayRef = React.createRef()
    const nightRef = React.createRef()
    const sliderRef = React.createRef()
    const mainDivRef = React.createRef()

    const styles = {
        container:{fontSize: theme.defaultFontSize, color:theme.color, border: '1px solid '+theme.borderColor, backgroundColor: theme.background,boxShadow:'2px 2px 5px 1px '+ theme.shadowColor},
        slider:{backgroundColor:theme.sliderBackgroundColor, boxShadow:'2px 2px 5px 1px '+ theme.shadowColor, transform:'translateX('+theme.sliderPosition+')'},
    }
    const gsapAnim = (target,to,onComplete) => {
        gsap.to(target,{
            ...to,
            duration:0.2,
            ease:'expo.out',
            onComplete: onComplete
        })
    }
    React.useEffect(()=>{
        if(theme.background === defaultTheme.background){
            gsapAnim(sliderRef.current,{backgroundColor: sliderColor.day})
            gsapAnim(nightRef.current,{opacity:1})
            gsapAnim(dayRef.current,{opacity:0})
        }else{
            gsapAnim(sliderRef.current,{backgroundColor: sliderColor.night})
            gsapAnim(nightRef.current,{opacity:0})
            gsapAnim(dayRef.current,{opacity:1})
        }  
    },[theme])
    return (
        <div  ref = {mainDivRef} id='theme-change-content-container' style={styles.container} onClick={toggleTheme}>
            <div id='slider' ref={sliderRef} style={styles.slider}></div>
            <span ref={nightRef} id={'nightSpan'}>Night</span>
            <span ref={dayRef} id={'daySpan'}>Day</span>
        </div>
    )
}
export default ThemeChangeContent