'use client'

import { useState } from 'react'
import { Spinner } from './Modal'
import clsx from 'clsx'

export default () => {
  const [loading, setLoading] = useState(true)

  const onSubmit = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'steve.wozniak@gmail.com',
          unsubscribed: true,
        }),
      })

      if (!response.ok) throw new Error('Failed to add contact')

      setLoading(false)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className='flex items-center gap-x-4 justify-between mb-12 border border-neutral-800 p-4 rounded-xl bg-neutral-800/25'
      id='newsletter'
    >
      <div>
        <h2 className='font-medium'>Newsletter</h2>
        <p className='mt-0.5'>Be notified of new components.</p>
      </div>
      <form onSubmit={onSubmit} className='flex items-center'>
        <input
          placeholder='Email address'
          type='email'
          className='bg-neutral-800 focus:bg-neutral-800/25 border border-neutral-700/50 focus:border-neutral-700/75 transition-colors rounded-md px-2 h-10 text-sm outline-none'
          required
        />
        <button
          className={clsx(
            'flex w-24 ml-2 items-center justify-center border-neutral-800 transition-colors bg-neutral-800/50 border rounded-lg text-sm font-medium h-10',
            loading
              ? 'cursor-not-allowed'
              : 'hover:bg-neutral-800 active:bg-neutral-700/50'
          )}
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Subscribe'}
        </button>
      </form>
    </section>
  )
}
