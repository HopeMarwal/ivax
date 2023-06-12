import React from 'react'

export default function Footer() {
  return (
    <div className='w-full px-3'>
      {/* Contacts */}
      <div className="w-full flex flex-wrap gap-10 mb-10">
        <div className='w-full sm:w-auto text-center sm:text-left'>
          <p className='font-bold text-xl text-primary-green'>Communication</p>
          <p className='font-light text-primary-green'>+00 (000) 000 00 00</p>
          <a className='text-primary-yellow' href='mailto:email@email.com'>email@email.com</a>
        </div>

        <div className='w-full sm:w-auto text-center sm:text-left'>
          <p className='font-bold text-xl text-primary-green'>Address</p>
          <p className='w-40 text-primary-green font-light leading-4 m-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>

      {/* Privacy */}
      <div className='w-full flex flex-wrap justify-between items-center flex-col sm:flex-row gap-5 sm:gap-0'>
        <div className='text-primary-green text-2xl font-bold'>IVAX</div>
        <div className='text-primary-green text-sm font-extralight'>Copyright &copy; 2023 IVAX</div>
        <div className='flex gap-3 text-primary-green text-sm font-extralight'>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
