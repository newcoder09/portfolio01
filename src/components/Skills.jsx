import React from 'react'
import HTML from '../assets/html.png';
import GitHub from '../assets/github.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';




const Skills = () => {
  return (
    <div name='Skills' className='w- full h-screen bg-[#64676b] text-gray-200 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div>
           <p className='text-3xl font-medium inline border-b-4 border-pink-500 '>Skills</p>
               <p className='py-4'>Tech I have used:</p>
           </div> 
{/* containers for all icons */}
           <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-6'>
               <div className='shadow-md shadow-[#5a5c60] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                   <p className='my-4'>HTML</p>
               </div>
               <div className='shadow-md shadow-[#5a5c60] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#5a5c60] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#5a5c60] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#5a5c60] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
             
              
           </div>
        </div>
    </div>
  )
}

export default Skills

