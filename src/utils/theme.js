import React from 'react'
export const defaultTheme = {
    background: 'rgb(229, 229, 229)',
    color: '#2C2D37',
    buttonColor: '#5F5DC8',
    buttonTextColor: '#E5E5E5',
    selectedButtonColor: '#D8B9C3',
    selectedButtonTextColor: '#2C2D37',
    defaultFontSize: '1rem',
    headingFontSize: '1.4rem',
    citeFontSize: '0.8rem',
    borderColor: '#d3d3d3',
    shadowColor:'#9b9999',
    // live: require('../assets/images/live-white.svg'),
    live: require('../assets/images/live-white.svg'),
    git: require('../assets/images/git-white.svg'),
    linkedin: require('../assets/images/linkedin-white.svg'),
    leetcode: require('../assets/images/leetcode-white.svg'),
    sliderPosition: '100%',
    sliderBackgroundColor:'rgb(71, 69, 99)',
    inputBorderColor: 'rgb(146, 146, 146)'
}
export const darkTheme = {
    background: 'rgb(44, 45, 55)',
    color: '#E5E5E5',
    buttonColor: '#5F5DC8',
    buttonTextColor: '#E5E5E5',
    selectedButtonColor: '#D8B9C3',
    selectedButtonTextColor: '#2C2D37',
    defaultFontSize: '1rem',
    headingFontSize: '1.4rem',
    citeFontSize: '0.8rem',
    borderColor: '#252632',
    shadowColor: '#1a1a22',
    live: require('../assets/images/live.svg'),
    git: require('../assets/images/git.svg'),
    linkedin: require('../assets/images/linkedin.svg'),
    leetcode: require('../assets/images/leetcode.svg'),
    sliderPosition: '-100%',
    sliderBackgroundColor: 'rgb(233, 232, 255)',
    inputBorderColor:'rgb(92, 94, 105)'
}
export const ThemeContext = React.createContext()