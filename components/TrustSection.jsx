import Image from "next/image"
import js from '../public/images/logos/js.svg'
import css from '../public/images/logos/css.svg'
import java from '../public/images/logos/java.svg'
import logo from '../public/images/logos/logo.svg'
import logo_2 from '../public/images/logos/logo_2.svg'
import logo_3 from '../public/images/logos/logo_3.svg'
import logo_4 from '../public/images/logos/logo_4.svg'

export default function TrustSection() {
  return (
    <div className="w-full py-20">
      <h3 className="px-3">They <span>trust us</span></h3>

      <div className="logos_section">
        <div className="logos">
          <Image src={java} alt='java_icon' width={150}/>
          <Image src={css} alt='css_icon' width={150}/>
          <Image src={logo} alt='logo_icon' width={150}/>
          <Image src={js} alt='js_icon' width={80}/>
          <Image src={logo_2} alt='logo_2_icon'width={150} />
        </div>
        <div className="logos">
          <Image src={logo_2} alt='logo_2_icon' />
          <Image src={js} alt='js_icon' />
          <Image src={logo_3} alt='logo_3_icon' />
          <Image src={java} alt='java_icon' />
          <Image src={logo_4} alt='logo_2_icon' />
        </div>
      </div>
      
    </div>
  )
}
