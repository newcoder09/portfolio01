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
    <img src={Logo} alt="Logo Image" style={{width: '140px'}} />
    </div>
    
    <ul className='hidden md:flex'>
      
      <li>
     <a href='/'> Home</a>
      </li>
      <li>
      <a href='/about'>About</a>
      </li>
      <li>
      <a href='/skills'>Skills</a>
      </li>
      <li>
      <a href='/projects'>Projects</a>
      </li>
      <li>
      <a href='/contact'>Contact</a>
      </li>
    
    </ul>

    {/* show only when screen is middle opened, z-10 hamburger button, cross if not hamburger*/}

<div onClick={handleClick} className='md:hidden z-10'>
  {!nav ? <FaBars /> : <FaTimes />}
</div>


<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#64676b] flex flex-col justify-center items-center'}>

      <li className='py-6 text -3xl'>
      <a href='/'>Home</a>
      </li>

      <li className='py-6 text -3xl'>
      <a href='/about'>About</a>
      </li>
      <li className='py-6 text -3xl'>
      <a href='/skills'>Skills</a>
      </li>
      <li className='py-6 text -3xl'>
      <a href='/projects'>Projects</a>
      </li>
      <li className='py-6 text -3xl'>
      <a href='/contact'>Contact</a>
      </li>
    </ul>

{/* these are the hovering and sliding icons to the left of the screen */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
  <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-400'>
    <a className='flex justify-between items-center w-full text-gray-100'
   href="https://www.linkedin.com/in/elena-s-047171/" target="_blank" rel="noreferrer noopener">
  Linkedin <FaLinkedin size={30}  />
</a>
</li>

<li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
    <a className='flex justify-between items-center w-full text-gray-100'
    href="https://github.com/newcoder09/" target="_blank" rel="noreferrer noopener">
  Github<FaGithub size={30}  />
</a>
</li>

<li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-500'>
    <a className='flex justify-between items-center w-full text-gray-100'
     href="mailto:elenasouto@gmail.com?body=My custom mail body">
  Email <HiOutlineMail size={30}  />
</a>
</li>

<li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-700'>
    <a className='flex justify-between items-center w-full text-gray-100'
    href="https://drive.google.com/file/d/1CJ5j7IA0js5rB2kh2FZhkSRBuwUDNSyB/view?usp=sharing">
  CV <BsFillPersonLinesFill size={30}  />
</a>
</li>



</ul>
</div>
</div>




);
  };

export default Navbar;