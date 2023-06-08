'use client'
import { useState, useEffect } from "react"

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

        <div className="wrapper flex flex-wrap h-full w-full pl-10 content-center ">
          <div className="gradient_top"></div>
          <ul className="menu_items">
            {menuItems.map((item) => (
              <li className="list_item" key={item.link} onClick={() => {setIsMenuOpen(false); document.body.style.overflowY = 'visible'}}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}

          </ul>
          <div className="gradient_bottom"></div>
        </div>
        
      </div>
    </nav>
  )
}
