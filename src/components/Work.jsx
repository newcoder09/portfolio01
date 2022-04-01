import React from 'react'
import boostcamp from '../assets/boostcamp.jpg'
import quotegenerator from '../assets/quotegenerator.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#64676b]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

    {/* This stores all the work */}
    <div className='pb-8'>
    <p className='text-3xl font-bold inline border-b-4 text-gray-200 border-pink-500'>
    Projects

    </p>
        <p className='py-6'>Please take a look at some of my work</p>  
    </div>
        {/* container grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        </div>
{/* new project */}
        <div
            style={{ backgroundImage: `url(${boostcamp})` }}
            className='shadow-lg shadow-[#5a5C60] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-white font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>



{/* new project */}
<div
            style={{ backgroundImage: `url(${boostcamp})` }}
            className='shadow-lg shadow-[##5a5C60] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-whitefont-bold text-lg'>
                    View
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          



{/* new project  */}





        <div style={{backgroundImage:`url(${boostcamp})` }}
       
     

        /* This is for the hover effect on the grids */
         className='shadow-lg shadow-[#5a5C60] group container rounded-md flex justify-center items-center mx-auto content-div'>

        {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-3xl font-bold text-black tracking-wider'>
 Project using React and Nextjs
                </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-white font-bold text-lg'>
                   View
                   </button>
                   </a>

                    <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-white font-bold text-lg'>
                    Code
                    </button>
                   </a>
                </div>
            </div>
        </div>    
        
    {/* new project */}
 
    <div style={{backgroundImage:`url(${quotegenerator})` }}
       
     

       /* This is for the hover effect on the grids */
        className='shadow-lg shadow-[#5a5C60] group container rounded-md flex justify-center items-center mx-auto content-div'>

       {/* hover effects */}
           <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-3xl font-bold text-black tracking-wider'>
Project using Javascript and API 
               </span>
               <div className='pt-8 text-center'>
                   <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-white font-bold text-lg'>
                  View
                  </button>
                  </a>

                   <a href="/">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-white font-bold text-lg'>
                   Code
                   </button>
                  </a>
               </div>
           </div>
       </div>  
         </div>
       
   </div>





  )
}

export default Work