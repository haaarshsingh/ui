import Image from 'next/image'
import Wrapper from '../components/Wrapper'

export default () => {
  return (
    <Wrapper title='Gallery' tags={['tailwindcss', 'framer motion']}>
      <div className='relative w-[508px] h-[315px]'>
        <button className='absolute left-0'>
          <div className='w-[420px] h-[315px] overflow-hidden rounded-xl relative'>
            <Image
              src='/gallery/1.webp'
              alt='flowers'
              fill
              className='object-cover'
            />
          </div>
        </button>
        <button className='absolute right-0 top-1/4'>
          <div className='right-0 w-20 h-20 overflow-hidden rounded-xl relative'>
            <Image
              src='/gallery/2.webp'
              alt='flowers'
              fill
              className='object-cover'
            />
          </div>
        </button>
        <button className='absolute right-0 top-1/2'>
          <div className='w-20 h-20 overflow-hidden rounded-xl relative'>
            <Image
              src='/gallery/3.webp'
              alt='flowers'
              fill
              className='object-cover'
            />
          </div>
        </button>
        <button className='absolute right-0'>
          <div className='w-20 h-20 overflow-hidden rounded-xl relative'>
            <Image
              src='/gallery/4.webp'
              alt='flowers'
              fill
              className='object-cover'
            />
          </div>
        </button>
      </div>
    </Wrapper>
  )
}
