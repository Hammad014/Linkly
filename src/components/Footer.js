import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='max-w-full m-auto text-center text-white mt-24 pt-10 pb-10'>
    <div className=''>
      <img className='max-w-full m-auto' src='./images/Linkly.png' alt=''/>
      <div className='flex gap-7 justify-center mt-6 items-center'>
        <a href='https://www.youtube.com/' ><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
        <a href='https://www.youtube.com/' ><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
        <a href='https://www.youtube.com/' ><FontAwesomeIcon icon="fa-solid fa-phone" /></a>
        <a href='https://www.youtube.com/' ><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
      </div>
      <p className='mt-5'>Copyrights <FontAwesomeIcon icon="fa-regular fa-copyright" /> 2024 Linkly, Inc</p>
      </div>
      <div className='footer-menu flex gap-16 justify-center mt-7'>
      <Link to='../howitworks'> How it works ? </Link>
      <Link to='../privacypolicy'> Privacy Policy  </Link>
      <Link to='../termsofservices'> Terms of Services  </Link>
      
      </div>
   </footer>
    </>
  )
}

export default Footer
