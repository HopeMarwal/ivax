export default function AnimatedBanner(props) {
  return (
    <div className='w-full px-3'>
      <div className='logo-slider'>
        <div>
          <div className='top'>{props.forward}</div>
          <div className='top'>{props.forward}</div>
        </div>
        <div>
          <div className='top'>{props.forward}</div>
          <div className='top'>{props.forward}</div>
        </div> 
      </div>
      <div className='logo-slider backwards'>
        <div>
          <div className='bottom'>{props.backwards}</div>
          <div className='bottom'>{props.backwards}</div>
        </div>
        <div>
          <div className='bottom'>{props.backwards}</div>
          <div className='bottom'>{props.backwards}</div>
        </div> 
      </div>
    </div>
    
  )
}
