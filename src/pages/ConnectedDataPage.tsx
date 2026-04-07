import { Link } from 'react-router-dom'
import { SectionMarker } from '../components/SectionMarker'
import { IconLink, IconWrench, IconEye, IconBarChart } from '../components/Icons'
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
    icon: IconLink,
    marker: 'Connect, don\'t replace',
    heading: 'Connects to your existing systems',
    bullets: [
      'AssetScape connects to your existing platforms, including GIS, sensor dashboards, engineering systems and asset databases, bringing their data into a shared 3D environment.',
      'Direct connections to databases, APIs and file-based data sources mean your existing workflows stay in place.',
      'ETL pipelines handle complex or legacy data, ensuring nothing is left behind.',
      'Where geospatial data does not yet exist, we create it: 3D terrains from LiDAR, point clouds, satellite imagery and aerial photography.',
    ],
  },
  {
    icon: IconWrench,
    marker: 'Configured for your project',
    heading: 'Built around what you need, not a template',
    bullets: [
      'Every deployment is configured around the requirements of your project and your teams.',
      'We design and deliver custom modules and workflows for specific project needs, including CCTV line-of-sight analysis, contract completion tracking, drainage risk assessment and road markings condition scoring.',
      'New capabilities are delivered in weeks, not months. Our agile approach means we respond quickly to changing project needs.',
      'You get a solution that fits the way you work, not a generic tool you have to work around.',
    ],
  },
  {
    icon: IconEye,
    marker: 'The 3D advantage',
    heading: 'See what spreadsheets and 2D maps cannot show you',
    bullets: [
      'See every asset in its real-world position and surroundings, in three dimensions.',
      'Reduce site visits by reviewing corridors, schemes and assets remotely.',
      'Overlay data from multiple sources in a single view so teams can make better-informed decisions.',
      'Give teams, from engineers to programme managers, a shared spatial reference point.',
    ],
  },
  {
    icon: IconBarChart,
    marker: 'Proven at scale',
    heading: 'Delivering results on major programmes',
    bullets: [
      'AssetScape is already trusted on some of the UK\'s largest infrastructure asset management programmes.',
      'From contract handback on DBFO schemes to national technology asset cleansing, we have demonstrated that the platform performs at scale.',
    ],
  },
]

const techStack = [
  'GIS platforms',
  'Sensor networks',
  'LiDAR',
  'Point clouds',
  'CAD / BIM',
  'Aerial imagery',
  'Databases',
  'APIs',
  'Mapping services',
  'Survey data',
]

export function ConnectedDataPage() {
  useDocumentTitle('AssetScape — Connected 3D for your existing systems and data')

  return (
    <>
      {/* Hero */}
      <section className='relative'>
        <div className='relative h-[42vh] md:h-[55vh] overflow-hidden bg-black'>
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
            <p className='text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400 mb-3'>Connected Data</p>
            <h1 className='max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight'>
              Connected 3D for your existing systems and data
            </h1>
            <p className='mt-4 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg'>
              Bring your GIS platforms, sensor feeds, survey data and engineering systems together in one navigable 3D environment, without replacing your existing systems.
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
      <div className='mx-auto max-w-5xl px-4 py-14 space-y-12'>
        {sections.map((s, i) => (
          <section key={i} className='rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8'>
            <div className='flex items-start gap-4'>
              <div className='shrink-0 hidden sm:block'>
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

        {/* Proof points — project cards */}
        <div className='grid sm:grid-cols-3 gap-6'>
          {proofPoints.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className='group block rounded-2xl overflow-hidden border border-neutral-200 bg-white'
            >
              <div className='aspect-[16/9] overflow-hidden'>
                <img
                  src={p.cover}
                  alt={p.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition'
                />
              </div>
              <div className='p-4'>
                <h3 className='font-medium leading-snug group-hover:underline'>{p.title}</h3>
                <p className='mt-1 text-xs text-neutral-500'>{p.stat}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Technology compatibility */}
        <section className='rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 text-center'>
          <SectionMarker label='Compatible with your technology' />
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
        <section className='rounded-3xl bg-neutral-900 p-8 md:p-12 text-center text-white'>
          <h2 className='text-xl md:text-2xl font-semibold tracking-tight'>
            Let us show you how AssetScape can connect to your existing systems.
          </h2>
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
