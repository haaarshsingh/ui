'use client'

import { FormEvent, useRef, useState } from 'react'
import { Spinner } from './Modal'
import clsx from 'clsx'
import { toast } from 'sonner'

export default () => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: ref.current?.value }),
      })

      if (!response.ok) toast.error('Failed to subscribe')
    } catch (error) {
      console.error(error)
      toast.error('Failed to subscribe')
    } finally {
      setLoading(false)
      if (ref.current) ref.current.value = ''
      toast.success('Subscribed')
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
          ref={ref}
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
