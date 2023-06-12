'use client'

import '@styles/global.css';
import Nav from '@components/Nav';

const RootLayout = ({ children }) => {
  
  return ( 
    <html lang='en'>
      <head>
        <title>IVAX</title>
        <meta name="description" content="Point your thoughts with IVAX" />
        <link rel="apple-touch-icon" sizes="180x180" href='/images/apple-touch-icon.png' />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />

      </head>

      <body className='overflow-hidden w-full flex'>
        <aside></aside>

        <main className='max-w-screen-lg m-auto relative'>
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
