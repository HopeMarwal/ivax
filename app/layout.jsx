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
      <body className='overflow-hidden w-full flex'>
        <aside></aside>

        <main className='max-w-screen-xl m-auto relative'>
          <div className='middle_line'></div>
          <Nav />
          {children}
        </main>

        <aside className='relative'>
         
          
        </aside>
      </body>      
    </html>
  )
}

export default RootLayout
