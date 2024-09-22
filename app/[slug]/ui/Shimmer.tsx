'use client'

import { useState } from 'react'
import Wrapper from '../components/Wrapper'
import { BsPlayFill, BsStopFill } from 'react-icons/bs'
import clsx from 'clsx'

export default () => {
  const [pause, setPause] = useState(false)

  return (
    <Wrapper title='Shimmer' tags={['tailwindcss']} className='overflow-hidden'>
      <div className='flex items-center w-64 justify-between border border-neutral-800 rounded-full px-4 py-2'>
        <p className={clsx(!pause && 'shimmer')}>Analyzing query...</p>
        <button
          onClick={() => setPause((pause) => !pause)}
          className={clsx(
            'p-1.5 flex items-center rounded-full transition-colors',
            pause
              ? 'bg-neutral-50/25 hover:bg-neutral-50/30'
              : 'bg-red-500/25 hover:bg-red-500/30 text-red-600'
          )}
        >
          {pause ? <BsPlayFill /> : <BsStopFill />}
        </button>
      </div>
    </Wrapper>
  )
}
