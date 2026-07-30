import React from 'react'

const Controls = ({ setCount }) => {
  return (
    <div className='flex gap-4 user-select-none'>
      <button className='cursor-pointer' onClick={() => setCount(prev => (prev >0 ) ? prev - 1 : 0)}>Decrease</button>
      <button className='cursor-pointer' onClick={() => setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default Controls