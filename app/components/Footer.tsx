'use client'

import { useState } from 'react'
import Modal from './Modal'

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <footer className='border-t border-t-neutral-800 flex justify-center py-4'>
      <div className='w-content flex justify-between'>
        <span className='text-sm'>
          Made by <a href='https://harshsingh.xyz'>Harsh</a>
        </span>
        <button className='text-sm flex-nowrap' onClick={() => setOpen(true)}>
          Submit Idea
        </button>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </footer>
  )
}
