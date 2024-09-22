'use client'

import Wrapper from '../components/Wrapper'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TbX } from 'react-icons/tb'

const getRotation = (i: number) => {
  switch (i) {
    case 1:
      return 45
    case 2:
      return 90
    case 3:
      return 135
    case 4:
      return 180
    case 5:
      return 225
    case 6:
      return 315
    case 7:
      return 360
    default:
      return 0
  }
}

const items = [
  { id: 1, icon: '🍎', label: 'Apple' },
  { id: 2, icon: '🍌', label: 'Banana' },
  { id: 3, icon: '🍊', label: 'Orange' },
  { id: 4, icon: '🍇', label: 'Grapes' },
  { id: 5, icon: '🍓', label: 'Strawberry' },
  { id: 6, icon: '🥝', label: 'Kiwi' },
  { id: 7, icon: '🍍', label: 'Pineapple' },
  { id: 8, icon: '🥭', label: 'Mango' },
]

export default () => {
  const [angle, setAngle] = useState(100)
  const [active, setActive] = useState<number | null>(null)
  const dragging = useRef(false)
  const startAngle = useRef(angle)
  const startX = useRef(0)
  const startY = useRef(0)

  const handleItemClick = (id: number) => {
    setActive(active === id ? null : id)
  }

  const onMouseDown = (e: React.MouseEvent) => {
    if (active !== null) return
    dragging.current = true
    startX.current = e.clientX
    startY.current = e.clientY
    startAngle.current = angle
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging.current || active !== null) return
    const dx = e.clientX - startX.current
    const dy = e.clientY - startY.current
    const newAngle = startAngle.current + (dx + dy) / 1.5
    setAngle(newAngle)
  }

  const onMouseUp = () => {
    dragging.current = false
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <Wrapper
      title='Radial Select'
      tags={['tailwindcss', 'framer-motion']}
      className='relative'
    >
      <motion.div
        className='relative h-[200px] cursor-move w-[200px] bg-neutral-800 rounded-full flex items-center justify-center'
        onMouseDown={onMouseDown}
        animate={{
          transform:
            active === null
              ? `rotateZ(${angle}deg)`
              : `rotateZ(${Math.round(angle / 360) * 360}deg)`,
        }}
      >
        <AnimatePresence>
          {items.map((item, index) => {
            const angle = (index / items.length) * Math.PI * 2 - Math.PI / 2
            const x = Math.cos(angle) * 70
            const y = Math.sin(angle) * 70

            return (
              <motion.button
                key={item.id}
                className={`absolute w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-lg
                         ${active === item.id ? 'z-10' : 'z-0'}`}
                initial={false}
                animate={{
                  x: active === null ? x : 0,
                  y: active === null ? y : 0,
                  scale: active === item.id ? 1.2 : 1,
                  rotateZ: active === item.id ? 0 : getRotation(index),
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                onClick={() => handleItemClick(item.id)}
              >
                {item.icon}
                <AnimatePresence>
                  {active === item.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className='absolute -top-0 -right-0 bg-red-500 rounded-full p-0.5'
                    >
                      <TbX className='text-white text-[8px]' />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </Wrapper>
  )
}
