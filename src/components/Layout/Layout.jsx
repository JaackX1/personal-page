import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import Fab from '../FloatButton/Fab'



const Layout = ({children}) => {
  return (
    <div className='mb-2'>
      {children}
      <Footer/>
      <Fab></Fab>
    </div>
  )
}

export default Layout
