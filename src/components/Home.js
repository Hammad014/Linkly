import React from 'react'
import { Navbar } from './Navbar'
import Main from './Main'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {

  
  return (
    <div>
    
      <Navbar showSignIn={true} showRegister={true}/>
      <Main/>
      
      
    </div>
  )
}

export default Home
