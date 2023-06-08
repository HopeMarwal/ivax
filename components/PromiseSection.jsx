import React from 'react'

export default function PromiseSection() {
  return (
    <div className='promise w-full px-3 py-20 '>
      <h3 className='text-center'>
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
          {
            [1,2,3,4,5,6].map((item) => (
              <div className='circle_wrapper' key={item}>
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-yellow opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-secondary-yellow"></span>
              </span>
              </div>
            ))
          }
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
