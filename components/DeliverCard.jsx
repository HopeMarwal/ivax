import Image from 'next/image'

export default function DeliverCard({ data }) {
  return (
    <div className='px-1 w-11/12 sm:w-full m-auto'>
      <div className=' delivery_card'>
        <header className='flex justify-between items-center mb-3'>
          <Image 
            src={data.img}
            alt='icon'
          />
          <span>0{data.id}</span>
        </header>
        <h4 className='text-2xl text-primary-green font-bold'>{data.title}</h4>
        <ul className='delivery_list'>
          {data.list.map((item) => (<li key={item}>{item}</li>))}
        
        </ul>
      </div>
    </div>
    
  )
}
