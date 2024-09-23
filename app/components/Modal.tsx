'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { FiX } from 'react-icons/fi'

export default (({ open, setOpen }) => {
  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    setLoading(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <div className='fixed flex items-center justify-center w-screen h-screen bg-black/75 top-0 left-0'>
          <div className='border bg-neutral-900 border-neutral-800 rounded-lg'>
            <div className='flex items-center justify-between py-3 border-b border-b-neutral-700 px-4'>
              <h2 className='font-medium text-sm'>Submit Idea</h2>
              <button
                className='text-neutral-500'
                onClick={() => setOpen(false)}
              >
                <FiX />
              </button>
            </div>
            <form className='flex flex-col px-4 py-3' onSubmit={onSubmit}>
              <textarea
                placeholder='Share your ideas...'
                className='w-96 h-32 text-sm bg-neutral-800/25 transition-colors border border-neutral-800 focus:border-neutral-700 outline-none px-3 py-2 rounded-lg'
                required
                autoFocus
              />
              <button
                className={clsx(
                  'w-full flex items-center justify-center border-neutral-800 hover:bg-neutral-800 transition-colors active:bg-neutral-700/50 bg-neutral-800/25 border rounded-lg text-sm font-medium mt-3 h-10',
                  loading && 'cursor-not-allowed'
                )}
              >
                {loading ? <Spinner /> : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}) as FC<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }>

const Spinner = () => (
  <svg
    className='animate-spin h-4 w-4 text-neutral-50'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='3'
    />
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    />
  </svg>
)
