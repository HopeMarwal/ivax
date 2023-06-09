import Image from "next/image"

export default function TestiomonialCard({ data }) {
  console.log(data)
  return (
    <div className='w-full flex flex-col md:flex-row text-center items-center'>
      <div className="w-full h-100 md:h-96 md:w-6/12">
          <Image
            className="w-full h-full object-cover"
            src={data.img}
            alt={data.name}
          />
      </div>
      <div className="w-full md:w-6/12">
          <p className="text-primary-green font-bold text-2xl my-3">
          {data.name}
        </p>

        <p className="text-primary-yellow text-2xl mb-5 font-light">
          {data.position}
        </p>
        <p className="text-lg leading-5">
          {data.text}
        </p>
      </div>
      
    </div>
  )
}
