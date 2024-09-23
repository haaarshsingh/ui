'use client'

import { useRef, useEffect, FormEvent } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { FiX } from 'react-icons/fi'

export default (({ open, setOpen }) => {
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: `<p>${inputRef.current?.value}</p>` }),
      })

      if (!response.ok) throw new Error('Failed to send email')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node))
        setOpen(false)
    }

    if (open) document.addEventListener('mousedown', handleClickOutside)
    else document.removeEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, setOpen])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='fixed flex items-center justify-center w-screen h-screen bg-black/75 top-0 left-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='border bg-neutral-900 border-neutral-800 rounded-lg'
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            ref={modalRef}
          >
            <div className='flex items-center justify-between py-3 border-b border-b-neutral-700 px-4'>
              <h2 className='font-medium text-sm'>Submit Idea</h2>
              <button
                className='text-neutral-500 hover:bg-neutral-50/5 transition-colors active:bg-neutral-50/10 p-1.5 rounded-md'
                onClick={() => setOpen(false)}
              >
                <FiX />
              </button>
            </div>
            <form className='flex flex-col px-4 py-3' onSubmit={onSubmit}>
              <textarea
                placeholder='Share your ideas...'
                className='xs:w-96 w-[85vw] h-32 text-sm bg-neutral-800/25 transition-colors border border-neutral-800 focus:border-neutral-700 outline-none px-3 py-2 rounded-lg'
                required
                autoFocus
                ref={inputRef}
              />
              <button
                className={clsx(
                  'w-full flex items-center justify-center border-neutral-800 transition-colors bg-neutral-800/25 border rounded-lg text-sm font-medium mt-3 h-10',
                  loading
                    ? 'cursor-not-allowed'
                    : 'hover:bg-neutral-800 active:bg-neutral-700/50'
                )}
              >
                {loading ? <Spinner /> : 'Submit'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}) as FC<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }>

export const Spinner = () => (
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
