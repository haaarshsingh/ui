import localFont from 'next/font/local'
import { FC } from 'react'
import MDX from './MDX'
import Link from 'next/link'
import posts from './posts'
import { notFound } from 'next/navigation'
import { LuCornerUpLeft } from 'react-icons/lu'
import clsx from 'clsx'
import './index.css'
import { Copy } from './components/Copy'

const fira = localFont({
  src: [{ path: '../fonts/fira.woff2', weight: '400' }],
  variable: '--font-mono',
})

const format = (date: string) => {
  const [year, month, day] = date.split('-')
  return `${month}/${day}/${year.slice(2)}`
}

export const generateStaticParams = () =>
  posts().map((post) => ({ slug: post.slug }))

export default (({ params }) => {
  const post = posts().find((post) => post.slug === params.slug)
  if (!post) notFound()

  return (
    <div className={clsx(fira.variable, 'mt-16')}>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://harshsingh.xyz${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `https://harshsingh.xyz/writing/${post.slug}`,
            author: { '@type': 'Person', name: 'Harsh Singh' },
          }),
        }}
      />
      <header>
        <Link
          href='/writing'
          className='exclude absolute -mt-1 flex h-8 items-center text-neutral-500 -ml-28'
        >
          <LuCornerUpLeft className='h-4 w-4' />
          <span className='ml-1.5'>UI</span>
        </Link>
        <div className='flex justify-between items-center'>
          <div>
            <h1>{post.metadata.title}</h1>
            <p className='text-neutral-500'>
              {format(post.metadata.publishedAt)}
            </p>
          </div>
          <Copy slug={params.slug} />
        </div>
      </header>
      <article className='prose animate-children'>
        <MDX source={post.content} />
      </article>
    </div>
  )
}) as FC<{ params: { slug: string } }>
