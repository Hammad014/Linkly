import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Navbar = ({ showSignIn, showRegister }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>

{/* <div className='flex justify-between text-white max-w-7xl m-auto p-5 nav-top-div items-center '>

<Link to='/'> <img className='h-12 logo-head' src='./images/linkly.png'/> </Link>
<div onClick={handleMenuToggle} className='block lg:hidden'>
<FontAwesomeIcon className='h-7' icon="fa-solid fa-bars" />
</div>
   <div className='flex menu-items gap-10 md:hidden'>
    {showSignIn  &&    <Link to='/login' style={{border:'2px solid white',backgroundColor:'#181e29',borderRadius:'30px'}} className='flex font-semibold items-center p-4 rounded-3xl cursor-pointer'>
        <p className='rounded-2xl pr-1'>Login </p>
        <img src='./images/sign-in.png'/>
        </Link> }
      {showRegister &&  <Link to='/register' style={{backgroundColor:'#144ee3',borderRadius:'30px'}} className='p-4 register-btn-mbl font-semibold border-gray-700'>Register Now</Link>}
    </div> 
</div> */}

<div className='flex justify-between text-white max-w-7xl m-auto p-5 nav-top-div items-center '>

        <Link to='/'> <img className='h-12 logo-head' src='./images/linkly.png' alt=''/> </Link>
        <div onClick={handleMenuToggle} className='normal-menu block lg:hidden'>
          <FontAwesomeIcon className='h-7' icon="fa-solid fa-bars" />
        </div>

        {isMenuOpen && showSignIn && (
          <div className='absolute top-12 right-5'>
            <Link to='/login' className='block bg-blue-700 font-semibold items-center p-3 rounded-lg cursor-pointer'>
              Login
            </Link>
            {showRegister && (
              <Link to='/register' className='block p-3 bg-red-500 rounded-lg register-btn-mbl font-semibold'>
                Register Now
              </Link>
            )}
          </div>
        )}

        <div className='mbl-menu flex menu-items gap-10'>
          {showSignIn && (
            <Link to='/login' style={{border:'2px solid white',backgroundColor:'#181e29',borderRadius:'30px'}} className='flex font-semibold items-center p-4 rounded-3xl cursor-pointer'>
              <p className='rounded-2xl pr-1'>Login </p>
              <img src='./images/sign-in.png' alt=''/>
            </Link>
          )}
          {showRegister && (
            <Link to='/register' style={{backgroundColor:'#144ee3',borderRadius:'30px'}} className='p-4 register-btn-mbl font-semibold border-gray-700'>
              Register Now
            </Link>
          )}
        </div>
      </div>

    </>
  );
};
