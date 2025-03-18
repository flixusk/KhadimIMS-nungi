import React from 'react'
import Sidebar from '../components/sidebar'

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-1 p-1 pl-64'>
        <div className='text-center'>
            THIS IS the homepage
        </div>
        </div>
        
    </div>
  )
}

export default Home