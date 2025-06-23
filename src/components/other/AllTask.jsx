import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  console.log(userData) // ✅ Correctly logging context data

  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 h-60 rounded'>
      <div className='bg-red-600 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>Active Task</h3>
        <h5 className='text-lg font-medium w-1/5'>New Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
      </div>
      <div className='h-[80%] overflow-auto'>
        {userData?.map((elem, idx) => (
          <div
            key={idx}
            className='mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-600'
          >
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>
              {elem.taskCount.active}
            </h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>
              {elem.taskCount.newTask}
            </h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600'>
              {elem.taskCount.completed}
            </h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>
              {elem.taskCount.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
