import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
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

{/* these are the hovering and sliding icons to the left of the screen */}
<div className='flex fixed flex-col top-[35%] left-0'>
<ul>
  <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-500'>
    <a className='flex justify-between items-center w-full text-gray-100'
    href='/'>
  Linkedin <FaLinkedin size={30}  />
</a>
</li>

<li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-500'>
    <a className='flex justify-between items-center w-full text-gray-100'
    href='/'>
  Github<FaGithub size={30}  />
</a>
</li>

<li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-500'>
    <a className='flex justify-between items-center w-full text-gray-100'
    href='/'>
  Email <HiOutlineMail size={30}  />
</a>
</li>

<li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-500'>
    <a className='flex justify-between items-center w-full text-gray-100'
    href='/'>
  CV <BsFillPersonLinesFill size={30}  />
</a>
</li>



</ul>
</div>
</div>




);
  };

export default Navbar;