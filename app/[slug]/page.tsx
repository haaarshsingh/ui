import localFont from 'next/font/local'
import { FC } from 'react'
import MDX from './MDX'
import './index.css'
import Link from 'next/link'
import { FiCornerUpLeft } from 'react-icons/fi'
import posts from './posts'
import { notFound } from 'next/navigation'

const fira = localFont({
  src: [{ path: '../../fonts/fira/regular.woff2', weight: '400' }],
  variable: '--font-mono',
})

export const generateStaticParams = () =>
  posts().map((post) => ({ slug: post.slug }))

export default (({ params }) => {
  const post = posts().find((post) => post.slug === params.slug)
  if (!post) notFound()

  return (
    <section className={fira.variable}>
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
      <Link
        href='/writing'
        className='exclude flex h-8 items-center text-neutral-500'
      >
        <FiCornerUpLeft className='h-4 w-4' />
        <span className='ml-1.5 text-sm'>Index</span>
      </Link>
      {/* <Header
        title={post.metadata.title}
        date={format(post.metadata.publishedAt)}
        slug={params.slug}
      /> */}
      <article className='prose animate-children'>
        <MDX source={post.content} />
      </article>
    </section>
  )
}) as FC<{ params: { slug: string } }>
