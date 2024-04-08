import React from 'react'
import Header from '@/components/collections/Header'
import Table from '@/components/collections/Table'

const Collections = () => {
  return (
    <div className='flex flex-col p-6 space-y-3'>
      <Header />
      <Table />
    </div>
  )
}

export default Collections