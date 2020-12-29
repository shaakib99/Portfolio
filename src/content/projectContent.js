import React from 'react'
import '../css/projectContent.css'
import Card from '../components/card'
const ProjectContent = (props) => {
    const theme = props.context.theme
    const styles = {
        container:{backgroundColor: theme.background}
    }
    const projectData = [
        {
            title: 'Spectacle shop',
            date: 'Dec 2020',
            desc: 'Just a pet project. I was trying to learn React JS, Django Rest Framework & GSAP',
            tools: 'React, Redux, GSAP, DRF, Django',
            live: 'https://shaakib99.github.io/spectacle-shop/',
            git: 'https://github.com/shaakib99/spectacle-shop/tree/master'
        },
        {
            title: 'RealTime Tic Tac Toe Multiplayer Game',
            date: 'Nov 2020',
            desc: 'A pet project. I was trying to learn Django Channel & Websocket for RealTime data transmission',
            tools: 'Django Channel, Websocket, Django, HTML, CSS',
            live: 'https://tictactoe-game-basic.herokuapp.com/',
            git: 'https://github.com/shaakib99/Realtime-tictactoe'
        },
        {
            title: 'Sorting Algorithm Visualizer',
            date: 'Oct 2020',
            desc: 'A pet project. I was brushing up my DSA. And saw this type of project on linkedin by clement. So I thought, why not I do something like this...',
            tools: 'HTML, CSS, JS',
            live: 'https://shaakib99.github.io/Sort-Visualizer/',
            git: 'https://github.com/shaakib99/Sort-Visualizer'
        },
        {
            title: 'Shortest Path Algorithm Visualizer',
            date: 'Oct 2020',
            desc: 'A pet project. I was brushing up my DSA. And saw this type of project on linkedin by clement. So I thought, why not I do something like this...',
            tools: 'HTML, CSS, JS',
            live: 'https://shaakib99.github.io/Path-Visualizer/',
            git: 'https://github.com/shaakib99/Path-Visualizer'
        },
    ]
    return(
        <div id='project-content-container' style={styles.container}>
            {projectData.map((p,index)=>(
                <Card key={index} data = {p} theme = {theme}/>
            ))}
        </div>
    )
}
export default ProjectContent