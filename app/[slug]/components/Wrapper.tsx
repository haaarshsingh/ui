import { FC, ReactNode } from 'react'

export default (({ children, className }) => (
  <div className={className}>{children}</div>
)) as FC<{
  children: ReactNode
  className: string
}>
