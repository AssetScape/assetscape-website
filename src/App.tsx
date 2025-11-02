import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { To } from 'react-router-dom'
import { useEffect } from 'react'

import roundLogo from './assets/logo-round.png'
import wordmarkLogo from './assets/logo-wordmark.png'
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
            <Link to='/' aria-label='AssetScape home' className='flex h-full items-center gap-3'>
              <img src={roundLogo} alt='' aria-hidden className='h-full w-auto object-contain' />
              <img src={wordmarkLogo} alt='' aria-hidden className='h-full w-auto object-contain' />
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
      <div className='relative h-[48vh] md:h-[70vh] overflow-hidden'>
        <video
          className='absolute inset-0 h-full w-full object-cover'
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

function HomePage() {
  const heroImg1 = 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/35.jpg'
  const heroImg2 = 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/18.jpg'
  const heroImg3 = 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/20.jpg'

  const services = [
    { title: '3D Visualisation', href: 'https://www.assetscape.co.uk/3d-visualisation/', img: heroImg3 },
    { title: 'Data Cleansing', href: 'https://www.assetscape.co.uk/data-cleansing/', img: heroImg1 },
    { title: 'Strategic Asset Management', href: 'https://www.assetscape.co.uk/strategic-asset-management/', img: heroImg2 },
    { title: 'Camera Placement', href: 'https://www.assetscape.co.uk/camera-placement/', img: heroImg1 },
    { title: 'RouteWatcher', href: 'https://www.assetscape.co.uk/routewatcher/', img: heroImg2 },
    { title: 'Mobile Data Capture', href: 'https://www.assetscape.co.uk/mobile-data-capture/', img: heroImg3 },
  ]

  const featuresBullets = [
    { h: 'Visualise your data in 3D', p: `On site, assets function in three dimensions. AssetScape reflects this by building realistic 3D scenes that transform raw data into an interactive asset management experience.` },
    { h: 'From Local Nodes to National Networks', p: `Support local inspections and national‑scale programmes in the same platform with consistent data, views and controls.` },
    { h: 'Flexible, Adaptable, Customisable', p: `Customise tools, reorganise the interface, alter asset models and change 3D scene visualisation.` },
    { h: 'Take Control of your Data', p: `Bring all data together into one navigable 3D environment. Visualise, analyse, reorganise and prioritise quickly and effectively.` },
    { h: 'From the Micro to the Macro', p: `From a single asset to a full inventory, work at the scale that fits the task.` },
    { h: 'Simple, Usable, Practical', p: `Controls are uncomplicated and intuitive. New users can be up and running within hours.` },
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
          <div>
            <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>About</h2>
            <p className='mt-4 text-base leading-relaxed'>
              We combine three‑dimensional data management with a real‑time 3D graphics engine so you can manage assets with context and clarity. AssetScape® is a practical way to see, decide and track across an entire network.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-3 md:gap-4'>
            <img src={heroImg1} alt='AssetScape visual 1' className='w-full h-28 md:h-40 object-cover rounded-lg' />
            <img src={heroImg2} alt='AssetScape visual 2' className='w-full h-28 md:h-40 object-cover rounded-lg' />
            <img src={heroImg3} alt='AssetScape visual 3' className='w-full h-28 md:h-40 object-cover rounded-lg' />
          </div>
        </div>
      </section>

        <section className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-semibold'>Simplify the complex</h3>
            <p className='mt-2 text-sm leading-relaxed'>Bring your data together and enable tasks such as validation, placement decisions and maintenance planning.</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Bring data to life</h3>
            <p className='mt-2 text-sm leading-relaxed'>Integrate LiDAR, external databases, shapefiles and mapping, and visualise clearly in 3D.</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Optimise and innovate</h3>
            <p className='mt-2 text-sm leading-relaxed'>Use the potential of your data with focused tools and views.</p>
          </div>
        </div>
      </section>

      <section id='features' className='mx-auto max-w-6xl px-4 py-14'>
        <h2 className='text-2xl font-semibold tracking-tight'>Features</h2>
        <div className='mt-8 grid md:grid-cols-2 gap-8'>
          {featuresBullets.map((f) => (
            <div key={f.h} className='border border-neutral-200 rounded-xl p-5'>
              <h3 className='font-semibold'>{f.h}</h3>
              <p className='mt-2 text-sm leading-relaxed'>{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section id='services' className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <h2 className='text-2xl font-semibold tracking-tight'>Services</h2>
          <div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((s) => (
              <a key={s.title} href={s.href} className='group block rounded-2xl overflow-hidden border border-neutral-200 bg-white'>
                <div className='aspect-[16/9] overflow-hidden'>
                  <img src={s.img} alt={s.title} className='w-full h-full object-cover group-hover:scale-105 transition' />
                </div>
                <div className='p-4'>
                  <h3 className='font-medium'>{s.title}</h3>
                </div>
              </a>
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

      {/* Contact */}
      <section id='contact' className='bg-neutral-900 text-white'>
        <div className='mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-3 gap-8 items-start'>
          <div className='md:col-span-2'>
            <h2 className='text-2xl font-semibold tracking-tight'>Contact</h2>
            <ul className='mt-4 space-y-2 text-sm'>
              <li><a className='underline' href='mailto:enquiries@assetscape.co.uk'>enquiries@assetscape.co.uk</a></li>
              <li><a className='underline' href='tel:+441778422380'>+44 (0)1778 422380</a></li>
              <li>24a, The Square, Retford, Nottinghamshire, DN22 6DQ</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <div className='text-sm'>Full‑length video on YouTube:</div>
            <a className='inline-flex items-center justify-center rounded-xl border border-white px-4 py-2 text-sm hover:bg-white hover:text-neutral-900 transition' href='https://www.youtube.com/watch?v=OZ3DrVDm3kU' target='_blank' rel='noreferrer'>Watch on YouTube</a>
          </div>
        </div>
      </section>
    </>
  )
}

type Section = { h?: string, p: string | string[] }
type ProjectPageProps = { title: string, subtitle?: string, sections: Section[], images?: string[] }

function ProjectPage({ title, subtitle, sections, images }: ProjectPageProps) {
  return (
    <section className='mx-auto max-w-3xl px-4 py-10'>
      <Link to='/' className='text-sm underline'>← Back to Home</Link>
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
    <footer className='bg-neutral-50 border-t border-neutral-200 mt-10'>
      <div className='mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm'>
        <div className='flex items-center gap-3'>
          <img src={roundLogo} alt='' aria-hidden className='h-12 w-auto object-contain' />
          <img src={wordmarkLogo} alt='AssetScape' className='h-12 w-auto object-contain' />
        </div>
        <div>
          <div className='font-medium'>United Kingdom</div>
          <ul className='mt-2 space-y-1'>
            <li><a href='mailto:enquiries@assetscape.co.uk' className='hover:underline'>enquiries@assetscape.co.uk</a></li>
            <li><a href='tel:+441778422380' className='hover:underline'>+44 (0)1778 422380</a></li>
            <li>24a, The Square, Retford, Nottinghamshire, DN22 6DQ</li>
          </ul>
        </div>
        <div className='md:text-right'>
          <div>© 2025 AssetScape Limited. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

// Existing projects
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
}

const P_NH_RL = {
  title: 'National Highways Road Lighting',
  subtitle: 'Inventory verification and condition intelligence for lighting assets.',
  images: [],
  sections: [
    { h: 'Data inputs', p: ['LiDAR', 'Night imagery', 'Existing inventory', 'Site records']},
    { h: 'Outcome', p: 'Clean inventory, prioritised interventions and export‑ready datasets.' },
  ],
}

const P_NH_DR = {
  title: 'National Highways Drainage',
  subtitle: 'Drainage asset identification, verification and risk insights.',
  images: [],
  sections: [
    { h: 'Process', p: ['Imagery‑led identification', 'Schema alignment', 'QA/QA with audits']},
    { h: 'Result', p: 'A verified drainage dataset aligned to export formats.' },
  ],
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
        <Route path='/projects/m3-j2-4a' element={<Layout><ProjectPage {...P_M3} /></Layout>} />
        <Route path='/projects/cctv-suitability' element={<Layout><ProjectPage {...P_CCTV} /></Layout>} />
        <Route path='/projects/highways-technology' element={<Layout><ProjectPage {...P_HE_Tech} /></Layout>} />
        <Route path='/projects/nh-ccmt' element={<Layout><ProjectPage {...P_NH_CCMT} /></Layout>} />
        <Route path='/projects/nh-road-lighting' element={<Layout><ProjectPage {...P_NH_RL} /></Layout>} />
        <Route path='/projects/nh-drainage' element={<Layout><ProjectPage {...P_NH_DR} /></Layout>} />
      </Routes>
    </HashRouter>
  )
}
