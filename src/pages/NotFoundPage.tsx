import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('AssetScape — Page not found')

  return (
    <section className='mx-auto max-w-3xl px-4 py-20 text-center'>
      <p className='text-sm font-semibold uppercase tracking-widest text-emerald-600'>404</p>
      <h1 className='mt-3 text-3xl font-semibold tracking-tight'>Page not found</h1>
      <p className='mt-4 text-base text-neutral-600'>
        Sorry, we couldn't find the page you're looking for. It may have been moved or removed.
      </p>
      <Link
        to='/'
        className='mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-neutral-900'
      >
        <span aria-hidden>←</span> Back to home
      </Link>
    </section>
  )
}
