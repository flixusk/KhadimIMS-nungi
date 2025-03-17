import React from 'react'
import Sidebar from '../components/sidebar'

const Help = () => {
  return (
    <div>
        <div className='flex'>
            <Sidebar/>
        <div className='flex-1 p-1'>
            <div className='text-center'>THIS is the help and support page</div>
        </div>
        </div>
    </div>
  )
}

export default Help