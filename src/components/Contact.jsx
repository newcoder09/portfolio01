import React from 'react'

const Contact = () => {
  return (
   <div name='contact' className='w-full h-screen bg-[#64676b] flex justify-center items-center p-4'>
   <form method='POST' action="https://getform.io/f/47d816ef-7179-4ce6-9984-db8b4da8adc9" className='flex flex-col max-w-[600px] w-full'>
   <div className='pb-8' >
   <p className='text-3xl font-medium inline border-b-4 text-gray-200 border-pink-500'>Contact</p>
   <p className='text-gray-100 py-6'>Please contact me using the form below</p>
   </div>
   <input className=' bg-[#e1c1d7] p-2' type='text' placeholder='Name' name='name' />
   <input className='my-2 p-2 bg-[#e1c1d7]'type='email' placeholder='Email' name='email' />
   <textarea className='bg-[#e1c1d7] p-2' name='message' rows="10" placeholder='Message'></textarea>
   <button className='text-black font-medium border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center '>Send to Elena</button>
</form>
   </div>
  )
}

export default Contact