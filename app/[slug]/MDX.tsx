import { FC } from 'react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import DynamicIsland from './ui/DynamicIsland'

const components = { DynamicIsland }

export default ((props) => (
  <MDXRemote
    {...props}
    components={{ ...components, ...((props.components || {}) as any) }}
  />
)) as FC<MDXRemoteProps>
