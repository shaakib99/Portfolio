import React from 'react'
import '../css/card.css'
const Card = (props) => {
    const theme = props.theme
    const data = props.data
    const styles = {
        container:{color: theme.color,boxShadow:'1px 1px 10px 1px '+theme.shadowColor ,borderColor: '1px solid '+theme.borderColor, borderRadius:'0.5rem'},
        imgSize:{height:theme.defaultFontSize, width: theme.defaultFontSize},
        title:{fontSize: theme.headingFontSize},
        desc:{fontSize: theme.defaultFontSize}
    }
    return(
        <div className='card-container' style={styles.container}>
            <div className='card-title-date'>
                <p style={styles.title}>{data.title}</p>
                <p className='make-separation'>{'|'}</p>
                <p className='make-separation' style={styles.title}>{data.date}</p>
            </div>
            <p className='card-desc' style={styles.desc}>{data.desc}</p>
            <p className='card-desc' style={styles.desc}>{'Tools - '+ data.tools}</p>
            <div className='card-links'>
                <div className='links' onClick={()=> window.open(data.live)}>
                    <img src={theme.live.default} alt={'live-text'} />
                    <span style={styles.desc}>Live</span>
                </div>
                <div className='links' onClick={()=> window.open(data.git)}>
                    <img src={theme.git.default} alt={'git-text'} />
                    <span style={styles.desc}>GitHub</span>
                </div>
            </div>
        </div>
    )
}
export default Card