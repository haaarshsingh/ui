import Main from './components/Main'
import { LuNewspaper, LuRss, LuSun } from 'react-icons/lu'

export default () => (
  <div className='mt-16'>
    <header className='flex items-center justify-between'>
      <div>
        <h1>Harsh&apos;s UI</h1>
        <p>Experimental details and interaction design</p>
      </div>
      <div className='flex items-center gap-x-1.5'>
        <button className='hover:bg-neutral-700/50 p-1.5 rounded transition-colors active:bg-neutral-700/70'>
          <LuRss />
        </button>
        <button className='hover:bg-neutral-700/50 p-1.5 rounded transition-colors active:bg-neutral-700/70'>
          <LuNewspaper />
        </button>
        <button className='hover:bg-neutral-700/50 p-1.5 rounded transition-colors active:bg-neutral-700/70'>
          <LuSun />
        </button>
      </div>
    </header>
    <Main />
  </div>
)
