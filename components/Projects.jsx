'use client'
import ProjectCard from './ProjectCard'
import { projects } from '@utils/data'
import { useState } from 'react'


export default function Projects() {
  const categories = ['all', 'design', 'development', 'marketing', 'technology']
  const [category, setCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='w-full py-10 px-5'>

      <header className='flex flex-wrap items-center justify-end md:justify-between mb-10'>
        <h3 className='mb-0'>Latest <span>Projects</span></h3>

        {/* Large devise */}
        <ul className="hidden md:flex mt-5 lg:mt-0 gap-10 lg:gap-0 lg:justify-between w-full lg:w-5/12">
          {
            categories.map((item) =>(
              <li
                className={`${item === category && 'active'} category_item`} 
                key={item}
                onClick={() => setCategory(item)}
              >
                {item}
                <span>12</span>
              </li>
            ))
          }
        </ul>

        {/* Small device categories */}
        <div className='flex md:hidden relative'>
          <span
            onClick={() => setIsModalOpen((prev) => !prev)}
            className='px-4 pt-3 pb-2 rounded-3xl border border-primary-green uppercase text-primary-yellow cursor-pointer'
          >
            {category} 12
          </span>

          <ul className={`${isModalOpen ? 'flex' : 'hidden'} flex-col absolute top-14 right-0 bg-white border border-primary-green px-4 py-3 rounded-3xl z-20 w-60 shadow-lg`} >
          {
            categories.map((item) =>(
              <li
                className='uppercase text-sm mb-2 w-fit cursor-pointer hover:text-primary-yellow'
                key={item}
                onClick={() => {setCategory(item); setIsModalOpen(false)}}
              >
                {item}{' '}
                <span>12</span>
              </li>
            ))
          }
        </ul>
        </div>
      </header>
      
      {/* Project items */}
      <div className="h-96 sm:h-auto overflow-scroll sm:overflow-hidden relative">
        <div className='flex sm:flex-wrap justify-start sm:w-full absolute sm:relative gap-3'>
          {
            projects.map((project) => (
              <ProjectCard data={project} key={project.id_key} />
            ))
          }
        </div>
        
      </div>

      <button className="btn mx-auto my-10">Load more</button>
    </div>
  )
}
