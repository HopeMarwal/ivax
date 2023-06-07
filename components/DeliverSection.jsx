// Components
import DeliverCard from './DeliverCard'
// Next
import Image from 'next/image'
import deliver from '../public/images/deliver.png'
// Data
import { services } from '../utils/data'

export default function DeliverSection() {

  return (
    <div id='deliver' className='w-full pt-40 px-2'>
      <h3 className='text-center font-bold text-6xl text-primary-green mb-10'>
        We <span className='text-primary-yellow'>deliver</span>
      </h3>
      <div className='flex items-center flex-wrap'>

        <div className='w-full sm:w-6/12 lg:w-4/12 order-2 lg:order-1'>
          <DeliverCard data={services[0]}/>
          <DeliverCard data={services[1]}/>
        </div>

        <div className='w-full lg:w-4/12 order-1 lg:order-2'>
          <Image
            className='m-auto'
            src={deliver}
            alt='ivax_idea'
          />
        </div>

        <div className='w-full sm:w-6/12 lg:w-4/12 order-2 lg:order-3'>
          <DeliverCard data={services[2]}/>
          <DeliverCard data={services[3]}/>
        </div>

      </div>

    </div>
  )
}
