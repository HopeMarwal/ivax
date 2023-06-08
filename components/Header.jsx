import Image from "next/image"
import MainImage from '../public/images/main_img.png'

export default function Header() {
  return (
    <div className="w-full flex flex-wrap items-center content-start">
      <header className="w-full p-3">
        <span className="text-primary-green text-xl font-bold">IVAX</span>
      </header>

      <div className="w-full flex flex-wrap items-center content-start flex-col-reverse sm:flex-row">
        <div className="sm:w-6/12 w-full mb-8">

          <h2 className="mb-10 text-primary-green text-6xl 2xl:text-lgBanner xl:text-7xl sm:text-5xl px-5 font-bold">
            Paint<br></br> your thoughts 
            <p className="text-right">
              with <span className="uppercase text-primary-yellow">ivax</span>
            </p>
          </h2>

          <div className="px-2 flex gap-4 justify-evenly sm:justify-end">
            <button className='btn'>Portfolio</button>
            <button className='btn'>Check with us</button>
          </div>
          
        </div>

        <div className="sm:w-6/12 w-full">
          <Image
            src={MainImage}
            alt='ivax_main_page'
          />
        </div>
      </div>
      
      <div className="w-full flex flex-wrap bg-transparent px-3">
        <div className="sm:w-3/12 w-6/12">
          <p className="font-bold text-7xl text-primary-green">20+</p>
          <p className="font-bold text-xl">Experts</p>
        </div>
        <div className="sm:w-3/12 w-6/12">
          <p className="font-bold text-7xl text-primary-green">25+</p>
          <p className="font-bold text-xl">Verticals</p>
        </div>
        <div className="sm:w-3/12 w-6/12">
          <p className="font-bold text-7xl text-primary-green">50+</p>
          <p className="font-bold text-xl">Regular customers</p>
        </div>
        <div className="sm:w-3/12 w-6/12">
          <p className="font-bold text-7xl text-primary-green">110+</p>
          <p className="font-bold text-xl">Completed projects</p>
        </div>
  
      </div>
    </div>
  )
}
