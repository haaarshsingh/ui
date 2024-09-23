'use client'

import { useState } from 'react'
import Modal from './Modal'

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <footer className='border-t border-t-neutral-800 flex justify-center py-4'>
      <div className='w-content'>
        <span className='text-sm'>
          Made by <a href='https://harshsingh.xyz'>Harsh</a>
        </span>
      </div>
      <button className='text-sm' onClick={() => setOpen(true)}>
        Submit Idea
      </button>
      <Modal open={open} setOpen={setOpen} />
    </footer>
  )
}
