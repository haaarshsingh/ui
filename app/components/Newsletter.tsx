export default () => {
  return (
    <section
      className='flex items-center gap-x-4 justify-between mb-12 border border-neutral-800 p-4 rounded-xl bg-neutral-800/25'
      id='newsletter'
    >
      <div>
        <h2 className='font-medium'>Newsletter</h2>
        <p className='mt-0.5'>Be notified of new components.</p>
      </div>
      <form>
        <input
          placeholder='Email address'
          type='email'
          className='bg-neutral-800 focus:bg-neutral-800/25 border border-neutral-700/50 focus:border-neutral-700/75 transition-colors rounded-md p-2 text-sm outline-none'
          required
        />
        <button className='text-sm bg-neutral-100 text-neutral-900 p-2 rounded-md ml-2 hover:bg-neutral-200 transition-colors'>
          Subscribe
        </button>
      </form>
    </section>
  )
}
