import React from 'react'
import { useAppContext } from '../context/context'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

const profile = () => {
    const { dark, userName, handleClick } = useAppContext()
  return (
    <div className='h-screen'>
        <Profile />
        <Footer />
    </div>
  )
}

export default profile