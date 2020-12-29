import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AboutMe from './pages/aboutme'
import Experience from './pages/experience'
import Projects from './pages/projects'
import ContactMe from './pages/contactme'
import {defaultTheme,darkTheme, ThemeContext} from './utils/theme'
function App() {
  const theme = localStorage.getItem('theme')
  const [value,setValue ]=React.useState(theme !== null ? JSON.parse(theme) : defaultTheme)
  const toggleTheme = () => {
    const x = value === defaultTheme ? darkTheme : defaultTheme
    localStorage.setItem('theme', JSON.stringify(x))
    setValue(x)
  }
  return (
  <Router>
  <ThemeContext.Provider value = {{theme: value, toggleTheme: toggleTheme}}>
      <Route path={process.env.PUBLIC_URL + '/'} exact component={AboutMe}/>
      <Route path={process.env.PUBLIC_URL + '/experience'} exact component={Experience}/>
      <Route path={process.env.PUBLIC_URL + '/projects'} exact component={Projects}/>
      <Route path={process.env.PUBLIC_URL + '/contact'} exact component={ContactMe}/>
    </ThemeContext.Provider>
  </Router>
  )
}

export default App;
