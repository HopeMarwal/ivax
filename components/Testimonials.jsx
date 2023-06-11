// Carousel
import Carousel from './Carousel'
// Images
import Image from 'next/image'
import logo from '../public/images/logos/logo.svg'
import logo_2 from '../public/images/logos/logo_2.svg'
import proj from '../public/images/img/proj_1.jpg'
// Data
import { testimonials } from '@utils/data'
// Components
import TestiomonialCard from './TestiomonialCard'

export default function Testimonials() {

  return (
    <div className="testimonials flex flex-wrap w-full py-20 lg:items-end">
      <h3 className='w-full text-center'>
        What our clients <span>say about us</span>
      </h3>
      <div className="hidden lg:flex w-6/12 px-3 flex-wrap items-end">
        <p className='w-full py-20'><span>5</span>12</p>
        <div className="flex w-full gap-3">

          <div className=" flex items-center justify-center bg-secondary-blue w-33pr h-64">
            <Image
              className='invert'
              src={logo}
              alt='logo_company'
              width={80}
              height={70}
            />
          </div>
          <div className="w-33pr h-64">
          <Image
            className='w-full h-full object-cover'
            src={proj}
            alt='logo_company'
          />
          </div>

          <div className="flex items-center justify-center bg-secondary-blue w-33pr h-64">
          <Image
           className='invert'
              src={logo_2}
              alt='logo_company'
              width={80}
              height={70}
            />

          </div>
        </div>
      </div>
      <div className='w-full lg:w-6/12 relative'>
        <Carousel>
            {
              testimonials.map((item, index) => (
                <div className='relative flex-[0_0_100%] flex justify-center items-center pl-1' key={item.id}>
                  <TestiomonialCard data={item} key={index} />
                </div>
              ))
            }
        </Carousel>
        
      </div>
    </div>
    
  )
}
