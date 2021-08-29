import React from 'react'

const Badge = ({underDevelopment}) => {
  return (
    <span className={`text-xs dark:text-gray-200 uppercase p-1 font-medium rounded-md ml-2 border ${underDevelopment ? 'border-red-500' : 'border-green-500'}`}>
      Under development
    </span>
  )
}

export default Badge
