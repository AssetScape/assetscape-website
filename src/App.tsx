import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import type { ReactNode, HTMLAttributes } from 'react'
import type { To } from 'react-router-dom'
import { useEffect, useState } from 'react'

import serviceConsultancyCover from './assets/ConsultancyCover.png'
import service3dCover from './assets/3DVisualisationCover.jpg'
import serviceDataCleansingCover from './assets/DataCleansingCover.jpg'
import serviceStrategicCover from './assets/StrategicAssetManagementCover.jpg'
import serviceCameraPlacementCover from './assets/CameraPlacementCover.jpg'
import serviceMobileDataCover from './assets/MobileDataCaptureCover.jpg'

import projectM3Cover from './assets/Project_M3_Cover.jpg'
import projectM3Screenshot1 from './assets/Project_M3_screenshot_1.png'
import projectM3Screenshot2 from './assets/Project_M3_screenshot_2.png'
import projectM3Screenshot3 from './assets/Project_M3_screenshot_3.png'
import projectM3Screenshot4 from './assets/Project_M3_screenshot_4.png'

import projectCctvCover from "./assets/Assessing the Suitability of Proposed CCTV Camera Sites Cover.jpg"
import projectCctvScreenshot1 from "./assets/Assessing the Suitability of Proposed CCTV Camera Sites screenshot 1.jpg"
import projectCctvScreenshot2 from "./assets/Assessing the Suitability of Proposed CCTV Camera Sites screenshot 2.jpg"
import projectCctvScreenshot3 from "./assets/Assessing the Suitability of Proposed CCTV Camera Sites screenshot 3.jpg"
import projectCctvScreenshot4 from "./assets/Assessing the Suitability of Proposed CCTV Camera Sites screenshot 4.jpg"

import projectHeTechCover from "./assets/Highways England Technology Cover.png"
import projectHeTechScreenshot1 from "./assets/Highways England Technology screenshot 1.png"
import projectHeTechScreenshot2 from "./assets/Highways England Technology screenshot 2.png"
import projectHeTechScreenshot3 from "./assets/Highways England Technology screenshot 3.png"
import projectHeTechScreenshot4 from "./assets/Highways England Technology screenshot 4.png"

import projectNhCcmtCover from "./assets/National Highways CCMT System Cover.png"
import projectNhCcmtScreenshot1 from "./assets/National Highways CCMT System screenshot 1.png"
import projectNhCcmtScreenshot2 from "./assets/National Highways CCMT System screenshot 2.png"
import projectNhCcmtScreenshot3 from "./assets/National Highways CCMT System screenshot 3.png"
import projectNhCcmtScreenshot4 from "./assets/National Highways CCMT System screenshot 4.png"

import projectNhRoadLightingCover from "./assets/National Highways Road Lighting Cover.jpg"
import projectNhRoadLightingScreenshot1 from "./assets/National Highways Road Lighting screenshot 1.jpg"
import projectNhRoadLightingScreenshot2 from "./assets/National Highways Road Lighting screenshot 2.jpg"
import projectNhRoadLightingScreenshot3 from "./assets/National Highways Road Lighting screenshot 3.jpg"
import projectNhRoadLightingScreenshot4 from "./assets/National Highways Road Lighting screenshot 4.jpg"

import projectNhDrainageCover from "./assets/National Highways Drainage Cover.jpg"
import projectNhDrainageScreenshot1 from "./assets/National Highways Drainage screenshot 1.jpg"
import projectNhDrainageScreenshot2 from "./assets/National Highways Drainage screenshot 2.jpg"
import projectNhDrainageScreenshot3 from "./assets/National Highways Drainage screenshot 3.jpg"
import projectNhDrainageScreenshot4 from "./assets/National Highways Drainage screenshot 4.jpg"

import combinedLogo from './assets/logo-wordmark-combined.png'
import combinedLogoLight from './assets/logo-wordmark-combined_lighgr.png'
import roadImg from './assets/road.png'
import railImg from './assets/rail.png'
import waterImg from './assets/water.png'
import heroVideo from './assets/AS_SHORT_720_optimized.mp4'
import heroImage from './assets/heroImage.jpg'

