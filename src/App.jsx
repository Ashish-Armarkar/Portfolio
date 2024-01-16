import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Experience from './Components/experience/Experience'
import Footer from './Components/footer/Footer'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <center><Experience/></center>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
