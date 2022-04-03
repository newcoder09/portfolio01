import React from 'react'

const About = () => {
  return (
      <div name='about' className='w-full h-screen bg-[#64676b] text-gray-200'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
      <div className='sm:text-right pb-8 pl-4'>
      <p className='text-3xl font-medium inline border-b-4 text-gray-200 border-pink-500'>About</p>
        
         
      </div>
      <div></div>
      </div>
      <div className='max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-6'>
    
      <div className='sm:text-right sm:text-3xl font-bold text-[#F9F6EE]'>
          <p >Thank you for visiting my site. Please browse around and check out 
          what I have been learning.</p>
      </div>
      <div>
          <p> My goal was to set myself the challenge of trying something completely new. I wanted to make changes and develop myself continuosly.  
          I signed up for the School of Code bootcamp. </p>
          <p>My journey was exciting, challenging and extremely difficult. 
         With my graduation behind me, I'm looking for that opportunity to enter the world of Tech. I want to enhance my coding
         skills and contribute to the success of a Company.</p>
          
      </div>
      </div>
      </div>
      </div>

  );

 
}
export default About;

