import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#64676b] text-gray-200'>
    <div>
    <img src={Logo} alt="Logo Image" style={{width: '80px'}} />
    </div>
    <div>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Work</li>
      <li>Contact</li>
    </ul>
    </div>
    </div>
  );
};

export default Navbar