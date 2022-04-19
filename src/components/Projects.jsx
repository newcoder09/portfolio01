import React from 'react'
import boostcamp from '../assets/boostcamp.jpg'
import quotegenerator from '../assets/quotegenerator.jpg'
import scrollandscroll from '../assets/scrollandscroll.jpg'
import comingsoon from '../assets/comingsoon.jpg'



const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#646765]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-3xl font-medium inline border-b-4 text-gray-200 border-pink-500'>Projects</p>
        <p className='py-1'>Learning & Creating</p>
      </div>

      {/* grid container */}
      <div 
      className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

      {/* Grid 1 */}
        <div style={{backgroundImage: `url(${boostcamp})`}} 
        className='shadow-lg shadow-[#c040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

        {/* hover effect */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
React & Next JS App
          </span>
          <div className='pt-8 text-center'>
<a href="https://boostcamp.netlify.app"target="_blank" rel="noreferrer noopener">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-100 font-bold text-lg'>
  Demo
  </button>
</a>
<a href="https://github.com/newcoder09/Boostcamp-Landing-Page"target="_blank" rel="noreferrer noopener">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-100 font-bold text-lg'>
  Code
  </button>
</a>
          </div>
        </div>
        </div>

  {/* Grid 2 */}
  <div style={{backgroundImage: `url(${quotegenerator})`}} 
        className='shadow-lg shadow-[#c040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

        {/* hover effect */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className=' text-2xl font-bold text-white tracking-wider'>
 JS & Fetch Requests
          </span>
          <div className='pt-8 text-center'>
<a href="https://authorquote.netlify.app/"target="_blank" rel="noreferrer noopener">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-100 font-bold text-lg'>
  Demo
  </button>
</a>
<a href="https://github.com/newcoder09/Quote_Generator"target="_blank" rel="noreferrer noopener">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-100 font-bold text-lg'>
  Code
  </button>
</a>
          </div>
        </div>
        </div>

  {/* Grid 3 */}
  <div style={{backgroundImage: `url(${scrollandscroll})`}} 
        className='shadow-lg shadow-[#c040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

        {/* hover effect */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
    Scrolling  Unsplash & JS
          </span>
          <div className='pt-8 text-center'>
<a href="https://scrollingandscrolling.netlify.app"target="_blank" rel="noreferrer noopener">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-100 font-bold text-lg'>
  Demo
  </button>
</a>
<a href="https://github.com/newcoder09/scrollAndScroll.git"target="_blank" rel="noreferrer noopener">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-100 font-bold text-lg'>
  Code
  </button>
</a>
          </div>
        </div>



        </div>

          {/* Grid 4 */}
          <div style={{backgroundImage: `url(${comingsoon})`}} 
        className='shadow-lg shadow-[#c040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

        {/* hover effect */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
Dev in the making!
          </span>
          <div className='pt-8 text-center'>
<a href="/">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
  Demo
  </button>
</a>
<a href="/">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
  Code
  </button>
</a>
          </div>
        </div>



        </div>
          {/* Grid 5 */}
          <div style={{backgroundImage: `url(${comingsoon})`}} 
        className='shadow-lg shadow-[#c040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

        {/* hover effect */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
Dev in the making!
          </span>
          <div className='pt-8 text-center'>
<a href="/">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
  Demo
  </button>
</a>
<a href="/">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
  Code
  </button>
</a>
          </div>
        </div>



        </div>

          {/* Grid 6 */}
          <div style={{backgroundImage: `url(${comingsoon})`}} 
        className='shadow-lg shadow-[#c040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

        {/* hover effect */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
Dev in the making!
          </span>
          <div className='pt-8 text-center'>
<a href="/">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
  Demo
  </button>
</a>
<a href="/">
  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
  Code
  </button>
</a>
          </div>
        </div>



        </div>

        
      </div>
    </div>

    </div>
  )
}

export default Projects