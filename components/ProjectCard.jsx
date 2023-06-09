import Image from "next/image"

export default function ProjectCard({ data }) {
  return (
    <div className='project_card'>

      <div className="image">
        <Image 
          src={data.img}
          alt={data.desc}
          className="w-full object-cover h-full"
        />
      </div>

      <h5 className="uppercase text-base leading-4 text-primary-yellow mt-3">{data.title}</h5>
      <p className="capitalize font-semibold text-lg text-primary-green">{data.desc}</p>
      
    
    </div>
  )
}
