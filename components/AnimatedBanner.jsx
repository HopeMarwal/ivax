import React from 'react'

export default function AnimatedBanner() {
  const first = 'UX _ Web development _ Brand identity'
  const sec = 'UX _ Mobile apps _ Video _ Film making'
  return (
    <div className='w-full px-3'>
      <div className='logo-slider'>
        <div>
          <div className='top'>{first}</div>
          <div className='top'>{first}</div>
        </div>
        <div>
          <div className='top'>{first}</div>
          <div className='top'>{first}</div>
        </div> 
      </div>
      <div className='logo-slider backwards'>
        <div>
          <div className='bottom'>{sec}</div>
          <div className='bottom'>{sec}</div>
        </div>
        <div>
          <div className='bottom'>{sec}</div>
          <div className='bottom'>{sec}</div>
        </div> 
      </div>
    </div>
    
  )
}
