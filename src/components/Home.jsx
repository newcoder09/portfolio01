import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#64676b]'>
{/* py is the padding to allow the responsiveness when moving different sizes */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-2xl sm:text-1xl font-light text-white'>Welcome, my name is</p>
    <h1 className='text-4xl sm:text-6xl font-bold text-white'>Elena Souto</h1>
    <h2 className='text-3xl sm:text-4xl font-medium text-[#F9F6EE]'>I'm looking for my first opportunity in Tech.</h2>
    <p className='text-[#F9F6EE] py-4 max-w-[700]'> From the moment I wrote my first 'Hello World'.
     I knew I wanted to learn more. At the moment I am expanding on the 
     skills introduced at Bootcamp.</p>
     <div>
    
     
       <button className='text-black font-medium group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500'>
       View Projects
       
       <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />      
                                  
</span>

       
       </button>
      
       
       
     </div>
    </div>
    </div>

  );
};

export default Home;