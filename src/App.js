import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Privacypolicy from './components/Privacypolicy';
import Howitworks from './components/Howitworks';
import Termsofservices from './components/Termsofservices';


function App() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#0b101b' : '#c8cdd5';
    document.body.style.color = darkMode ? 'white' : 'black';
    // document.body.style.border = darkMode ? '1px solid white' : '1px solid black';
  }, [darkMode]);

  const handletoggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };


  return (
    <>
    
    <div style={{ position: 'relative', maxWidth: '100%' }}>
        {darkMode && (
          <>
            <img className='mbl-cube1 cube1 absolute z-0 top-0 right-10 h-80' src='./cubes/Rectangle 4 (1).png' />
            <img className='mbl-cube2 md:cube2 absolute top-80 right-60 h-80 z-0' src='./cubes/Rectangle 4.png' />
            <img className='mbl-cube3 cube3 absolute z-0 top-20 left-10 h-80' src='./cubes/Rectangle 5 (1).png' />
            <img className='mbl-cube4 cube4 absolute z-0' src='./cubes/Rectangle 5 (2).png' />
          </>
        )}

        <div className='z-50 relative'>
          <div className='absolute theme-mbl transform rotate-90 top-80 right-5 '>
        <div className={`switchtheme ${darkMode ? 'on' : ''}`} onClick={handletoggle}>
          <div className='flex justify-between'> 
          <FontAwesomeIcon className='small-scn1 h-10 w-10 m-1 ' icon="fa-solid fa-sun" />
          <FontAwesomeIcon className='small-scn2 h-10 w-10 m-1 ' icon="fa-solid fa-moon" />
          </div>
            <div className='slidertheme'></div>
          </div>
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login darkMode={darkMode} handleToggle={handletoggle} />} />
            <Route path='/register' element={<Register darkMode={darkMode} handleToggle={handletoggle} />} />
            <Route path='/privacypolicy' element={<Privacypolicy />} />
            <Route path='/howitworks' element={<Howitworks />} />
            <Route path='/termsofservices' element={<Termsofservices />} />
          </Routes>
        </div>
      </div>
      
      </>
  );
}

export default App;
