import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { To } from 'react-router-dom'
import { useEffect } from 'react'

import combinedLogo from './assets/logo-wordmark-combined.png'
import combinedLogoLight from './assets/logo-wordmark-combined_lighgr.png'
import roadImg from './assets/road.png'
import railImg from './assets/rail.png'
import waterImg from './assets/water.png'
import heroVideo from './assets/AS_SHORT_720_optimized.mp4'

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

  return (
    <div className='min-h-screen bg-white text-neutral-800'>
      <header className='sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='flex h-20 items-center justify-between gap-6'>
            <Link to='/' aria-label='AssetScape home' className='flex h-full items-center'>
              <LogoLockup className='h-12 md:h-14' />
            </Link>
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
          </div>
        </div>
      </header>
      {children}
      <Footer />
    </div>
  )
}

function VideoHero() {
  const poster = 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/18.jpg'
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
        <div className='relative z-10 mx-auto max-w-6xl px-4 h-full flex items-end pb-8'>
          <div className='rounded-xl bg-white/80 backdrop-blur p-4 md:p-6'>
            <h1 className='text-2xl md:text-3xl font-semibold tracking-tight'>
              Intelligent asset management for road, rail and water infrastructure.
            </h1>
            <p className='mt-2 text-sm md:text-base'>
              We combine spatial data, LiDAR, imagery and records into a single 3D environment so teams can see context, make decisions and maintain assets with less site time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionMarker({ label }: { label: string }) {
  return (
    <div className='flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500'>
      <span aria-hidden className='hidden sm:block h-px flex-1 bg-neutral-200' />
      <span className='inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm'>
        <span aria-hidden className='h-2.5 w-2.5 rounded-full bg-emerald-500' />
        {label}
      </span>
      <span aria-hidden className='hidden sm:block h-px flex-1 bg-neutral-200' />
    </div>
  )
}

function HomePage() {
  const heroImg1 = 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/35.jpg'
  const heroImg2 = 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/18.jpg'
  const heroImg3 = 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/20.jpg'

  const services = [
    { title: '3D Visualisation', slug: '3d-visualisation', img: heroImg3 },
    { title: 'Data Cleansing', slug: 'data-cleansing', img: heroImg1 },
    { title: 'Strategic Asset Management', slug: 'strategic-asset-management', img: heroImg2 },
    { title: 'Camera Placement', slug: 'camera-placement', img: heroImg1 },
    { title: 'RouteWatcher', slug: 'routewatcher', img: heroImg2 },
    { title: 'Mobile Data Capture', slug: 'mobile-data-capture', img: heroImg3 },
  ]

  const featuresBullets = [
    {
      h: 'Visualise your data in 3D',
      p: `On site, assets function in three dimensions. AssetScape reflects this reality by building realistic 3D scenes that transform raw data into a tangible and interactive asset management experience. These 3D scenes enable you to picture your assets fully embedded in their real-world environment and provide new perspectives that two-dimensional software solutions simply cannot offer.`,
    },
    {
      h: 'From Local Nodes to National Networks',
      p: `AssetScape is more than an innovative asset management tool – it is a comprehensive asset management system. From day to day tasks, such as condition monitoring and assigning maintenance works, to longer term strategic planning, including asset replacement and renewal schemes, AssetScape enables you to manage your assets through their whole lifecycle.`,
    },
    {
      h: 'Flexible, Adaptable, Customisable',
      p: `AssetScape is designed to be suitable for any asset management task, from data cleansing and creating asset inventories, to new asset placement and monitoring existing assets. Optimise the system to meet your needs by customising tools, reorganising the user interface, altering asset models, changing the 3D scene visualisation and more.`,
    },
    {
      h: 'Take Control of your Data',
      p: `Whatever its type, source or format AssetScape effortlessly brings all kinds of data together into one easily navigable 3D environment. Exploit the powerful insights this delivers to harness the true potential of your data. Our versatile toolkit enables you to visualise, analyse, reorganise, prioritise and utilise the full spectrum of data at your disposal quickly and effectively.`,
    },
    {
      h: 'From the Micro to the Macro',
      p: `Whether you need to interact with your data in micro or macro detail, AssetScape is designed to facilitate asset management on any scale. From exploring the placement of a single CCTV camera to managing the full asset inventory of a whole Area, AssetScape’s dynamic and fully customisable system can be adapted to suit any task, big or small.`,
    },
    {
      h: 'Simple, Usable, Practical',
      p: `Our aim is to simplify the complex, and this extends to our user interface. Our controls are uncomplicated and intuitive, and our innovative ‘Tools Frame’ provides easy access to AssetScape’s toolkit. AssetScape requires only minimal training and new users can be up and running within hours.`,
    },
  ]

  const projects = [
    { title: 'M3 Junction 2 to 4a Asset Verification Task', slug: 'm3-j2-4a', cover: 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/M3-Figure-1-1024x555.jpg' },
    { title: 'Assessing the Suitability of Proposed CCTV Camera Sites', slug: 'cctv-suitability', cover: 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/CCTV-Figure-1-1024x555.jpg' },
    { title: 'Highways England Technology', slug: 'highways-technology', cover: 'https://www.assetscape.co.uk/wp-content/uploads/2017/04/image001.png' },
    { title: 'National Highways CCMT System', slug: 'nh-ccmt', cover: heroImg2 },
    { title: 'National Highways Road Lighting', slug: 'nh-road-lighting', cover: heroImg1 },
    { title: 'National Highways Drainage', slug: 'nh-drainage', cover: heroImg3 },
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
              LiDAR, external databases, shapefiles and mapping, and allows you visualise it all clearly. Whether the data comes
              from several systems or surveys, is provided by you or is open source, and is concerned with assets or the
              environment, AssetScape integrates it all to build a functional and dynamic 3D asset management environment.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Optimise and Innovate</h3>
            <p className='mt-2 text-sm leading-relaxed'>
              AssetScape is aimed at asset management professionals looking to optimise their asset management systems and
              utilise the full potential of their data. Use our system to complete existing tasks more efficiently and to explore
              new and innovative ways to take advantage of the full spectrum of data available to you. AssetScape has the tools to
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
            <div key={f.h} className='border border-neutral-200 rounded-xl p-5 shadow-sm'>
              <h3 className='font-semibold'>{f.h}</h3>
              <p className='mt-2 text-sm leading-relaxed'>{f.p}</p>
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
        <figure className='border border-neutral-200 rounded-2xl p-6 bg-white'>
          <blockquote className='text-sm leading-relaxed'>
            “This is a very elegant approach to solving a real‑world problem. The innovation is highly transferrable and helps asset managers to manage their assets more effectively, and with greater accuracy. This is a promising innovation which has the potential to transform the way data for a major project is mapped and configured.”
          </blockquote>
          <figcaption className='mt-3 text-xs text-neutral-600'>Judge's comments, CIOB International innovation & research award</figcaption>
        </figure>
      </section>

        {/* Full-length promo video section */}
        <section id='full-video' className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <h2 className='text-2xl font-semibold tracking-tight'>Watch the video</h2>
          <div className='mt-6 aspect-video w-full rounded-xl overflow-hidden border border-neutral-200'>
            <iframe
              loading='lazy'
              className='w-full h-full'
              src='https://www.youtube-nocookie.com/embed/OZ3DrVDm3kU?rel=0&modestbranding=1&playsinline=1'
              title='AssetScape promo'
              frameBorder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <p className='mt-3 text-sm'>
            Prefer live demo? Reach out!
          </p>
        </div>
      </section>

    </>
  )
}

type Section = { h?: string; p: string | string[] }
type DetailPageProps = {
  title: string
  subtitle?: string
  sections: Section[]
  images?: string[]
  backTo: To
  backLabel: string
}

function DetailPage({ title, subtitle, sections, images, backTo, backLabel }: DetailPageProps) {
  return (
    <section className='mx-auto max-w-3xl px-4 py-10'>
      <Link to={backTo} className='text-sm underline'>
        {backLabel}
      </Link>
      <h1 className='mt-4 text-3xl font-semibold tracking-tight'>{title}</h1>
      {subtitle && <p className='mt-2 text-base'>{subtitle}</p>}
      {images && images.length > 0 && (
        <div className='mt-6 grid grid-cols-1 gap-4'>
          {images.map((src) => (
            <img key={src} src={src} alt='Project illustration' className='w-full rounded-lg border border-neutral-200' />
          ))}
        </div>
      )}
      <div className='mt-8 space-y-8'>
        {sections.map((s, i) => (
          <div key={i}>
            {s.h && <h3 className='text-lg font-semibold'>{s.h}</h3>}
            {Array.isArray(s.p) ? (
              <ul className='mt-2 list-disc pl-5 space-y-1 text-sm leading-relaxed'>
                {s.p.map((li, k) => (<li key={k}>{li}</li>))}
              </ul>
            ) : (
              <p className='mt-2 text-sm leading-relaxed whitespace-pre-line'>{s.p}</p>
            )}
          </div>
        ))}
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
              Let's discuss how AssetScape can support your next programme.
              <br />
              Send us an email or call and we'll set up a session tailored to your assets and workflows.
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
  subtitle: 'Working for WSP and Balfour Beatty, we undertook the task of correctly identifying and recording every asset on the newly rebuilt section of the M3 between junctions 2 and 4a.',
  images: [
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/M3-Figure-1-1024x555.jpg',
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/M3-Figure-2-1024x555.jpg',
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/M3-Figure-3-1024x555.jpg',
  ],
  sections: [
    { h: 'Resources', p: ['Aerial LiDAR', 'Orthographic imagery', 'Google Street View', 'Existing inventory']},
    { h: 'Methodology', p: [
      'Use imagery to establish the location and type of each asset on a route',
      'Accept into the new asset catalogue assets from the existing inventory that can be positively identified',
      'Add to the catalogue assets identified in the imagery but not present in the existing inventory',
      'Add comments and alerts to assets that require them',
      'Apply auditing with progress tracking, spot checks and comment and alert reviews',
    ]},
    { h: 'Overcoming Challenges', p: [
      'Identify nearly 45 separate asset types',
      'Select experienced data technicians with highways asset experience',
      'Work with specialists to build an identification manual',
      'Provide access to specialists for technicians',
      'Maintain and clear a regularly updated issues log',
    ]},
    { h: 'Outcome', p: 'An accurate, up‑to‑date asset inventory, ready for integration.' },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
}

// CCTV
const P_CCTV = {
  title: 'Assessing the Suitability of Proposed CCTV Camera Sites',
  subtitle: 'Clients use AssetScape to assess the suitability of proposed CCTV camera sites, eliminating the need for many site visits.',
  images: [
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/CCTV-Figure-1-1024x555.jpg',
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/CCTV-Figure-2-1024x555.jpg',
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/CCTV-Figure-3-1024x742.jpg',
  ],
  sections: [
    { h: 'Configuring the 3D world', p: [
      'LiDAR (mobile and aerial) with refined point clouds',
      'OS MasterMap with extruded buildings',
      'Orthographic imagery',
      'Google Street View',
      'AssetScape 3D terrain maps',
    ]},
    { h: 'Line of Sight module', p: [
      'Asset templates for different camera types and settings',
      'Interactive camera assets for realistic operation',
      'Polar Image with percentage visibility, screen height and depth',
      'Regions centred on each proposed camera site',
    ]},
    { h: 'Usability', p: 'With a few hours of training, new users begin their assessments.' },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
}

// HE Tech
const P_HE_Tech = {
  title: 'Highways England Technology',
  subtitle: 'Data cleansing for 25,000 technology assets for the NorthEast RCC Technology Area',
  images: [
    'https://www.assetscape.co.uk/wp-content/uploads/2017/04/image001.png',
    'https://www.assetscape.co.uk/wp-content/uploads/2017/04/Screen-Shot-2017-09-27-at-12.24.45-PM.png',
    'https://www.assetscape.co.uk/wp-content/uploads/2017/04/Screen-Shot-2017-09-27-at-12.25.00-PM.png',
  ],
  sections: [
    { p: 'AssetScape provides a foundation for complex data cleansing across highways technology assets.' },
    { p: 'Point‑cloud feature recognition and 3D visualisation enable accurate plotting to within less than a metre.' },
    { p: 'The task used AVIS/OS imagery, LiDAR, OS mapping and a tailored schema.' },
    { p: 'The approach included processing methodology, audit protocols and output specification with auditing and analytics.' },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
}

// New placeholder projects
const P_NH_CCMT = {
  title: 'National Highways CCMT System',
  subtitle: 'A configurable platform supporting Contract Completion and Handback workflows at scale.',
  images: [],
  sections: [
    { h: 'Scope', p: ['Decision tracking', 'Evidence and audit', 'Programme‑wide reporting']},
    { h: 'Approach', p: 'Configured modules for handback decisions, with role‑based workflows and versioned change control.' },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
}

const P_NH_RL = {
  title: 'National Highways Road Lighting',
  subtitle: 'Inventory verification and condition intelligence for lighting assets.',
  images: [],
  sections: [
    { h: 'Data inputs', p: ['LiDAR', 'Night imagery', 'Existing inventory', 'Site records']},
    { h: 'Outcome', p: 'Clean inventory, prioritised interventions and export‑ready datasets.' },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
}

const P_NH_DR = {
  title: 'National Highways Drainage',
  subtitle: 'Drainage asset identification, verification and risk insights.',
  images: [],
  sections: [
    { h: 'Process', p: ['Imagery‑led identification', 'Schema alignment', 'QA/QA with audits']},
    { h: 'Result', p: 'A verified drainage dataset aligned to export formats.' },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
}

const SERVICE_BACK_TO: To = { pathname: '/', hash: '#services' }
const SERVICE_BACK_LABEL = '← Back to Services'

const S_3D = {
  title: '3D Visualisation',
  subtitle: 'Build immersive, navigable 3D scenes that place every asset in context.',
  images: [
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/20.jpg',
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/35.jpg',
  ],
  sections: [
    {
      h: 'Integrated data sources',
      p: [
        'Combine LiDAR, photogrammetry and BIM to construct true-to-life environments.',
        'Overlay mapping, CAD and attribute data with precise georeferencing.',
        'Blend aerial and terrestrial imagery for full corridor coverage.',
      ],
    },
    {
      h: 'Capabilities',
      p: [
        'Interrogate assets with measurement, slicing and annotation tools.',
        'Switch viewpoints instantly to support design, maintenance and stakeholder reviews.',
        'Export presentation-ready imagery and video fly-throughs.',
      ],
    },
    {
      h: 'Delivery',
      p: 'AssetScape tailors visualisations to your asset classes and workflows, ensuring key information is surfaced with minimal navigation.',
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
}

const S_DataCleansing = {
  title: 'Data Cleansing',
  subtitle: 'Reconcile inventories and records into a single dependable dataset.',
  images: ['https://www.assetscape.co.uk/wp-content/uploads/2018/04/18.jpg'],
  sections: [
    {
      h: 'Approach',
      p: [
        'Review existing schemas and align to AssetScape taxonomies.',
        'Blend automated validation with expert QA/QC for critical assets.',
        'Capture commentary, discrepancies and approvals in an auditable log.',
      ],
    },
    {
      h: 'Data inputs',
      p: [
        'Historic inventories, spreadsheets and databases.',
        'Site observations, as-built drawings and survey outputs.',
        'Feedback from maintainers and operations teams.',
      ],
    },
    {
      h: 'Outcome',
      p: 'Deliver a cleansed, schema-compliant dataset ready for import into AMS, GIS or BIM platforms.',
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
}

const S_Strategic = {
  title: 'Strategic Asset Management',
  subtitle: 'Translate asset intelligence into clear investment decisions.',
  images: ['https://www.assetscape.co.uk/wp-content/uploads/2018/04/35.jpg'],
  sections: [
    {
      h: 'Focus areas',
      p: [
        'Lifecycle planning aligned to risk and performance.',
        'Scenario modelling with configurable scoring and weighting.',
        'Portfolio dashboards for leadership reporting.',
      ],
    },
    {
      h: 'How AssetScape helps',
      p: [
        'Spatialise programme data to highlight hotspots and dependencies.',
        'Blend condition, utilisation and risk indicators into a single workspace.',
        'Export ready-made packs for governance and funding boards.',
      ],
    },
    {
      h: 'Result',
      p: 'Empower teams with a transparent evidence base for investment planning and prioritisation.',
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
}

const S_CameraPlacement = {
  title: 'Camera Placement',
  subtitle: 'Design effective CCTV schemes using virtual line-of-sight analysis.',
  images: ['https://www.assetscape.co.uk/wp-content/uploads/2018/04/CCTV-Figure-1-1024x555.jpg'],
  sections: [
    {
      h: 'Inputs',
      p: [
        '3D corridor models generated from LiDAR, imagery and mapping.',
        'Template libraries covering fixed, PTZ and specialist camera hardware.',
        'Digital terrain data to capture gradients, cuttings and structures.',
      ],
    },
    {
      h: 'Analysis',
      p: [
        'Simulate line-of-sight and coverage envelopes with adjustable mounting heights.',
        'Compare alternative pole and bracket locations inside the 3D world.',
        'Produce visibility heatmaps and polar plots for stakeholders.',
      ],
    },
    {
      h: 'Outcome',
      p: 'Generate evidence packs and camera schedules to accelerate approvals and installation.',
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
}

const S_RouteWatcher = {
  title: 'RouteWatcher',
  subtitle: 'Monitor corridors remotely with scheduled capture and secure sharing.',
  images: ['https://www.assetscape.co.uk/wp-content/uploads/2018/04/20.jpg'],
  sections: [
    {
      h: 'What RouteWatcher delivers',
      p: [
        'Browser-based access to the latest imagery and LiDAR along defined routes.',
        'Timeline playback with bookmarking for incidents and inspections.',
        'Role-based permissions to keep sensitive corridors secure.',
      ],
    },
    {
      h: 'Use cases',
      p: [
        'Incident investigation without site visits.',
        'Works planning and clash detection for multiple contractors.',
        'Evidence gathering for handback and audit.',
      ],
    },
    {
      h: 'Benefits',
      p: 'Reduce repeat site visits while giving teams situational awareness on demand.',
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
}

const S_MobileData = {
  title: 'Mobile Data Capture',
  subtitle: 'Capture georeferenced imagery and LiDAR to keep inventories current.',
  images: ['https://www.assetscape.co.uk/wp-content/uploads/2018/04/18.jpg'],
  sections: [
    {
      h: 'Capabilities',
      p: [
        'Vehicle and backpack-based capture options with calibrated sensors.',
        'High-resolution imagery synchronised with GNSS positioning.',
        'Optional LiDAR integration for dense point-cloud creation.',
      ],
    },
    {
      h: 'Workflow',
      p: [
        'Plan survey routes, tasks and naming conventions inside AssetScape.',
        'Capture observations with configurable forms and prompts.',
        'Upload data to the platform for validation, enrichment and publishing.',
      ],
    },
    {
      h: 'Deliverables',
      p: 'Structured datasets, QA reports and viewer-ready scenes ready for downstream systems.',
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
}

function DocumentsPage() {
  const docs = [
    { name: 'Capability (General)', file: 'AssetScape_Capability_General.pdf' },
    { name: 'Capability Sheet 1 – LiDAR', file: 'AssetScape_Capability_Sheet1_LiDAR.pdf' },
    { name: 'Capability Sheet 2 – AMS', file: 'AssetScape_Capability_Sheet2_AMS.pdf' },
    { name: 'Capability Sheet 3 – Coastal', file: 'AssetScape_Capability_Sheet3_Coastal.pdf' },
    { name: 'Data Cleansing', file: 'AssetScape_Capability_DataCleansing.pdf' },
  ]
  return (
    <section className='mx-auto max-w-3xl px-4 py-10'>
      <h1 className='text-3xl font-semibold tracking-tight'>Documents</h1>
      <p className='mt-2 text-sm'>Download PDFs. Files are hosted with this site.</p>
      <ul className='mt-6 space-y-3'>
        {docs.map((d) => (
          <li key={d.file}>
            <a className='underline' href={`${import.meta.env.BASE_URL}docs/${d.file}`} download>
              {d.name}
            </a>
          </li>
        ))}
      </ul>
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
        <Route path='/services/3d-visualisation' element={<Layout><DetailPage {...S_3D} /></Layout>} />
        <Route path='/services/data-cleansing' element={<Layout><DetailPage {...S_DataCleansing} /></Layout>} />
        <Route path='/services/strategic-asset-management' element={<Layout><DetailPage {...S_Strategic} /></Layout>} />
        <Route path='/services/camera-placement' element={<Layout><DetailPage {...S_CameraPlacement} /></Layout>} />
        <Route path='/services/routewatcher' element={<Layout><DetailPage {...S_RouteWatcher} /></Layout>} />
        <Route path='/services/mobile-data-capture' element={<Layout><DetailPage {...S_MobileData} /></Layout>} />
      </Routes>
    </HashRouter>
  )
}
