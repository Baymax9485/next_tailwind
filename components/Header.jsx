import React from 'react'

const Header = ({ children }) => {
  return (
    <div className=''>
      <div className='bg-green-700 flex justify-between content-center px-4 py-4 m-1'>
        <h2> ALPHA_FILTRATION CANADA </h2>
        <div className="bg-white border-solid hover:border-dotted border-2	border-emerald-600	rounded-lg	">
          <h2> Gilles Phillppe G. </h2>
        </div>
      </div>
      <main className=' w-full'>{children}</main>
    </div>
  )
}

export default Header