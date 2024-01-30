import React from 'react'
import { Navbar } from './Navbar'
import Main from './Main'


const Home = () => {

  
  return (
    <div>
    
      <Navbar showSignIn={true} showRegister={true}/>
      <Main/>
      
      
    </div>
  )
}

export default Home
