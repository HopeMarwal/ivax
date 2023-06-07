'use client'

import '@styles/global.css';
import Nav from '@components/Nav';
//import Provider from '@components/Provider';


export const metadata = {
  title: 'IVAX',
  description: 'Point your thoughts with IVAX'
}

const RootLayout = ({ children }) => {
  
  return ( 
    <html lang='en'>
      <body>
        <aside></aside>

        <main>
          <div className='middle_line'></div>
          {children}
        </main>

        <aside>
          <Nav />
          
        </aside>
      </body>      
    </html>
  )
}

export default RootLayout
