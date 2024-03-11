import React from 'react'
import Navbar from '../components/widget/Navbar'
import Todos from '../components/widget/Todos'
import AddTask from '../components/widget/AddTask'

const Dashboard = () => {
  return (
    <section className='text-[#f7f7f7] pb-20 relative'>
      <Navbar />
      <AddTask />
      <Todos />
    </section>
  )
}

export default Dashboard