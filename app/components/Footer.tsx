import Link from 'next/link'

export default () => {
  return (
    <footer className='border-t border-t-neutral-700 flex justify-center py-4'>
      <div className='w-content'>
        <span className='text-sm'>
          <a href='https://harshsingh.xyz'>Harsh Singh</a> 2024
        </span>
      </div>
      <Link href='#' className='text-sm'>
        Back to Top
      </Link>
    </footer>
  )
}
