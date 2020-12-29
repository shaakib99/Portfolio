import React from "react";
import '../css/aboutmeContent.css'
import ShowSkills from '../components/showSkills'
const AboutMeContent = (props) => {
    const theme = props.context.theme
    const styles= {
        container:{ backgroundColor: theme.background, color: theme.color,fontSize: theme.defaultFontSize},
        title: {fontSize: theme.headingFontSize}
    }
    const technologies = ['React', 'React Native', 'Laravel', 
                            'Django', 'Django Rest Framework',
                            'Django Channels', 'GSAP', 'Websocket',
                            'Tensorflow','Google Firebase', 'Codeigniter'
                    ]
    const programmingLanguages = ['C', 'JAVA', 'JAVASCRIPT', 'PHP','Python','MATLAB']
    const other = ['Machine Learning algorithms', 'Neural Network']
    return (
        <div id='aboutme-container' style={styles.container}>
            <p className='para'>
            Hi I'm Wahid a self taught, design thinking full-stack JavaScript developer with a passion for motion design. I'm currently living in Chittagong, Bangladesh. I'm an absolute geek and love geeking out on all things MacOS,Machine Learning, JavaScript and Python.

            First fell in love with programming 4 years ago simply because it made me feel like "You are the commander". Since then I have been hooked. Although my focus for now is heavily in both frontend and backend web development. My favorite development stack at the moment is React, Django, MySQL, GSAP.

            Values I hold high are loyalty, reliability, authenticity and helping other achieve their success. Which is why I see projects through to the end and why I believe in creating beautiful and reliable software

            Whether it’s creating webapp or mobile app or Rest API, connecting to MySQL databases or designing unique user experiences per device whilst still maintaining a consistent brand experience I will bring your ideas to life.
            </p>
            <p className='para' style={styles.title}>Tools & Framework</p>
            <div className='tools-framework-container'>
                {technologies.map((m,index)=>(
                    <ShowSkills key={index} title = {m} theme = {theme}/>
                ))}
            </div>
            <p className='language-section' style={styles.title}>Languages</p>
            <div className='tools-framework-container'>
                {programmingLanguages.map((m,index)=>(
                    <ShowSkills key={index} title = {m} theme = {theme}/>
                ))}
            </div>
            <p className='language-section' style={styles.title}>Other</p>
            <div className='tools-framework-container'>
                {other.map((m,index)=>(
                    <ShowSkills key={index} title = {m} theme = {theme}/>
                ))}
            </div>
        </div>
    )
}
export default AboutMeContent