import { FC } from 'react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import DynamicIsland from './ui/DynamicIsland'
import ExclusionTabs from './ui/ExclusionTabs'
import InlineDropdown from './ui/InlineDropdown'
import RadialSelector from './ui/RadialSelector'
import Stepper from './ui/Stepper'
import Shimmer from './ui/Shimmer'
import Gallery from './ui/Gallery'

const components = {
  DynamicIsland,
  ExclusionTabs,
  Gallery,
  InlineDropdown,
  RadialSelector,
  Stepper,
  Shimmer,
}

export default ((props) => (
  <MDXRemote
    {...props}
    components={{ ...components, ...(props.components || {}) }}
  />
)) as FC<MDXRemoteProps>
