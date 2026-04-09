import { Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { To } from 'react-router-dom'
import { useEffect, useState } from 'react'

import combinedLogo from '../assets/logo-wordmark-combined.png'
import combinedLogoLight from '../assets/logo-wordmark-combined_lighgr.png'

function LogoLockup({
  className = '',
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'footer'
}) {
  const logoSrc = variant === 'footer' ? combinedLogoLight : combinedLogo

  return <img src={logoSrc} alt='AssetScape' className={`w-auto object-contain ${className}`} />
}

const MAILTO = 'mailto:enquiries@assetscape.co.uk?subject=Enquiry%20from%20AssetScape%20website'

export function Footer() {
  return (
    <footer id='contact' className='mt-16 bg-neutral-900 text-white'>
      <div className='mx-auto max-w-6xl px-4 py-14 space-y-12'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <LogoLockup variant='footer' className='h-12 md:h-14' />
        </div>
        <div className='grid gap-10 md:grid-cols-3 text-sm'>
          <div className='space-y-3'>
            <h2 className='text-sm font-bold uppercase tracking-[0.3em] text-white'>Contact</h2>
            <ul className='space-y-2'>
              <li>
                <a className='hover:underline' href='mailto:enquiries@assetscape.co.uk'>
                  enquiries@assetscape.co.uk
                </a>
              </li>
              <li>
                <a className='hover:underline' href='tel:+441778422380'>
                  +44 (0)1778 422380
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h2 className='text-sm font-bold uppercase tracking-[0.3em] text-white'>Office</h2>
            <address className='not-italic leading-relaxed text-neutral-300'>
              24A The Square
              <br />
              Retford
              <br />
              DN22 6DQ
              <br />
              United Kingdom
            </address>
          </div>
          <div className='space-y-4'>
            <h2 className='text-sm font-bold uppercase tracking-[0.3em] text-white'>Get in touch</h2>
            <p className='text-neutral-300'>
              See how AssetScape can support your next project. Send us an email or call us to arrange a conversation.
            </p>
            <a
              href={MAILTO}
              className='inline-flex items-center rounded-full border border-white bg-white px-5 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-transparent hover:text-white'
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className='border-t border-white/10 pt-6 text-xs text-neutral-400 md:flex md:items-center md:justify-between'>
          <div>© {new Date().getFullYear()} AssetScape Limited. All rights reserved.</div>
          <div>Registered in England &amp; Wales.</div>
        </div>
      </div>
    </footer>
  )
}

export function Layout({ children }: { children: ReactNode }) {
  const navLinks: { label: string; to: To }[] = [
    { label: 'Home', to: '/' },
    { label: '3D Data Wrapper', to: '/3d-data-wrapper' },
    { label: 'Features', to: { pathname: '/', hash: '#features' } },
    { label: 'Projects', to: { pathname: '/', hash: '#projects' } },
    { label: 'Services', to: { pathname: '/', hash: '#services' } },
    { label: 'Contact', to: { pathname: '/', hash: '#contact' } },
  ]

  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  return (
    <div className='min-h-screen bg-white text-neutral-800'>
      <header className='sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='flex h-20 items-center justify-between gap-6'>
            <Link to='/' aria-label='AssetScape home' className='flex h-full items-center'>
              <LogoLockup className='h-12 md:h-14' />
            </Link>
            <div className='flex items-center gap-3'>
              <nav className='hidden md:flex items-center gap-5 text-sm font-medium text-neutral-700'>
                {navLinks.map((item) => (
                  <Link key={item.label} to={item.to} className='transition-colors hover:text-neutral-900'>
                    {item.label}
                  </Link>
                ))}
                <a
                  href={MAILTO}
                  className='inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-neutral-900'
                >
                  Get in touch
                </a>
              </nav>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-full border border-neutral-300 p-2 text-neutral-700 transition hover:border-neutral-500 hover:text-neutral-900 md:hidden'
                aria-label='Toggle navigation menu'
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                {mobileOpen ? (
                  <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true' fill='none' stroke='currentColor' strokeWidth={1.8}>
                    <path d='M6 6 18 18' />
                    <path d='M18 6 6 18' />
                  </svg>
                ) : (
                  <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true' fill='none' stroke='currentColor' strokeWidth={1.8}>
                    <path d='M4 7h16' />
                    <path d='M4 12h16' />
                    <path d='M4 17h16' />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {mobileOpen && (
            <div className='md:hidden border-t border-neutral-200 pb-6'>
              <nav className='flex flex-col gap-4 pt-4 text-sm font-medium text-neutral-700'>
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className='transition-colors hover:text-neutral-900'
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={MAILTO}
                  className='inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-neutral-900'
                  onClick={() => setMobileOpen(false)}
                >
                  Get in touch
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
      {children}
      <Footer />
    </div>
  )
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '')
      const scrollToTarget = () => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return true
        }
        return false
      }

      if (scrollToTarget()) return

      const timeout = window.setTimeout(() => {
        scrollToTarget()
      }, 120)

      return () => window.clearTimeout(timeout)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
