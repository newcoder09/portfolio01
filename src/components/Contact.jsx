import React from 'react'

const Contact = () => {
  return (
   <div name='contact' className='w-full h-screen bg-[#64676b] flex justify-center p-4'>
   <form action="" className='flex flex-col max-w-[600px] w-full'>
   <div className='pb-8' >
   <p className='text-3xl font-medium inline border-b-4 text-gray-200 border-pink-500'>Contact</p>
   <p className='text-gray-100 py-4'>Please contact me using the form below</p>
   </div>
   <input className='py-1 bg-[#e1c1d7]' type='text' placeholder='Name' name='name' />
   <input className='my-4 p-2 bg-[#e1c1d7]'type='email' placeholder='Email' name='email' />
   <textarea className='bg-[#e1c1d7] p-2' name='message' rows="10" placeholder='Message'></textarea>
   <button className='text-black font-medium border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center '>Send to Elena</button>
</form>
   </div>
  )
}

export default Contact