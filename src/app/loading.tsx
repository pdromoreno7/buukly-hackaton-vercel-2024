import React from 'react'

function Loading() {
  return (
    <div className='flex items-center justify-center'>
      <div className='h-8 w-8 animate-spin rounded-full border-2 border-t-2 border-gray-200 border-t-blue-600'></div>
    </div>
  )
}

export default Loading
