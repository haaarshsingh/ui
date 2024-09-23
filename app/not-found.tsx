import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404',
  description: 'Not found.',
}

export default () => (
  <header className='mt-16'>
    <h1>404—not found</h1>
    <p>
      If you were expecting something here, open an{' '}
      <a
        href='https://github.com/haaarshsingh/ui/issues/new'
        target='_blank'
        rel='noreferrer'
      >
        issue
      </a>
      .
    </p>
  </header>
)
