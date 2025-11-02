import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }: { children: ReactNode }) {
  const logo = 'https://www.assetscape.co.uk/wp-content/uploads/2017/03/AS-logo1.png'
  return (
    <div className='min-h-screen bg-white text-neutral-800'>
      <header className='sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-3 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-3'>
            <img src={logo} alt='AssetScape logo' className='h-10 w-auto' />
            <span className='sr-only'>AssetScape</span>
          </Link>
          <nav className='hidden md:flex items-center gap-6 text-sm'>
            <Link to='/' className='hover:underline'>Home</Link>
            <a href='#features' className='hover:underline'>Features</a>
            <a href='#services' className='hover:underline'>Services</a>
            <Link to='/projects/m3-j2-4a' className='hover:underline'>Projects</Link>
            <a href='#news' className='hover:underline'>News</a>
            <a href='#documents' className='hover:underline'>Documents</a>
            <a href='#demo' className='hover:underline'>Request a Demo</a>
          </nav>
        </div>
      </header>
      {children}
      <Footer />
    </div>
  )
}

function VideoHero() {
  const poster = 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/18.jpg'
  const videoSrc = 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4'
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
            <h1 className='text-2xl md:text-3xl font-semibold tracking-tight'>AssetScape® is an asset management solution with a difference.</h1>
            <p className='mt-2 text-sm md:text-base'>3D data management paired with a real‑time graphics engine for a practical, visual approach to asset decisions.</p>
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
    { h: 'From Plan to Pavement and Beyond', p: `From day‑to‑day tasks such as condition monitoring and assigning maintenance works to longer‑term strategic planning, AssetScape enables you to manage assets through their whole lifecycle.` },
    { h: 'Flexible, Adaptable, Customisable', p: `Customise tools, reorganise the user interface, alter asset models and change 3D scene visualisation.` },
    { h: 'Take Control of your Data', p: `Bring all data together into one navigable 3D environment. Visualise, analyse, reorganise and prioritise quickly and effectively.` },
    { h: 'From the Micro to the Macro', p: `From a single asset to the full inventory of an area, AssetScape supports work on any scale.` },
    { h: 'Simple, Usable, Practical', p: `Controls are uncomplicated and intuitive. New users can be up and running within hours.` },
  ]

  const projects = [
    { title: 'M3 Junction 2 to 4a Asset Verification Task', slug: 'm3-j2-4a', cover: 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/M3-Figure-1-1024x555.jpg' },
    { title: 'Assessing the Suitability of Proposed CCTV Camera Sites', slug: 'cctv-suitability', cover: 'https://www.assetscape.co.uk/wp-content/uploads/2018/04/CCTV-Figure-1-1024x555.jpg' },
    { title: 'Highways England Technology', slug: 'highways-technology', cover: 'https://www.assetscape.co.uk/wp-content/uploads/2017/04/image001.png' },
  ]

  return (
    <>
      <VideoHero />

      <section id='about' className='relative overflow-hidden'>
        <div className='mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>About</h2>
            <p className='mt-4 text-base leading-relaxed'>
              By combining our three‑dimensional data management approach with our three‑dimensional graphics engine, we bring asset management into the 21st century. AssetScape® is more than an asset management system – it is a “World Management System”.
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
            <p className='mt-2 text-sm leading-relaxed'>AssetScape brings your data together and enables complex tasks such as data validation, making placement decisions and managing maintenance schemes.</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Bring data to life</h3>
            <p className='mt-2 text-sm leading-relaxed'>Integrate LiDAR, external databases, shapefiles and mapping, and visualise clearly in 3D.</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Optimise and Innovate</h3>
            <p className='mt-2 text-sm leading-relaxed'>Optimise systems and utilise the potential of your data.</p>
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
          <h2 className='text-2xl font-semibold tracking-tight'>Current Projects</h2>
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

      <section id='news' className='mx-auto max-w-6xl px-4 py-14'>
        <h2 className='text-2xl font-semibold tracking-tight'>News</h2>
        <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <a href='https://www.assetscape.co.uk/news/merit-award-winner-2016/' className='block border border-neutral-200 rounded-2xl p-5 hover:shadow-sm transition'>
            <div className='text-xs text-neutral-600'>April 24, 2017</div>
            <div className='mt-1 font-medium leading-snug'>Merit Award Winner 2016</div>
          </a>
          <a href='https://www.assetscape.co.uk/news/assetscape-co-sponsor-icsic-conference-hosted-by-university-of-cambridge/' className='block border border-neutral-200 rounded-2xl p-5 hover:shadow-sm transition'>
            <div className='text-xs text-neutral-600'>April 18, 2017</div>
            <div className='mt-1 font-medium leading-snug'>AssetScape co‑sponsor ICSIC conference</div>
          </a>
          <a href='https://www.assetscape.co.uk/news/cambridge-centre-for-smart-infrastructure-and-construction-partners-with-assetscape/' className='block border border-neutral-200 rounded-2xl p-5 hover:shadow-sm transition'>
            <div className='text-xs text-neutral-600'>April 5, 2017</div>
            <div className='mt-1 font-medium leading-snug'>Cambridge CSIC partners with AssetScape</div>
          </a>
        </div>
      </section>

      <section id='demo' className='bg-neutral-900 text-white'>
        <div className='mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-2xl font-semibold tracking-tight'>Request a Demo</h2>
            <p className='mt-2 text-sm text-neutral-300'>Use the email link to request a demonstration of AssetScape.</p>
          </div>
          <div>
            <a href='mailto:enquiries@assetscape.co.uk?subject=AssetScape%20Demo%20Request' className='inline-flex items-center justify-center rounded-xl border border-white px-5 py-3 text-sm hover:bg-white hover:text-neutral-900 transition'>Email enquiries@assetscape.co.uk</a>
          </div>
        </div>
      </section>

      <section id='documents' className='mx-auto max-w-6xl px-4 py-14'>
        <h2 className='text-2xl font-semibold tracking-tight'>Documents</h2>
        <p className='mt-2 text-sm'>Link to publicly available documents if required.</p>
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
  const logo = 'https://www.assetscape.co.uk/wp-content/uploads/2017/03/AS-logo1.png'
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200 mt-10'>
      <div className='mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm'>
        <div>
          <img src={logo} alt='AssetScape logo' className='h-8 w-auto' />
        </div>
        <div>
          <div className='font-medium'>United Kingdom</div>
          <ul className='mt-2 space-y-1'>
            <li><a href='mailto:enquiries@assetscape.co.uk' className='hover:underline'>enquiries@assetscape.co.uk</a></li>
            <li><a href='tel:+441778422380' className='hover:underline'>+44 (0)1778 422380</a></li>
            <li>Pinpoint House, Burghley Street Bourne, Lincolnshire, PE10 9NS</li>
          </ul>
        </div>
        <div className='md:text-right'>
          <div>© 2018 AssetScape. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

// Project content
const P_M3 = {
  title: 'M3 Junction 2 to 4a Asset Verification Task',
  subtitle: 'Working for WSP and Balfour Beatty, we undertook the task of correctly identifying and recording every asset on the newly rebuilt section of the M3 between junctions 2 and 4a.',
  images: [
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/M3-Figure-1-1024x555.jpg',
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/M3-Figure-2-1024x555.jpg',
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/M3-Figure-3-1024x555.jpg',
  ],
  sections: [
    { h: 'Resources', p: [
      'Aerial LiDAR',
      'Orthographic imagery',
      'Google Street View',
      'Existing inventory',
    ]},
    { h: 'Methodology', p: [
      'Use all available imagery to establish the location and type of each asset on a route',
      '‘Accept’ into the new asset catalogue any assets from the existing inventory that can be positively identified',
      'Add to the new asset catalogue any assets identified in the imagery but not present in the existing inventory',
      'Add comments and alerts to assets that require them, for example where assets cannot be identified or require additional investigation',
      'Apply auditing with progress tracking, spot checks and comment and alert reviews to ensure consistency and accuracy',
    ]},
    { h: 'Overcoming Challenges', p: [
      'Identify nearly 45 separate asset types, most with several subtypes',
      'Select experienced data technicians with previous experience of AssetScape and highways assets',
      'Work with specialists, from drainage to road markings, to build a comprehensive identification manual',
      'Provide access to these specialists for the data technicians',
      'Maintain and clear a regularly updated issues log',
    ]},
    { h: 'Outcome', p: 'We delivered an accurate, up‑to‑date asset inventory in a format ready to be integrated back into Highways England’s asset management system.' },
  ],
}

const P_CCTV = {
  title: 'Assessing the Suitability of Proposed CCTV Camera Sites',
  subtitle: 'Our clients, WSP, Kier and Highways England, are using our innovative 3D ‘world management’ system, AssetScape, to assess the suitability of proposed CCTV camera sites, eliminating the need for costly and dangerous site visits.',
  images: [
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/CCTV-Figure-1-1024x555.jpg',
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/CCTV-Figure-2-1024x555.jpg',
    'https://www.assetscape.co.uk/wp-content/uploads/2018/04/CCTV-Figure-3-1024x742.jpg',
  ],
  sections: [
    { h: 'Configuring the 3D world', p: [
      'LiDAR (mobile and aerial) to represent obstructions such as trees, structures and vegetation with refined point clouds',
      'OS MasterMap with buildings automatically extruded and positioned in the 3D world',
      'Orthographic imagery',
      'Google Street View',
      'AssetScape’s 3D terrain maps',
    ]},
    { h: '‘Line of Sight’ module', p: [
      'Asset templates to create and experiment with different camera types and settings',
      'Dynamically interactive camera assets that a user can operate as they would a camera in the real world',
      'The ‘Polar Image’ which provides insights such as percentage visibility, percentage screen height and total depth',
      'Regions which centre on each proposed camera site, allowing users to navigate around the AssetScape world',
    ]},
    { h: 'Usability', p: 'With only a few hours of training, users from Kier who had never used AssetScape before were beginning their site suitability assessments.' },
  ],
}

const P_HE_Tech = {
  title: 'Highways England Technology',
  subtitle: 'Providing innovative data cleansing solution to data cleanse 25,000 technology assets for the NorthEast RCC Technology Area',
  images: [
    'https://www.assetscape.co.uk/wp-content/uploads/2017/04/image001.png',
    'https://www.assetscape.co.uk/wp-content/uploads/2017/04/Screen-Shot-2017-09-27-at-12.24.45-PM.png',
    'https://www.assetscape.co.uk/wp-content/uploads/2017/04/Screen-Shot-2017-09-27-at-12.25.00-PM.png',
  ],
  sections: [
    { p: 'AssetScape has a solid foundation for complex data cleansing across highways infrastructure assets. The platform was loaded with Highways England’s LiDAR, ortho‑imagery, video and incomplete technology inventory. Using the data cleansing module, the processing team re‑invented 18,000 marker post positions and located over 30 different technology asset types.' },
    { p: 'Semi‑automated processors such as point‑cloud feature recognition and AssetScape’s 3D visualisation tools enabled accurate plotting of the new inventory to within less than a metre.' },
    { p: 'AssetScape handled the geodatabase and cleansing task configured with AVIS/OS imagery, LiDAR and OS mapping and tailored schema and attributes for the task.' },
    { p: 'The approach included a detailed processing methodology, audit protocols and an output specification. All users were trained and tested to ensure high‑quality outputs. Auditing is a module within AssetScape with reporting and statistical analytics.' },
  ],
}

export default function AssetScapeApp() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout><HomePage /></Layout>} />
        <Route path='/projects/m3-j2-4a' element={<Layout><ProjectPage {...P_M3} /></Layout>} />
        <Route path='/projects/cctv-suitability' element={<Layout><ProjectPage {...P_CCTV} /></Layout>} />
        <Route path='/projects/highways-technology' element={<Layout><ProjectPage {...P_HE_Tech} /></Layout>} />
      </Routes>
    </HashRouter>
  )
}
