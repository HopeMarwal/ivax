'use client'
import { useState, useEffect } from "react"
import Image from "next/image";

const menuItems = [
  {
    title: 'Contact',
    link: '#contact'
  },
  {
    title: 'Why work with us',
    link: '#work'
  },
  {
    title: 'We deliver',
    link: '#deliver'
  },
  {
    title: 'They trust us',
    link: '#trust'
  },
  {
    title: 'Latest projects',
    link: '#latest'
  }
]

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = 'visible';
  }, [])

  const handleTOggleMenu = () => {

    if(isMenuOpen) {
      document.body.style.overflowY = 'visible';
      console.log('hidden')
    } else {
      document.body.style.overflowY = 'hidden';
    }
    setIsMenuOpen((prev) => !prev)

  }

  return (
    <nav className={`${isMenuOpen ? 'open' : ''} nav_menu`}>
      <button
        className={`${isMenuOpen ? 'open' : ''} btn btn_menu`}
        onClick={handleTOggleMenu}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-wrap h-screen`}>
        <span className="font-league w-full text-primary-yellow text-xl font-bold">IVAX</span>
        
        <div className="menu_block"></div>
        <div className="menu_block"></div>
        <div className="menu_block"></div>
        <div className="menu_block"></div>
        <div className="menu_block"></div>

        <div className="wrapper relative flex flex-wrap h-full w-full pl-10 content-center ">
          <div className="gradient_top"></div>
          <ul className="menu_items">
            {menuItems.map((item) => (
              <li className="list_item" key={item.link} onClick={() => {setIsMenuOpen(false); document.body.style.overflowY = 'visible'}}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}

          </ul>
          <div className="gradient_bottom"></div>
          {/* Social links */}
          <div className="social">
            {/* Fb */}
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33125 3.32083H10.1571V0.140833C9.84208 0.0975 8.75875 0 7.49708 0C4.86458 0 3.06125 1.65583 3.06125 4.69917V7.5H0.15625V11.055H3.06125V20H6.62292V11.0558H9.41042L9.85292 7.50083H6.62208V5.05167C6.62292 4.02417 6.89958 3.32083 8.33125 3.32083Z" fill="#F2C94C"/>
            </svg>
            {/* Inst */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0H5C2.2 0 0 2.2 0 5V15C0 17.8 2.2 20 5 20H15C17.8 20 20 17.8 20 15V5C20 2.2 17.8 0 15 0ZM18 15C18 16.7 16.7 18 15 18H5C3.3 18 2 16.7 2 15V5C2 3.3 3.3 2 5 2H15C16.7 2 18 3.3 18 5V15Z" fill="#F2C94C"/>
              <path d="M10 5C7.2 5 5 7.2 5 10C5 12.8 7.2 15 10 15C12.8 15 15 12.8 15 10C15 7.2 12.8 5 10 5ZM10 13C8.3 13 7 11.7 7 10C7 8.3 8.3 7 10 7C11.7 7 13 8.3 13 10C13 11.7 11.7 13 10 13Z" fill="#F2C94C"/>
              <path d="M15 6C15.5523 6 16 5.55229 16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5C14 5.55229 14.4477 6 15 6Z" fill="#F2C94C"/>
            </svg>
            {/* Behance */}
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.22817 6.39998C8.64321 6.19121 8.95698 5.95869 9.172 5.70742C9.55453 5.25488 9.7433 4.65483 9.7433 3.91102C9.7433 3.18721 9.55453 2.56841 9.177 2.04962C8.54695 1.20455 7.48061 0.772014 5.97299 0.749512H0V12.9418H5.56921C6.19676 12.9418 6.77806 12.888 7.3156 12.778C7.85314 12.6667 8.31818 12.463 8.71196 12.1654C9.06199 11.9067 9.35452 11.5854 9.58704 11.2066C9.95457 10.6341 10.1383 9.98527 10.1383 9.26271C10.1383 8.56265 9.97707 7.96635 9.65704 7.47631C9.33326 6.98627 8.85822 6.62749 8.22817 6.39998ZM2.46395 2.86719H5.15417C5.74547 2.86719 6.23301 2.93094 6.61554 3.0572C7.05808 3.24097 7.27935 3.61475 7.27935 4.18479C7.27935 4.69609 7.11058 5.05362 6.7768 5.25488C6.44053 5.45615 6.00424 5.55741 5.4692 5.55741H2.46395V2.86719ZM6.71805 10.6116C6.42053 10.7553 6.00174 10.8266 5.46545 10.8266H2.46395V7.57507H5.5067C6.03674 7.57882 6.44928 7.64883 6.7443 7.78009C7.26935 8.01761 7.53062 8.45264 7.53062 9.08895C7.53062 9.83901 7.26059 10.344 6.71805 10.6116Z" fill="#F2C94C"/>
              <path d="M18.0779 1.31836H12.7812V2.83598H18.0779V1.31836Z" fill="#F2C94C"/>
              <path d="M19.9181 7.30756C19.8081 6.60125 19.5656 5.97995 19.188 5.44366C18.7742 4.83611 18.2492 4.39107 17.6104 4.1098C16.9741 3.82728 16.2578 3.68601 15.4602 3.68726C14.1214 3.68726 13.0338 4.10605 12.1924 4.93737C11.3536 5.77118 10.9336 6.97003 10.9336 8.53266C10.9336 10.199 11.3974 11.4029 12.33 12.1417C13.2588 12.8818 14.3314 13.2505 15.549 13.2505C17.0228 13.2505 18.1692 12.8118 18.988 11.9367C19.5118 11.3841 19.8081 10.8404 19.8731 10.3066H17.4329C17.2916 10.5703 17.1279 10.7766 16.9403 10.9266C16.6003 11.2016 16.1578 11.3391 15.6152 11.3391C15.0989 11.3391 14.6614 11.2254 14.2964 10.9991C13.6938 10.6366 13.3788 10.0015 13.3388 9.09771H19.9981C20.0081 8.31889 19.9831 7.7201 19.9181 7.30756ZM13.3988 7.54133C13.4863 6.95503 13.6988 6.48999 14.0363 6.14622C14.3739 5.80369 14.8514 5.63117 15.4627 5.62992C16.0265 5.62992 16.4978 5.79119 16.8816 6.11496C17.2604 6.44124 17.4741 6.91503 17.5179 7.54133H13.3988Z" fill="#F2C94C"/>
            </svg>

          </div>
        </div>
        
      </div>
    </nav>
  )
}
