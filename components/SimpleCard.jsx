import React from 'react'

const SimpleCard = ({children}) => {
  return (
    <div className='p-2'>
      <main className=' w-3/6 md:col-span-2 relative mx-auto p-4 border rounded-lg bg-white'>{children}</main>
    </div>
  )
}

export default SimpleCard