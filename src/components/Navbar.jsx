import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonalLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';



const Navbar = () => {
  const [nav, setNav]= useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#64676b] text-gray-200'>
    <div>
    <img src={Logo} alt="Logo Image" style={{width: '80px'}} />
    </div>
    
    <div className='hidden md:flex'>
      <ul className='flex'>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Work</li>
      <li>Contact</li>
    </ul>
    </div>

    {/* show only when screen is middle opened, z-10 hamburger button, cross if not hamburger*/}

<div onClick={handleClick} className='md:hidden z-10'>
  {!nav ? <FaBars /> : <FaTimes />}
</div>


<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#64676b] flex flex-col justify-center items-center'}>

      <li className='py-6 text -3xl'>Home</li>
      <li className='py-6 text -3xl'>About</li>
      <li className='py-6 text -3xl'>Skills</li>
      <li className='py-6 text -3xl'>Work</li>
      <li className='py-6 text -3xl'>Contact</li>
    </ul>


<div className='flex fixed flex-col top-[35%] left-0'>
<ul>
  <li>
    <a href='/'>
Linkedin <FaLinkedin />
</a>
  </li>
  <li></li>
  <li></li>

</ul>

</div>




   </div>
    



 

);
  };

export default Navbar;