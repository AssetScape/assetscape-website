import { Link } from 'react-router-dom'
import { SectionMarker } from '../components/SectionMarker'
import { IconLink, IconWrench, IconEye, IconBarChart, IconNetwork } from '../components/Icons'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

import heroVideo from '../assets/AS_SHORT_720_optimized.mp4'
import heroImage from '../assets/heroImage.jpg'
import projectNhCcmtCover from '../assets/projects/projectCCMTCover.png'
import projectM3Cover from '../assets/projects/projectM3Cover.jpg'
import projectHeTechCover from '../assets/projects/projectHeTechCover.png'

const MAILTO = 'mailto:enquiries@assetscape.co.uk?subject=Enquiry%20about%20Connected%20Data'

const proofPoints = [
  {
    title: 'Contract Completion (CCMT)',
    stat: '2,900 km of pavements, 160,000+ assets, 8 DBFO schemes',
    slug: 'nh-ccmt',
    cover: projectNhCcmtCover,
  },
  {
    title: 'Technology Asset Cleansing',
    stat: '250,000+ roadside technology assets cleansed and verified',
    slug: 'highways-technology',
    cover: projectHeTechCover,
  },
  {
    title: 'M3 J2 to 4a Verification',
    stat: 'Full corridor asset inventory created from desktop',
    slug: 'm3-j2-4a',
    cover: projectM3Cover,
  },
]

const sections = [
  {
    icon: IconEye,
    marker: 'The challenge',
    heading: 'Project data is often spread across too many systems',
    bullets: [
      'GIS, survey data, sensor feeds, engineering records and asset information are often held in separate tools, making it difficult to review them together.',
      'Teams can end up working from different sources, with limited spatial context and no shared view of the project.',
      'This slows review, increases manual effort and makes coordination harder across complex programmes.',
      'It can also make it difficult to understand how data, assets and issues relate to each other on the ground.',
    ],
  },
  {
    icon: IconLink,
    marker: 'What AssetScape adds',
    heading: 'A shared 3D view across project data',
    bullets: [
      'AssetScape brings project data together in a navigable 3D environment, giving teams a clearer view of assets, locations and surrounding context.',
      'It helps users review information spatially, not just as records spread across separate systems and files.',
      'Data from different sources can be brought together in one place so teams can compare, inspect and understand it more effectively.',
      'This supports faster review, clearer communication and better-informed decisions across the project lifecycle.',
    ],
  },
  {
    icon: IconNetwork,
    marker: 'How it fits',
    heading: 'Works with established systems or new project setups',
    bullets: [
      'AssetScape can connect to GIS platforms, databases, APIs, sensor data, engineering systems and file-based sources.',
      'Where data is fragmented, incomplete or held in legacy formats, ETL pipelines can prepare and structure it for use.',
      'Where geospatial context does not yet exist, we can create it using LiDAR, point clouds, satellite imagery, aerial photography and terrain models.',
      'This means AssetScape can support both projects that already have mature systems in place and projects being developed from the ground up.',
    ],
  },
  {
    icon: IconWrench,
    marker: 'Example workflows',
    heading: 'Configured for practical delivery needs',
    bullets: [
      'AssetScape can support targeted workflows and custom modules built around specific project requirements.',
      'Examples include CCTV line-of-sight assessment, contract completion tracking, drainage risk assessment and road markings condition scoring.',
      'It can also support desktop verification, data cleansing and project-specific review tasks where spatial context matters.',
      'The aim is not to force teams into a fixed template, but to provide a solution that supports the way the project actually works.',
    ],
  },
  {
    icon: IconBarChart,
    marker: 'Proof',
    heading: 'Delivered on live infrastructure programmes',
    bullets: [
      'AssetScape has already been used on major infrastructure and asset management programmes across the UK.',
      'It has supported contract handback, desktop verification, asset cleansing and other data-led workflows at programme scale.',
      'This page describes a practical delivery approach, not a future concept.',
    ],
  },
]

const techStack = [
  'GIS platforms',
  'Databases',
  'APIs',
  'Survey data',
  'Sensor data',
  'Engineering systems',
  'LiDAR',
  'Point clouds',
  'Aerial imagery',
  'CAD / BIM',
]

export function ConnectedDataPage() {
  useDocumentTitle('AssetScape | Connected Data')

  return (
    <>
      {/* Hero */}
      <section className='relative'>
        <div className='relative h-[42vh] overflow-hidden bg-black md:h-[55vh]'>
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
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25' />
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white'>
            <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400'>
              Connected Data
            </p>
            <h1 className='max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl'>
              Bring project data together in one navigable 3D environment
            </h1>
            <p className='mt-4 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg'>
              Connect systems, surveys and spatial data in one navigable 3D environment. See every asset in
              context. Make decisions faster.
            </p>
            <div className='mt-8'>
              <a
                href={MAILTO}
                className='inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-transparent hover:text-white'
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-14'>
        {sections.map((s, i) => (
          <section key={i} className='rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8'>
            <div className='flex items-start gap-4'>
              <div className='hidden shrink-0 sm:block'>
                <s.icon className='h-11 w-11 text-emerald-600' />
              </div>
              <div className='space-y-3'>
                <SectionMarker
                  as='h2'
                  label={s.marker}
                  className='text-[0.65rem] tracking-[0.32em] sm:text-xs'
                />
                <h3 className='text-xl font-semibold tracking-tight md:text-2xl'>{s.heading}</h3>
                <div className='space-y-2 text-sm text-neutral-800 sm:text-base'>
                  {s.bullets.map((b, idx) => (
                    <p key={idx}>{b}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Proof points */}
        <section className='space-y-6'>
          <div className='text-center sm:text-left'>
            <SectionMarker label='Relevant project examples' />
            <h2 className='mt-3 text-2xl font-semibold tracking-tight'>Applied on live projects</h2>
            <p className='mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base'>
              The examples below show how AssetScape has been applied in live environments, from large-scale
              asset management programmes to focused desktop verification and workflow delivery.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-3'>
            {proofPoints.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className='group block overflow-hidden rounded-2xl border border-neutral-200 bg-white'
              >
                <div className='aspect-[16/9] overflow-hidden'>
                  <img
                    src={p.cover}
                    alt={p.title}
                    className='h-full w-full object-cover transition group-hover:scale-105'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='font-medium leading-snug group-hover:underline'>{p.title}</h3>
                  <p className='mt-1 text-xs text-neutral-500'>{p.stat}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Technology compatibility */}
        <section className='rounded-3xl border border-neutral-200 bg-neutral-50 p-6 text-center sm:p-8'>
          <SectionMarker label='Works with your data and technology' />
          <p className='mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 sm:text-base'>
            AssetScape can work with a wide range of project data sources and technology environments, helping
            teams bring information together without forcing a single fixed setup.
          </p>
          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            {techStack.map((t) => (
              <span
                key={t}
                className='inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm'
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className='rounded-3xl bg-neutral-900 p-8 text-center text-white md:p-12'>
          <h2 className='text-xl font-semibold tracking-tight md:text-2xl'>
            See how AssetScape could support your project
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base'>
            Whether you need to connect established systems or build a clearer 3D view from the ground up, we
            can help.
          </p>
          <div className='mt-6'>
            <a
              href={MAILTO}
              className='inline-flex items-center rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-transparent hover:text-white'
            >
              Get in touch
            </a>
          </div>
        </section>
      </div>
    </>
  )
}