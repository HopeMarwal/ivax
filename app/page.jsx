import Image from "next/image"
import MainImage from '../public/images/main_img.png'
import '@styles/global.css';

export default function page() {
  return (
    <section className="w-full flex">
      <header>
        <span>IVAX</span>
      </header>

      <div>
        <h2>
          Paint<br></br> your thoughts<br></br>with{' '}
          <span>ivax</span>
        </h2>
        <button className='btn'>Portfolio</button>
        <button className='btn'>Check with us</button>
      </div>

      <div>
        <Image
          src={MainImage}
          alt='ivax_main_page'
        />
      </div>

    </section>
  )
}
