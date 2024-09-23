import Main from './components/Main'
import { LuNewspaper, LuRss, LuSun } from 'react-icons/lu'
import Newsletter from './components/Newsletter'

export default () => (
  <div className='mt-16'>
    <header className='flex items-center justify-between'>
      <div>
        <h1>Harsh&apos;s UI</h1>
        <p>Experimental details and interaction design</p>
      </div>
      <div className='flex items-center gap-x-1.5'>
        <a
          href='/rss'
          target='_blank'
          rel='noreferrer'
          className='hover:bg-neutral-700/50 p-1.5 rounded transition-colors active:bg-neutral-700/70'
        >
          <LuRss />
        </a>
        <a
          className='hover:bg-neutral-700/50 p-1.5 rounded transition-colors active:bg-neutral-700/70'
          href='#newsletter'
        >
          <LuNewspaper />
        </a>
        <button className='hover:bg-neutral-700/50 p-1.5 rounded transition-colors active:bg-neutral-700/70'>
          <LuSun />
        </button>
      </div>
    </header>
    <Main />
    <Newsletter />
  </div>
)
