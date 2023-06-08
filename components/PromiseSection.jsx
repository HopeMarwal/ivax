import React from 'react'

export default function PromiseSection() {
  return (
    <div className='promise w-full px-3 py-20 '>
      <h3 className='text-center font-bold text-primary-green text-6xl mb-14'>
        We promise <span className='text-primary-yellow'>six things</span>
      </h3>

      <div className="flex flex-wrap justify-between">
        <div className="flex w-5/12 flex-col md:flex-row md:w-full justify-start gap-10 md:gap-0 md:justify-evenly">
          <div className="promise_item">
            <p>Your deadline is our religion</p>
          </div>
          <div className="promise_item">
            <p>Maximum flexibility to meet your needs</p>
          </div>
          <div className="promise_item">
            <p>24/7 direct contact with us</p>
          </div>
        </div>

        <div className='promise_line'>
          <div className='circle_wrapper'>
            <div className="circle"></div>
          </div>
          <div className='circle_wrapper'>
            <div className="circle"></div>
          </div>
          <div className='circle_wrapper'>
            <div className="circle"></div>
          </div>
          <div className='circle_wrapper'>
            <div className="circle"></div>
          </div>
          <div className='circle_wrapper'>
            <div className="circle"></div>
          </div>
          <div className='circle_wrapper'>
            <div className="circle"></div>
          </div>
        </div>
        
        <div className="flex w-5/12 flex-col md:flex-row md:w-full justify-end gap-10 md:gap-0 md:justify-evenly items-start">
          <div className="promise_item right" style={{ padding: 0}}></div>
          <div className="promise_item right">
            <p>Personalized approach towards each case</p>
          </div>
          <div className="promise_item right">
            <p>No job is too small</p>
          </div>
          <div className="promise_item right">
            <p>We are creative, inspired, curious, logic and open to critic</p>
          </div>
        </div>
      </div>
    </div>
  )
}