function ScrollToTop() {
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

function Layout({ children }: { children: ReactNode }) {
  const navLinks: { label: string; to: To }[] = [
    { label: 'Home', to: '/' },
    { label: 'Features', to: { pathname: '/', hash: '#features' } },
    { label: 'Services', to: { pathname: '/', hash: '#services' } },
    { label: 'Projects', to: { pathname: '/', hash: '#projects' } },
    { label: 'Documents', to: '/documents' },
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
                <Link
                  to={{ pathname: '/', hash: '#full-video' }}
                  className='inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-neutral-900'
                >
                  Full-length video
                </Link>
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
                <Link
                  to={{ pathname: '/', hash: '#full-video' }}
                  className='inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-neutral-900'
                  onClick={() => setMobileOpen(false)}
                >
                  Full-length video
                </Link>
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

function VideoHero() {
  const poster = heroImage
  const videoSrc = heroVideo

  return (
    <section className='relative'>
      <div className='relative h-[48vh] md:h-[70vh] overflow-hidden bg-black'>
        <video
          className='absolute inset-0 h-full w-full object-contain'
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={videoSrc} type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/35' />
        <div className='absolute inset-x-0 bottom-0 z-10 flex justify-center'>
          <div className='w-full rounded-t-xl bg-white/80 backdrop-blur px-4 py-3 md:px-6 md:py-4'>
            <h1 className='text-xl md:text-2xl font-semibold tracking-tight text-center'>
              Intelligent asset management for road, rail and water infrastructure
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

type SectionMarkerProps = {
  label: string
  as?: 'div' | 'h2' | 'h3' | 'h4' | 'h5'
} & HTMLAttributes<HTMLDivElement>

function SectionMarker({ label, as: Component = 'div', className = '', ...props }: SectionMarkerProps) {
  const markerClasses = [
    'flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={markerClasses} {...props}>
      <span aria-hidden className='hidden sm:block h-px flex-1 bg-neutral-200' />
      <span className='inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm'>
        <span aria-hidden className='h-2.5 w-2.5 rounded-full bg-emerald-500' />
        {label}
      </span>
      <span aria-hidden className='hidden sm:block h-px flex-1 bg-neutral-200' />
    </Component>
  )
}

type IconProps = { className?: string }

function IconCube({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z' />
      <path d='m4 7.5 8 4.5 8-4.5' />
      <path d='M12 12v9' />
    </svg>
  )
}

function IconNetwork({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='5' cy='12' r='2.2' />
      <circle cx='12' cy='5' r='2.2' />
      <circle cx='19' cy='12' r='2.2' />
      <circle cx='12' cy='19' r='2.2' />
      <path d='M7.1 11.2 10.4 6.7' />
      <path d='m13.6 6.7 3.3 4.5' />
      <path d='m7.1 12.8 3.3 4.5' />
      <path d='m13.6 17.3 3.3-4.5' />
    </svg>
  )
}

function IconSliders({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M7 4v8' />
      <path d='M7 16v4' />
      <path d='M12 4v4' />
      <path d='M12 12v8' />
      <path d='M17 4v12' />
      <path d='M17 18v2' />
      <circle cx='7' cy='13' r='2.4' />
      <circle cx='12' cy='9' r='2.4' />
      <circle cx='17' cy='16' r='2.4' />
    </svg>
  )
}

function IconShield({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 3 5 6v5.8c0 4.7 3 7.9 7 9.2 4-1.3 7-4.5 7-9.2V6Z' />
      <path d='M9.5 12.5 11.3 14.3 14.7 10.9' />
    </svg>
  )
}

function IconTarget({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='8.5' />
      <circle cx='12' cy='12' r='5.5' />
      <circle cx='12' cy='12' r='2.5' />
      <path d='M12 3v3' />
      <path d='M21 12h-3' />
      <path d='M12 21v-3' />
      <path d='M3 12h3' />
    </svg>
  )
}

function IconCompass({ className = 'h-10 w-10 text-emerald-600' }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='9' />
      <path d='m14.8 9.2-2.1 5.6-5.5 2.2 2.1-5.6Z' />
      <path d='M12 12 9.4 9.4' />
    </svg>
  )
}

function HomePage() {
  const services = [
    { title: 'Consultancy', slug: 'consultancy', img: serviceConsultancyCover },
    { title: '3D Visualisation', slug: '3d-visualisation', img: service3dCover },
    { title: 'Data Cleansing', slug: 'data-cleansing', img: serviceDataCleansingCover },
    { title: 'Strategic Asset Management', slug: 'strategic-asset-management', img: serviceStrategicCover },
    { title: 'Camera Placement – CCTV Module', slug: 'camera-placement', img: serviceCameraPlacementCover },
    { title: 'Mobile Data Capture', slug: 'mobile-data-capture', img: serviceMobileDataCover },
  ]

  const featuresBullets = [
    {
      h: 'Visualise your data in 3D',
      p: `On site, assets function in three dimensions. AssetScape reflects this reality by building realistic 3D scenes that transform raw data into a tangible and interactive asset management experience. These 3D scenes enable you to picture your assets fully embedded in their real-world environment and provide new perspectives that two-dimensional software solutions simply cannot offer.`,
      Icon: IconCube,
    },
    {
      h: 'From Local Nodes to National Networks',
      p: `AssetScape is more than an innovative asset management tool – it is a comprehensive asset management system. From day to day tasks, such as condition monitoring and assigning maintenance works, to longer term strategic planning, including asset replacement and renewal schemes, Assetscape has the capability to manage your assets through their whole lifecycle.`,
      Icon: IconNetwork,
    },
    {
      h: 'Flexible, Adaptable, Customisable',
      p: `AssetScape is designed to be suitable for any asset management task, from data cleansing and creating asset inventories, to new asset placement and monitoring existing assets. Optimise the system to meet your needs by customising tools, reorganising the user interface, altering asset models, changing the 3D scene visualisation and more.`,
      Icon: IconSliders,
    },
    {
      h: 'Take Control of your Data',
      p: `Whatever its type, source or format AssetScape effortlessly brings all kinds of data together into one easily navigable 3D environment. Exploit the powerful insights this delivers to harness the true potential of your data. Our versatile toolkit enables you to visualise, analyse, reorganise, prioritise and utilise the full spectrum of data at your disposal quickly and effectively.`,
      Icon: IconShield,
    },
    {
      h: 'From the Micro to the Macro',
      p: `Whether you need to interact with your data in micro or macro detail, AssetScape is designed to facilitate asset management on any scale. From exploring the placement of a single CCTV camera to managing the full asset inventory of a whole Area, AssetScape’s dynamic and fully customisable system can be adapted to suit any task, big or small.`,
      Icon: IconTarget,
    },
    {
      h: 'Simple, Usable, Practical',
      p: `Our aim is to simplify the complex, and this extends to our user interface. Our controls are uncomplicated and intuitive, and our innovative ‘Tools Frame’ provides easy access to AssetScape’s toolkit. AssetScape requires only minimal training and new users can be up and running within hours.`,
      Icon: IconCompass,
    },
  ]

  const projects = [
    { title: 'National Highways CCMT System', slug: 'nh-ccmt', cover: projectNhCcmtCover },
    { title: 'M3 Junction 2 to 4a Asset Verification Task', slug: 'm3-j2-4a', cover: projectM3Cover },
    { title: 'Assessing the Suitability of Proposed CCTV Camera Sites', slug: 'cctv-suitability', cover: projectCctvCover },
    { title: 'Highways England Technology', slug: 'highways-technology', cover: projectHeTechCover },
    { title: 'National Highways Road Lighting', slug: 'nh-road-lighting', cover: projectNhRoadLightingCover },
    { title: 'National Highways Drainage', slug: 'nh-drainage', cover: projectNhDrainageCover },
  ]

  return (
    <>
      <VideoHero />

      <section id='about' className='relative overflow-hidden'>
        <div className='mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center'>
          <div className='space-y-4'>
            <SectionMarker label='About' />
            <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>About AssetScape</h2>
            <p className='mt-4 text-base leading-relaxed'>
              By combining a multi-dimensional data management approach with our 3 dimensional graphics engine, we have created a unique product that finally brings asset and infrastructure management into the 21st century. AssetScape® is much more than an asset management system – it’s a “World Management System”.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-3 md:gap-4'>
            <img
              src={roadImg}
              alt='Road infrastructure visualisation'
              className='w-full h-28 md:h-40 object-cover rounded-lg'
            />
            <img
              src={railImg}
              alt='Rail infrastructure visualisation'
              className='w-full h-28 md:h-40 object-cover rounded-lg'
            />
            <img
              src={waterImg}
              alt='Water infrastructure visualisation'
              className='w-full h-28 md:h-40 object-cover rounded-lg'
            />
          </div>
        </div>
      </section>

        <section className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-semibold'>Simplify the complex</h3>
            <p className='mt-2 text-sm leading-relaxed'>
              Using AssetScape is simple and intuitive, meaning newcomers can be up and running with very little training.
              AssetScape specialises in bringing data together in one place and presenting it in a useful, informative and
              manageable way. Trying to pull together data from multiple systems and struggling to build a clear picture of what
              is going on is a thing of the past. AssetScape effortlessly brings your data together 'under one roof' and enables
              you to perform complex tasks, such as data validation, making asset placement decisions and managing maintenance
              schemes, with ease.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Bring data to life</h3>
            <p className='mt-2 text-sm leading-relaxed'>
              As a 'World Management System', AssetScape integrates. It brings together data from a range of sources, including
              LiDAR, external databases, shapefiles and mapping, and allows you to visualise everything clearly. Whether the
              data comes from several systems or surveys, is provided by you or sourced openly, AssetScape integrates it all to
              build a functional and dynamic 3D asset management environment.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Optimise and Innovate</h3>
            <p className='mt-2 text-sm leading-relaxed'>
              AssetScape is aimed at asset management professionals looking to optimise their asset management systems and
              utilise the full potential of their data. Use our system to complete existing tasks more efficiently and to explore
              new and innovative ways to take advantage of the full spectrum of data available to you. AssetScape has the capability to
              transform the way you approach asset management.
            </p>
          </div>
        </div>
      </section>

      <section id='features' className='mx-auto max-w-6xl px-4 py-14'>
        <div className='space-y-3 text-center md:text-left'>
          <SectionMarker label='Features' />
          <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>Platform highlights</h2>
          <p className='text-sm text-neutral-600'>Explore the capabilities that transform complex, spatial asset datasets into a unified operational view.</p>
        </div>
        <div className='mt-8 grid md:grid-cols-2 gap-8'>
          {featuresBullets.map((f) => (
            <div key={f.h} className='flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm'>
              <div className='shrink-0'>
                <f.Icon className='h-11 w-11 text-emerald-600' />
              </div>
              <div>
                <h3 className='font-semibold'>{f.h}</h3>
                <p className='mt-2 text-sm leading-relaxed text-neutral-700'>{f.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id='services' className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <div className='space-y-3 text-center md:text-left'>
            <SectionMarker label='Services' />
            <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>Specialist services</h2>
            <p className='text-sm text-neutral-600'>From data capture to in-depth analysis, our team supports every stage of the asset lifecycle.</p>
          </div>
          <div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((s) => (
              <Link
                key={s.title}
                to={`/services/${s.slug}`}
                className='group block rounded-2xl overflow-hidden border border-neutral-200 bg-white'
              >
                <div className='aspect-[16/9] overflow-hidden'>
                  <img src={s.img} alt={s.title} className='w-full h-full object-cover group-hover:scale-105 transition' />
                </div>
                <div className='p-4'>
                  <h3 className='font-medium group-hover:underline'>{s.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id='projects' className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <h2 className='text-2xl font-semibold tracking-tight'>Projects</h2>
          <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className='group block rounded-2xl overflow-hidden border border-neutral-200 bg-white'>
                <div className='aspect-[16/9] overflow-hidden'>
                  <img src={p.cover} alt={p.title} className='w-full h-full object-cover group-hover:scale-105 transition' />
                </div>
                <div className='p-4'>
                  <h3 className='font-medium leading-snug group-hover:underline'>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Judge's quote without heading */}
      <section className='mx-auto max-w-6xl px-4 py-14'>
        <figure className='rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12'>
          <blockquote className='text-xl leading-relaxed text-neutral-800 italic md:text-xl'>
            “This is a very elegant approach to solving a real‑world problem. The innovation is highly transferrable and helps asset managers to manage their assets more effectively, and with greater accuracy. This is a promising innovation which has the potential to transform the way data for a major project is mapped and configured.”
          </blockquote>
          <figcaption className='mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-600 md:text-base'>
            CIOB International innovation &amp; research award - Judge's comments
          </figcaption>
        </figure>
      </section>

        {/* Full-length promo video section */}
        <section id='full-video' className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <h2 className='text-xs font-semibold tracking-tight'> </h2>
          <div className='mt-6 aspect-video w-full rounded-xl overflow-hidden border border-neutral-200'>
            <iframe
              loading='lazy'
              className='w-full h-full'
              src='https://player.vimeo.com/video/1135808614?title=0&byline=0&portrait=0'
              title='AssetScape promo'
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
              allowFullScreen
            ></iframe>
          </div>
          <div className='mt-6 flex justify-center'>
            <a
              className='inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-white hover:text-neutral-900'
              href='mailto:enquiries@assetscape.co.uk?subject=Please%20can%20we%20arrange%20a%20demo%3F'
            >
              Request a demo
            </a>
          </div>
        </div>
      </section>

    </>
  )
}

type Section = { h?: string; p: string | string[]; image?: string }
type DetailPageProps = {
  title: string
  subtitle?: string
  sections: Section[]
  images?: string[]
  backTo: To
  backLabel: string
  markerLabel?: string
}

function DetailPage({ title, subtitle, sections, images, backTo, backLabel, markerLabel }: DetailPageProps) {
  const hasSectionImages = sections.some((section) => Boolean(section.image))

  // Normalise the list of page-level images (used as a fallback when no section images exist)
  const imageList = hasSectionImages ? [] : images ?? []

  // Decide which image each section should use:
  // 1) Prefer the section's own image (e.g. project screenshots)
  // 2) If there is no section image, consume the next image from imageList
  // This runs once so numbering stays consistent.
  const sectionImageSources: (string | undefined)[] = []
  let imageCursor = 0

  sections.forEach((section) => {
    if (section.image) {
      sectionImageSources.push(section.image)
    } else if (imageCursor < imageList.length) {
      sectionImageSources.push(imageList[imageCursor])
      imageCursor += 1
    } else {
      sectionImageSources.push(undefined)
    }
  })

  const totalSectionImages = sectionImageSources.filter(Boolean).length
  const totalScreens = totalSectionImages

  let sectionImageCount = 0

  return (
    <section className='mx-auto max-w-5xl px-4 py-10'>
      <Link
        to={backTo}
        className='inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-900'
      >
        {backLabel}
      </Link>

      {markerLabel && (
        <div className='mt-6 sm:mt-8'>
          <SectionMarker label={markerLabel} />
        </div>
      )}

      <div className='mt-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8'>
        <h1 className='text-3xl font-semibold tracking-tight'>{title}</h1>
        {subtitle && <p className='mt-3 text-base text-neutral-700'>{subtitle}</p>}
      </div>

      <div className='mt-8 space-y-6 sm:mt-10'>
        {sections.map((s, i) => {
          const sectionImage = sectionImageSources[i]
          const currentImageNumber = sectionImage ? ++sectionImageCount : null

          return (
            <article
              key={i}
              className='flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start'
            >
              <div className='space-y-3'>
                {s.h && (
                  <SectionMarker
                    as='h3'
                    label={s.h}
                    className='text-[0.65rem] tracking-[0.32em] sm:text-xs'
                  />
                )}

                {Array.isArray(s.p) ? (
                  <div className='space-y-2 text-sm text-neutral-800 sm:text-base'>
                    {s.p.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className='text-sm text-neutral-800 sm:text-base'>{s.p}</p>
                )}
              </div>

              {sectionImage && (
                <div className='overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 p-2 shadow-inner lg:ml-auto lg:w-full'>
                  <img
                    src={sectionImage}
                    alt={
                      currentImageNumber
                        ? `${title} screenshot ${currentImageNumber} of ${totalScreens}`
                        : title
                    }
                    className='h-full w-full rounded-xl object-cover'
                  />
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id='contact' className='mt-16 bg-neutral-900 text-white'>
      <div className='mx-auto max-w-6xl px-4 py-14 space-y-12'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <LogoLockup variant='footer' className='h-12 md:h-14' />
          <p className='max-w-xl text-sm text-neutral-300'>
            
          </p>
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
          <div className='space-y-3'>
            <h2 className='text-sm font-bold uppercase tracking-[0.3em] text-white'>GET IN TOUCH</h2>
            <p className='text-neutral-300'>
              See how AssetScape can support your next project.
              <br />
              <br />
              Send us an email or call us to set up a session to see how we can support your asset management needs.
            </p>
          </div>
        </div>
        <div className='border-t border-white/10 pt-6 text-xs text-neutral-400 md:flex md:items-center md:justify-between'>
          <div>© 2025 AssetScape Limited. All rights reserved.</div>
          <div>Registered in England & Wales.</div>
        </div>
      </div>
    </footer>
  )
}

// Projects
const P_M3 = {
  title: 'M3 Junction 2 to 4a Asset Verification Task',
  subtitle:
    'Working for WSP and Balfour Beatty, we undertook the task of correctly identifying and recording every asset on the newly rebuilt section of the M3 between junctions 2 and 4a.',
  sections: [
    {
      h: 'Background and objectives',
      p: 'Working with WSP and Balfour Beatty on behalf of National Highways, AssetScape was tasked with confirming the location, type and status of each highway asset and reconciling it with legacy records so the upgraded corridor could be handed over with confidence.',
      image: projectM3Screenshot1,
    },
    {
      h: 'Delivery approach',
      p: 'AssetScape coordinated multidisciplinary teams to validate inventory items, resolve discrepancies and progress approvals through structured auditing and dashboards.',
      image: projectM3Screenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'Mapped aerial LiDAR, orthographic imagery, Google Street View and inherited inventory data within AssetScape.',
        'Identified nearly 45 asset categories using a bespoke identification manual and subject-matter support.',
        'Tracked acceptance, additions, comments and alerts to maintain a full audit trail of change.',
      ],
      image: projectM3Screenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Delivered an assured asset inventory covering every item on the upgraded M3 corridor between junctions 2 and 4a.',
        'Integrated verified data directly into the client catalogue, with evidence packs supporting National Highways assurance gates.',
      ],
      image: projectM3Screenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}

// CCTV
const P_CCTV = {
  title: 'Assessing the Suitability of Proposed CCTV Camera Sites',
  subtitle: 'Clients use AssetScape to assess the suitability of proposed CCTV camera sites, eliminating the need for many site visits.',
  sections: [
    {
      h: 'Background and objectives',
      p: 'AssetScape supported National Highways delivery partners who needed to validate proposed camera positions for strategic road network upgrades without repeated site visits, accelerating approvals for new roadside CCTV coverage.',
      image: projectCctvScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: [
        'Configured refined mobile and aerial LiDAR, OS MasterMap, orthographic imagery and Google Street View into a navigable 3D world.',
        'Applied AssetScape Line of Sight tooling with camera templates, adjustable settings and interactive assets.',
        'Generated polar imagery outputs showing percentage visibility, screen height and depth for each location.',
      ],
      image: projectCctvScreenshot2,
    },
    {
      h: 'Technical detail',
      p: 'Teams interrogate corridors virtually, overlaying proposed equipment with existing infrastructure to confirm visibility, mounting options and power connectivity before installation.',
      image: projectCctvScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Line-of-sight analytics documented coverage rationale for scheme reviews and safety cases.',
        'New analysts achieved productive assessments after a few hours of onboarding, supporting nationwide roll-out.',
      ],
      image: projectCctvScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}

// HE Tech
const P_HE_Tech = {
  title: 'Highways England Technology',
  subtitle: 'Data cleansing for 25,000 technology assets for the NorthEast RCC Technology Area',
  sections: [
    {
      h: 'Background and objectives',
      p: 'Highways England’s technology team required sub-metre accurate locations and condition intelligence to underpin operations and maintenance contracts across more than 25,000 roadside assets.',
      image: projectHeTechScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: 'AssetScape orchestrated survey outputs and stakeholder reviews, running a repeatable workflow that digitised equipment, reconciled changes and secured approvals before publishing updates.',
      image: projectHeTechScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'Combined AVIS and OS imagery, LiDAR point clouds and OS mapping within a tailored AssetScape schema.',
        'Applied point-cloud feature recognition and 3D visualisation to digitise equipment to within less than a metre.',
        'Implemented structured processing methodology, audit protocols and output specifications for downstream systems.',
      ],
      image: projectHeTechScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Produced a cleansed and reconciled dataset for more than 25,000 roadside technology assets across the North East RCC.',
        'Delivered assurance packs with traceable edits and review history, enabling technology service providers to plan interventions using a single, trusted source of asset data.',
      ],
      image: projectHeTechScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}

// New placeholder projects
const P_NH_CCMT = {
  title: 'National Highways CCMT System',
  subtitle: 'A configurable platform supporting Contract Completion and Handback workflows at scale.',
  sections: [
    {
      h: 'Background and objectives',
      p: [
        'Private Finance Initiative contracts fund and deliver public assets through private capital. Design, Build, Finance and Operate companies hold concessions on parts of the Strategic Road Network. Handback is the process at the end of a concession when the operator returns the asset to the authority in an agreed condition with defined residual life and evidence.  ',
        'The Contract Completion Management Toolkit supports Handback across eight DBFO schemes. It holds about 1,100 structures, 160,000 other assets and 2,900 km of pavements in one connected platform used by National Highways, DBFOs and advisers. More than ten organisations and over one hundred named users work to a common process with an audit trail. The system aligns inventory, condition, assessments, evidence and decisions so teams can agree what exists, where it is, what state it is in and what remains to be done.  ',
        'The brief was a 3D representation of the real world so the client could manage every asset and element through Handback. AssetScape establishes one version of the truth by collating the inventory and verifying it so teams can confirm what and where, reconcile conflicts and bring the inventory to a handover-ready state early in the programme. ',
      ],
      image: projectNhCcmtScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: [
        'AssetScape connects client and third-party data and renders it in 3D along the linear network. In CCMT we used existing base layers and aligned incoming sources without custom modelling so teams could work in one place. CCMT runs the end-to-end process on a single source of truth. Teams plan and track work, attach evidence to assets, resolve RFIs, and manage decisions and documents. Users reached productive use after a few hours. We co-designed the workflow with National Highways and DBFO users and adjusted it in short cycles. The platform accepts new steps, rules and screens without rebuild. ',
        'Teams operate at the level needed for the task. They group assets by route, chainage, type or ownership, record one decision for the group and apply exceptions where evidence differs. Each decision links to the asset, location, evidence and user, with a full timeline for audit. The mobile solution feeds field photos, notes and measurements straight into CCMT with the correct links and time stamp. Users scan corridors in 3D, open records and progress items, which reduces site visits. ',
      ],
      image: projectNhCcmtScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'AssetScape loaded LiDAR, mapping, imagery, Street View, source databases, inventory and condition data, and evidence packs from National Highways and DBFOs. Scenes auto-load from these connected sources, which cuts effort to create and maintain datasets. Data flows to Tableau Online so programme leads see progress by route and asset class with current throughput, blockers and gaps. ',
        'CCMT includes tools for assessment. The road markings module uses machine learning on downward-facing camera images to build a dataset, classify defects and drive responses. The structures 3D viewer supports element-level inspection, defect review and capture of observations and comments, all tied to the correct component and location. TRACS Pavement Viewer aligns pavement data to the route with high-definition photo review. ',
        'Automated data verification cross-checks inventories, surveys and works records so conflicts can be resolved with a recorded decision on the item. Rule-based assessment reduces manual effort and focuses specialists on items that matter. For example, pavement construction matching compares lane parameters and proposes outcomes that users can accept or amend, with the audit trail noting the basis. Cross-mapping links data down to element level and back to the linear reference and contract record, while the platform keeps connections to client and supplier systems and can incorporate new AI methods as they mature. ',
      ],
      image: projectNhCcmtScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Route and structures reviews occur online which reduces site visits. Evidence indicates a near 50 percent reduction in repeat site visits on sampled routes within the first three years.  ',
        'Evidence packs are attached to the record at the right location and time which moves milestone evidence pack creation from days to minutes once teams adopt the workflow.  ',
        'Decision cycles shorten because RFIs, comments and files sit on the same record and users work to one version of the truth.  ',
        'Required fields, validation and an audit trail cut rework and remove duplicate uploads, submissions and lost records as users operate from the same source.  ',
        'Tableau Online reporting shows progress, blockers and gaps by route and asset class so managers act on current data and can convert insights into actions. ',
      ],
      image: projectNhCcmtScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}

const P_NH_RL = {
  title: 'National Highways Road Lighting',
  subtitle: 'Inventory verification and condition intelligence for lighting assets.',
  sections: [
    {
      h: 'Background and objectives',
      p: 'National Highways asked AssetScape to reconcile disparate lighting records and quantify asset condition across the strategic road network to steer renewal and maintenance planning.',
      image: projectNhRoadLightingScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: 'We coordinated regional data owners and contractors, pushing updates through agreed workflows so the shared inventory reflected verified changes and commentary.',
      image: projectNhRoadLightingScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'Fused LiDAR, night-time imagery, existing inventory feeds and site records within AssetScape.',
        'Applied rule-based checks and technician review to validate asset attributes and condition states.',
        'Structured outputs for export into contractor maintenance and design systems.',
      ],
      image: projectNhRoadLightingScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Delivered a verified lighting inventory with condition intelligence to guide renewal and maintenance planning.',
        'Produced prioritised intervention lists backed by traceable evidence packs and defensible data for funding bids.',
      ],
      image: projectNhRoadLightingScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}

const P_NH_DR = {
  title: 'National Highways Drainage',
  subtitle: 'Drainage asset identification, verification and risk insights.',
  sections: [
    {
      h: 'Background and objectives',
      p: 'National Highways required consistent records for drainage assets to support risk-based maintenance and flooding mitigation across the network.',
      image: projectNhDrainageScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: 'AssetScape led a coordinated verification campaign, aligning survey outputs and stakeholder reviews so drainage data could be trusted for programme planning.',
      image: projectNhDrainageScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'Led imagery-based identification supported by LiDAR, survey data and existing schema definitions.',
        'Reconciled and aligned records to National Highways drainage data structures and location referencing.',
        'Embedded QA/QC with audits, comment reviews and acceptance workflows inside AssetScape.',
      ],
      image: projectNhDrainageScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Produced a complete drainage asset dataset aligned to National Highways inventory standards.',
        'Enabled regional teams to target high-risk assets with reliable condition and connectivity information, supported by export-ready files and audit packs.',
      ],
      image: projectNhDrainageScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}

const SERVICE_BACK_TO: To = { pathname: '/', hash: '#services' }
const SERVICE_BACK_LABEL = '← Back to Services'

const S_Consultancy = {
  title: 'Consultancy',
  subtitle: 'Creating and deploying bespoke solutions to unlock your data',
  images: [serviceConsultancyCover],
  sections: [
    {
      h: 'Section 1 – Introduction',
      p: [
        'Building software and developing utilities that integrate data and or connect to existing systems.  ',
        'Providing a wrapper to enable users to make better use of data for analysis and assessment.  ',
        'Creating tools that enable users to harness the latest technology that benefit your business delivery. ',
      ],
    },
    {
      h: 'Section 2 – Capabilities',
      p: [
        'Creative thinkers, utilising the latest technology and AssetScape’s approach to developing solutions that deliver. ',
        'Provide ad-hoc support to clients managing data including asset, operational and condition datasets. ',
        'Create innovative solutions, working with clients to deploy robust solutions that meet the needs of end users. ',
        'Deliver flexible solutions that can be configured, added to and is future proofed. ',
        'Provide specific data and systems solutions advice and support to get the best out of your data – Cost effective solutions that are cost effective. ',
      ],
    },
    {
      h: 'Section 3 – Delivery',
      p: [
        'AssetScape’s vision is to provide clients with practical tools that enable them to do the job quicker, easier and to a higher quality. ',
        'Over the last 10 years, AssetScape has been successfully deploying solutions and supported clients with ad-hoc support, data mining, data cleansing, data analytics that includes the development and implementation of small utilities through to large scale systems. ',
        'Our team are experienced team having knowledge of the domain, including asset datasets, systems architecture and understanding the end user requirements. This also includes solutions driven engineers who can get the most out of the digital technology, monitoring and using new technologies as appropriate.  ',
        'We strive for innovative solutions and constantly are developing and testing are ideas to bring to market. Examples of this can be seen in the delivery of innovative utilities such as CCTV, Structure viewer and Road Markings Analysis Tool.  ',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}

const S_3D = {
  title: '3D Visualisation',
  subtitle: 'Build immersive, navigable 3D scenes that place every asset in context.',
  images: [service3dCover],
  sections: [
    {
      h: 'Section 1 – Integrated data sources',
      p: [
        'Combine LiDAR, photogrammetry and BIM to construct true-to-life environments.',
        'Overlay mapping, CAD and attribute data with precise georeferencing.',
        'Blend aerial and terrestrial imagery for full corridor coverage.',
        'Used as a wrapper for existing systems and datasets or standalone system.',
      ],
    },
    {
      h: 'Section 2 – Capabilities',
      p: [
        'Interrogate assets with measurement, slicing and annotation tools.',
        'Switch viewpoints instantly to support design, maintenance and stakeholder reviews.',
        'Export presentation-ready imagery and video flythroughs.',
      ],
    },
    {
      h: 'Section 3 – Delivery',
      p: [
        'AssetScape tailors visualisations to your asset classes and workflows, ensuring key information is surfaced with minimal navigation.  ',
        'Can be used for infrastructure asset management, flooding assessments, line of sight assessments and much more. ',
        'Easy to create scenes and overlay / link datasets to the scene. Scenes are auto created, so need for labour intensive scene building using many resources.  ',
        'Intuitive Ui to manage scenes including route manager to build specific routes of interest. Group assets and operational enquiries around the route to enable efficient coordination and management within AssetScape’s platform. ',
        'Create routes that are 100’s km’s in length once - travel along the route in a car, train, boat or fly through looking at topography, vegetation, assets, operational data (documents, queries, flags, risk areas etc). ',
        'Note: Scenes are as accurate as the data loaded. Can be mm precise depending on the quality of the LiDAR, Ortho-imagery. Scene can be built with accurate data, open-source data and merged automatically. ',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}

const S_DataCleansing = {
  title: 'Data Cleansing',
  subtitle: 'Reconcile inventories and records into a single dependable dataset.',
  images: [serviceDataCleansingCover],
  sections: [
    {
      h: 'Section 1 – Approach',
      p: [
        'AssetScape data cleansing modules 2D and 3D versions -  ',
        '2D - Utilises mapping and imagery to cleanse data in a 2D environment  ',
        ' ',
        'The system enables the process team to create, verify and audit assets in a specific data cleansing module. The module enables the Project manager to track progress, answer questions and sign off every asset. All decision is tracked as part of the timeline feature, so can be reviewed at any time.',
        'The system enables users to:',
        'Review existing schemas and align to AssetScape taxonomies.',
        'Blend automated validation with expert QA/QC for critical assets.',
        'Capture commentary, discrepancies and approvals in an auditable log.',
        'Client system emulators checkers – Create to meet project requirements',
        'The module enables the Project manager to track progress, answer questions and sign off every asset. All decision is tracked as part of the timeline feature, so can be reviewed at any time.',
        'Innovative approach deployed via AssetScape platform to manage data collation, cleansing using 3D. All other approaches utilised 2D ArcView based solutions with no DB connectivity of assets and a tile-based solution. AssetScape can provide a ’World Management System’ using our platform. This enables connectivity of assets throughout the project area, enabling the process team to dynamically work on all parts of the network in line with delivery plan.',
        '3D - Utilises LiDAR, DTM, mapping and imagery to cleanse data in a 3D environment',
        'Unique 3D view allows users to integrate topography into the data cleansing process. Assets float in 3D aspect to make it clearer when for multi-layer merging.',
        'Provision of mobile solution connected to AssetScape’s instance of the project on request – on-site verification and additional surveying.',
      ],
    },
    {
      h: 'Section 2 – Data inputs',
      p: [
        'Historic inventories, spreadsheets and databases.',
        'Site observations, as-built drawings and survey outputs.',
        'Feedback from maintainers and operations teams.',
      ],
    },
    {
      h: 'Section 3 – Outcome',
      p: [
        ' ',
        'Deliver a cleansed, schema-compliant dataset ready for import into AMS, GIS or BIM platforms.',
        'Clients provided with access to live outputs on progress via Power BI or Tableau reporting tools.',
        'Create validated data loaders and scripts to ensure compliant data was loaded back to host system.',
        'Fully auditable data cleansing datasets that can be reviewed, intergrated and used to maintain or add to in the future.',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}

const S_Strategic = {
  title: 'Strategic Asset Management',
  subtitle: 'Translate asset intelligence into clear investment decisions.',
  images: [serviceStrategicCover],
  sections: [
    {
      h: 'Section 1 – Focus areas',
      p: [
        'Lifecycle planning aligned to risk and performance utilising links to Decision Support Tools.',
        'Scenario modelling with configurable scoring and weighting.',
        'Portfolio dashboards for leadership reporting.',
      ],
    },
    {
      h: 'Section 2 – How AssetScape helps',
      p: [
        'Spatialise programme data to highlight hotspots and dependencies.',
        'Blend condition, utilisation and risk indicators into a single workspace.',
        'Export ready-made packs for governance and funding boards.',
      ],
    },
    {
      h: 'Section 3 – Result',
      p: [
        ' ',
        'Empower teams with a transparent evidence base for investment planning and prioritisation.',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}

const S_CameraPlacement = {
  title: 'Camera Placement – CCTV Module',
  subtitle: 'Design effective CCTV schemes using virtual line-of-sight analysis.',
  images: [serviceCameraPlacementCover],
  sections: [
    {
      h: 'Section 1 – Inputs',
      p: [
        '3D corridor models generated from LiDAR, imagery and mapping.',
        'Template libraries covering fixed, PTZ and specialist camera hardware.',
        'Digital terrain data to capture gradients, cuttings and structures.',
      ],
    },
    {
      h: 'Section 2 – Analysis',
      p: [
        'Simulate line-of-sight and coverage envelopes with adjustable mounting heights.',
        'Compare alternative pole and bracket locations inside the 3D world.',
        'Produce visibility heatmaps and polar plots for stakeholders.',
        'CCTV Module includes template for carrying out technical assessment in accordance with standards for design.',
      ],
    },
    {
      h: 'Section 3 – Outcome',
      p: [
        'Generate evidence packs and camera schedules to accelerate approvals and installation.',
        'No onsite requirement - “survey once, use many times”',
        'Develop many designs and options for approval.',
        'Safe environment to design – No on-site surveys required',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}

const S_MobileData = {
  title: 'Mobile Data Capture',
  subtitle: 'Keep inventories current.',
  images: [serviceMobileDataCover],
  sections: [
    {
      h: 'Section 1 – Capabilities',
      p: [
        'High-resolution imagery synchronised with GNSS positioning. ',
        'Highly configurable UI – Create for user, assets, inspection types. ',
        'Intuitive UI design to enable quick and easy access to data and logging – Set up what you need to see before you survey. ',
        'Vehicle and backpack-based capture options with calibrated sensors. ',
        'Optional - Vehicle and backpack-based capture options with calibrated sensors. And LiDAR integration for dense point-cloud creation. ',
      ],
    },
    {
      h: 'Section 2 – Workflow',
      p: [
        'Plan survey routes, tasks and naming conventions inside AssetScape.',
        'Capture observations with configurable forms and prompts.',
        'Upload data to the platform for validation, enrichment and publishing.',
        'Wrap around solution for existing asset management systems – Enhanced functionality and use, moving away from windows-based screen layouts.',
      ],
    },
    {
      h: 'Section 3 – Deliverables',
      p: [
        'Structured datasets, QA reports and viewer-ready scenes ready for downstream systems.',
        'Connectivity via app to AssetScape and other systems.',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}

function DocumentsPage() {
  return (
    <section className='mx-auto max-w-3xl px-4 py-10'>
      <h1 className='text-3xl font-semibold tracking-tight'>Documents</h1>
      <p className='mt-6 text-base text-neutral-700'>
        Document downloads are temporarily unavailable while we refresh the library. Please contact us if you need a copy of a
        specific document in the meantime.
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

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout><HomePage /></Layout>} />
        <Route path='/documents' element={<Layout><DocumentsPage /></Layout>} />
        <Route path='/projects/m3-j2-4a' element={<Layout><DetailPage {...P_M3} /></Layout>} />
        <Route path='/projects/cctv-suitability' element={<Layout><DetailPage {...P_CCTV} /></Layout>} />
        <Route path='/projects/highways-technology' element={<Layout><DetailPage {...P_HE_Tech} /></Layout>} />
        <Route path='/projects/nh-ccmt' element={<Layout><DetailPage {...P_NH_CCMT} /></Layout>} />
        <Route path='/projects/nh-road-lighting' element={<Layout><DetailPage {...P_NH_RL} /></Layout>} />
        <Route path='/projects/nh-drainage' element={<Layout><DetailPage {...P_NH_DR} /></Layout>} />
        <Route path='/services/consultancy' element={<Layout><DetailPage {...S_Consultancy} /></Layout>} />
        <Route path='/services/3d-visualisation' element={<Layout><DetailPage {...S_3D} /></Layout>} />
        <Route path='/services/data-cleansing' element={<Layout><DetailPage {...S_DataCleansing} /></Layout>} />
        <Route path='/services/strategic-asset-management' element={<Layout><DetailPage {...S_Strategic} /></Layout>} />
        <Route path='/services/camera-placement' element={<Layout><DetailPage {...S_CameraPlacement} /></Layout>} />
        <Route path='/services/mobile-data-capture' element={<Layout><DetailPage {...S_MobileData} /></Layout>} />
      </Routes>
    </HashRouter>
  )
}
