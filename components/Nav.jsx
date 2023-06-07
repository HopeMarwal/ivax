'use client'
import { useState } from "react"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <li className="list_item">
              <a href='#contact'>Contact</a>
            </li>
            <li className="list_item">
              <a href='#work'>Why work with us</a>
            </li>
            <li className="list_item">
              <a href='#deliver'>We deliver</a>
            </li>
            <li className="list_item">
              <a href='#trust'>They trust us</a>
            </li>
            <li className="list_item">
              <a href='#latest'>Latest projects</a>
            </li>
          </ul>
          <div className="gradient_bottom"></div>
        </div>
        
      </div>
    </nav>
  )
}
