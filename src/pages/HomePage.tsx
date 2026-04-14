import { Link } from 'react-router-dom'
import { SectionMarker } from '../components/SectionMarker'
import { CTABlock } from '../components/CTABlock'
import { IconCube, IconNetwork, IconSliders, IconShield, IconTarget, IconCompass } from '../components/Icons'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

import projectM3Cover from '../assets/projects/projectM3Cover.jpg'
import projectCctvCover from '../assets/projects/projectCctvCover.jpg'
import projectHeTechCover from '../assets/projects/projectHeTechCover.png'
import projectNhCcmtCover from '../assets/projects/projectCCMTCover.png'
import projectNhRoadLightingCover from '../assets/projects/projectNhRoadLightingCover.jpg'
import projectNhDrainageCover from '../assets/projects/projectNhDrainageCover.png'

import roadImg from '../assets/road.png'
import railImg from '../assets/rail.png'
import waterImg from '../assets/water.png'
import heroVideo from '../assets/AS_SHORT_720_optimized.mp4'
import heroImage from '../assets/heroImage.jpg'

const MAILTO = 'mailto:enquiries@assetscape.co.uk?subject=Enquiry%20from%20AssetScape%20website'

function VideoHero() {
  return (
    <section className='relative'>
      <div className='relative h-[48vh] md:h-[70vh] overflow-hidden bg-black'>
        <video
          className='absolute inset-0 h-full w-full object-contain'
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
        >
          <source src={heroVideo} type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20' />
        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white'>
          <h1 className='max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight'>
            One 3D environment for connected infrastructure data
          </h1>
          <p className='mt-4 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg'>
            Connect systems, asset data and spatial information into one navigable 3D environment. See every asset in context. Make decisions faster.
          </p>
          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
            <a
              href={MAILTO}
              className='inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-transparent hover:text-white'
            >
              Get in touch
            </a>
            <a
              href='#full-video'
              className='inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
            >
              Watch the full video ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  useDocumentTitle('AssetScape — One 3D environment for connected infrastructure data')

  const services = [
    {
      title: 'Strategic asset management',
      description:
        'Using condition, risk and performance data, we build clear renewal and maintenance plans for all assets. To enable better information management we assemble evidence, forecasts and dashboards that support a fair, data-led outcome.',
    },
    {
      title: 'Asset performance, risk and condition insight',
      description:
        'Combining inventory, condition, incident and usage data, we enable you to see which assets drive operational risk, where performance falls short and where intervention will give the greatest benefit.',
    },
    {
      title: 'Consultancy and digital solutions',
      description:
        'We work with you to define problems, shape options and specify practical data and system solutions for highways, rail and water assets.',
    },
    {
      title: '3D corridor views and visual context',
      description:
        '3D scenes are automatically built from LiDAR, point clouds, imagery and asset data so teams can review corridors, schemes and assets without repeated site visits and understand how everything fits together on the ground.',
    },
    {
      title: 'Data standards, cleansing and verification',
      description:
        'We define data models and code lists, then cleanse and reconcile inventories from multiple sources. We verify records against surveys, as-built information and works data so you hold one trusted picture of each asset.',
    },
    {
      title: 'Mobile inspections and field data capture',
      description:
        'Our approach creates and supports mobile workflows for inventory, defects and condition so inspectors capture the right attributes in the field and upload them safely into your asset systems.',
    },
    {
      title: 'CCTV coverage and line-of-sight design',
      description:
        'Using virtual line-of-sight tools to test camera locations, check coverage and refine CCTV layouts enables you to resolve blind spots before you commit to hardware and installation.',
    },
    {
      title: 'Lighting and technology asset intelligence',
      description:
        'We cleanse and verify lighting and technology inventories, link them to imagery and LiDAR, and produce datasets that support maintenance, energy and renewal decisions across the network.',
    },
    {
      title: 'Drainage and network risk insights',
      description:
        'We identify and verify drainage assets, relate them to flooding and performance issues, and give you data that supports targeted maintenance and resilience planning.',
    },
    {
      title: 'Platform configuration and bespoke utilities',
      description:
        'We configure AssetScape and build small tools, scripts and workflows so your teams can use data in the way they work day to day.',
    },
    {
      title: 'Carriageway defects automated assessment',
      description:
        'We run automated assessment of pavement survey information and images to highlight likely defects before manual review. This approach focuses attention on the highest-risk sections and supports consistent defect scoring.',
    },
    {
      title: 'Road markings condition analysis',
      description:
        'Using machine learning and AI, we automatically combine and analyse TRACS pavement images to measure the condition of road markings. The output provides a consistent score and helps you target renewal work where it is most needed.',
    },
  ]

  const featuresBullets = [
    {
      h: 'Visualise your data in 3D',
      p: 'On site, assets function in three dimensions. AssetScape reflects this reality by building realistic 3D scenes that transform raw data into a tangible and interactive asset management experience. These 3D scenes enable you to picture your assets fully embedded in their real-world environment and provide new perspectives that two-dimensional software solutions simply cannot offer.',
      Icon: IconCube,
    },
    {
      h: 'From local nodes to national networks',
      p: 'AssetScape is more than an asset management tool. It is a comprehensive asset management system. From day-to-day tasks such as condition monitoring and assigning maintenance works, to longer-term strategic planning including asset replacement and renewal schemes, AssetScape has the capability to manage your assets through their whole lifecycle.',
      Icon: IconNetwork,
    },
    {
      h: 'Flexible, adaptable, customisable',
      p: 'AssetScape is designed to be suitable for any asset management task, from data cleansing and creating asset inventories, to new asset placement and monitoring existing assets. Optimise the system to meet your needs by customising tools, reorganising the user interface, altering asset models, changing the 3D scene visualisation and more.',
      Icon: IconSliders,
    },
    {
      h: 'Take control of your data',
      p: 'Whatever its type, source or format, AssetScape effortlessly brings all kinds of data together into one easily navigable 3D environment. Exploit the powerful insights this delivers to harness the true potential of your data. Our versatile toolkit enables you to visualise, analyse, reorganise, prioritise and utilise the full spectrum of data at your disposal quickly and effectively.',
      Icon: IconShield,
    },
    {
      h: 'From the micro to the macro',
      p: "Whether you need to interact with your data in micro or macro detail, AssetScape is designed to facilitate asset management on any scale. From exploring the placement of a single CCTV camera to managing the full asset inventory of a whole area, AssetScape's dynamic and fully customisable system can be adapted to suit any task, big or small.",
      Icon: IconTarget,
    },
    {
      h: 'Simple, usable, practical',
      p: "Our aim is to simplify the complex, and this extends to our user interface. Our controls are uncomplicated and intuitive, and our innovative 'Tools Frame' provides easy access to AssetScape's toolkit. AssetScape requires only minimal training and new users can be up and running within hours.",
      Icon: IconCompass,
    },
  ]

  const projects = [
    { title: 'National Highways Contract Completion Toolkit (CCMT) System', slug: 'nh-ccmt', cover: projectNhCcmtCover },
    { title: 'M3 Junction 2 to 4a Asset Verification Task', slug: 'm3-j2-4a', cover: projectM3Cover },
    { title: 'Assessing the Suitability of Proposed CCTV Camera Sites', slug: 'cctv-suitability', cover: projectCctvCover },
    { title: 'National Highways Technology', slug: 'highways-technology', cover: projectHeTechCover },
    { title: 'National Highways Road Lighting', slug: 'nh-road-lighting', cover: projectNhRoadLightingCover },
    { title: 'National Highways Drainage - Area 2', slug: 'nh-drainage', cover: projectNhDrainageCover },
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
              By combining a multi-dimensional data management approach with our 3D graphics engine, we have created a platform for connecting and visualising infrastructure and asset data. AssetScape® provides one 3D environment for connected infrastructure data, whether as a standalone platform or integrated with existing systems.
            </p>
            <p className='text-base leading-relaxed'>
              We work with your teams from initial data setup through to ongoing support, delivering solutions configured for your workflows and systems.
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
              AssetScape integrates. It brings together data from a range of sources, including
              LiDAR, external databases, shapefiles and mapping, and allows you to visualise everything clearly. Whether the
              data comes from several systems or surveys, is provided by you or sourced openly, AssetScape integrates it all to
              build a functional and dynamic 3D asset management environment.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Optimise and innovate</h3>
            <p className='mt-2 text-sm leading-relaxed'>
              AssetScape is aimed at asset management professionals looking to optimise their asset management systems and
              utilise the full potential of their data. Use our system to complete existing tasks more efficiently and to explore
              new and innovative ways to take advantage of the full spectrum of data available to you. AssetScape has the capability to
              transform the way you approach asset management.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Data Wrapper teaser */}
      <section className='mx-auto max-w-6xl px-4 py-14'>
        <div className='rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 md:p-12 text-center'>
          <h2 className='text-xl md:text-2xl font-semibold tracking-tight'>
            Already have a GIS platform or asset management system?
          </h2>
          <p className='mt-3 mx-auto max-w-2xl text-sm md:text-base text-neutral-700 leading-relaxed'>
            AssetScape wraps around your existing tools and adds a 3D visual layer that helps teams see the full picture, without replacing anything already in place.
          </p>
          <Link
            to='/3d-data-wrapper'
            className='mt-6 inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-neutral-900'
          >
            Explore the 3D Data Wrapper →
          </Link>
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

      <section id='projects' className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <div className='space-y-3 text-center md:text-left'>
            <SectionMarker label='Projects' />
            <h2 className='text-2xl font-semibold tracking-tight'>Projects</h2>
          </div>
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

      <CTABlock heading='See how AssetScape can support your next project.' />

      {/* Judge's quote */}
      <section className='mx-auto max-w-6xl px-4 py-14'>
        <figure className='rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12'>
          <blockquote className='text-xl leading-relaxed text-neutral-800 italic md:text-xl'>
            "This is a very elegant approach to solving a real‑world problem. The innovation is highly transferrable and helps asset managers to manage their assets more effectively, and with greater accuracy. This is a promising innovation which has the potential to transform the way data for a major project is mapped and configured."
          </blockquote>
          <figcaption className='mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-600 md:text-base'>
            CIOB International Innovation &amp; Research Award, Judge's comments
          </figcaption>
        </figure>
      </section>

      <section id='services' className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <div className='space-y-3 text-center md:text-left'>
            <SectionMarker label='Services' />
            <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>Services</h2>
            <p className='text-sm text-neutral-600'>From data capture to in-depth analysis, our team supports every stage of the asset lifecycle.</p>
          </div>
          <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((s) => (
              <div
                key={s.title}
                className='flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md'
              >
                <p className='text-lg font-semibold text-neutral-900'>{s.title}</p>
                <p className='mt-3 text-sm leading-relaxed text-neutral-700'>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock heading="Let's talk about your data." buttonLabel='Email us' />

      {/* Full-length promo video section */}
      <section id='full-video' className='bg-neutral-50 border-y border-neutral-200'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <h2 className='text-2xl font-semibold tracking-tight text-center'>See AssetScape in action</h2>
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
              href={MAILTO}
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
