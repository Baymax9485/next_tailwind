import React from 'react'
import Header from '@/components/orders/Header'
import Button from '@/components/orders/Button'
import Table from '@/components/orders/Table'

const Orders = () => {
  return (
    <div className='flex flex-col p-6 space-y-3'>
      <Header />
      <Button />
      <Table />
    </div>
  )
}

export default Orders