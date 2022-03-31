import React from 'react'

const About = () => {
  return (
      <div name='about' className='w-full h-screen bg-[#64676b] text-gray-200'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
      <div className='sm:text-right pb-8 pl-4'>
          <p className='text-3xl font-medium inline border-b-4 border-pink-500'>
          About
          </p>
      </div>
      <div></div>
      </div>
      <div className='max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-6'>
    
      <div className='sm:text-right sm:text-3xl font-bold text-[#F9F6EE]'>
          <p >TEXT Thank you so much for visiting my site. I have been a SAHM for a while.TEXT</p>
      </div>
      <div>
          <p>TEXT GOES HERE: A highly motivated and enthusiastic bi-lingual(Spanish), junior developer, with experience 
          in industry best practice. I am seeking 
          a role that will allow me to contribute to a company by further implementing the skills 
          that have been introduced 
          at bootcamp and adding value to the company. Exceptional communication skills, highly 
          adaptable and flexible. 
          Dedicated to team work and courageous to try new things and eager to learn.TEXT </p>
      </div>
      </div>
      </div>
      </div>

  );

 
}
export default About;

