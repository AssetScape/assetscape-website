import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { SectionMarker } from '../components/SectionMarker'
import { IconLink, IconWrench, IconCheck } from '../components/Icons'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

import heroVideo from '../assets/AS_SHORT_720_optimized.mp4'
import heroImage from '../assets/heroImage.jpg'
import projectNhCcmtCover from '../assets/projects/projectCCMTCover.png'
import projectM3Cover from '../assets/projects/projectM3Cover.jpg'
import projectHeTechCover from '../assets/projects/projectHeTechCover.png'

import wrapperDiagramImg from '../assets/wrapper/wrapperDiagram.png'
import building3dWorldImg from '../assets/wrapper/building3dWorld.jpg'
import structuresViewerImg from '../assets/wrapper/structuresViewer.jpg'
import aiReadyArchitectureImg from '../assets/wrapper/aiReadyArchitecture.jpg'

const MAILTO = 'mailto:enquiries@assetscape.co.uk?subject=Enquiry%20about%20AssetScape%203D%20Data%20Wrapper'

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

const wrapperInputs = [
  'GIS',
  'Asset systems',
  'Engineering records',
  'Surveys',
  'Imagery',
  'Documents',
  'Sensor feeds',
  'CAD / BIM',
]


const capabilityCards = [
  {
    title: 'Data review',
    text: 'Review connected records and spatial context in one environment rather than across separate tools and files.',
  },
  {
    title: 'Workflow configuration',
    text: 'Support project-specific checks, decisions and delivery tasks with modules shaped around real requirements.',
  },
  {
    title: 'Cross-team coordination',
    text: 'Give different disciplines a shared visual reference point even when their source data sits in different systems.',
  },
  {
    title: 'Operational tracking',
    text: 'Organise issues, progress and related information around live delivery needs in a clearer spatial context.',
  },
]

const moduleExamples = [
  'Contract completion module',
  'Data verification',
  'Condition review',
  'Line-of-sight assessment',
  'Issue capture',
  'Decision and evidence tracking',
]

const workSteps = [
  'Review your current systems and data',
  'Connect or build the 3D context',
  'Configure AssetScape around your workflows',
  'Deliver, refine and support ongoing needs',
]


function Pill({ children }: { children: ReactNode }) {
  return (
    <span className='inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm sm:text-sm'>
      {children}
    </span>
  )
}

export function ConnectedDataPage() {
  useDocumentTitle('AssetScape | 3D Data Wrapper')

  return (
    <>
      {/* Hero */}
      <section className='relative'>
        <div className='relative h-[42vh] overflow-hidden bg-black md:h-[56vh]'>
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
          <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/30' />
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white'>
            <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400'>3D Data Wrapper</p>
            <h1 className='max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-4xl'>
              A 3D wrapper for your existing asset data and systems
            </h1>
            <p className='mt-5 max-w-3xl text-base leading-relaxed text-neutral-200 sm:text-lg'>
              AssetScape wraps around your existing platforms, surveys and spatial data, bringing them together in
              one visual 3D environment for clearer review, faster workflows and better decisions.
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

      <div className='mx-auto max-w-6xl px-4 py-14 sm:py-16'>
        {/* Intro */}
        <section className='mx-auto max-w-4xl space-y-6'>
          <SectionMarker label='What this means in practice' />
          <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
            A clearer way to use the systems you already rely on
          </h2>
          <p className='text-base leading-relaxed text-neutral-700 sm:text-lg'>
            AssetScape is designed to work alongside your existing asset management, GIS, engineering and data
            systems as a 3D data wrapper. It brings information from multiple sources into one visual environment,
            helping teams inspect assets, understand context and work more effectively without replacing the systems
            already doing the core job.
          </p>
          <p className='text-base leading-relaxed text-neutral-700 sm:text-lg'>
            Where 3D context does not yet exist, we can create it using LiDAR, point clouds, imagery, terrain data
            and related sources. The result is a more useful view of your data, shaped around practical delivery
            needs rather than a fixed off-the-shelf model.
          </p>
          <div className='rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700 sm:text-[0.8rem]'>
              On top of your current systems, not instead of them
            </p>
          </div>
        </section>

        <div className='mt-16 space-y-14 sm:space-y-16'>
          {/* Combined wrapper + benefits */}
          <section className='space-y-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10'>
            <div className='grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
              <div className='space-y-6'>
                <div className='space-y-3'>
                  <SectionMarker label='What it wraps' className='text-[0.65rem] tracking-[0.32em] sm:text-xs' />
                  <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
                    One 3D layer across the systems and data you already use
                  </h2>
                  <p className='max-w-2xl text-base leading-relaxed text-neutral-700'>
                    AssetScape brings together the systems, records and spatial context that teams often have to
                    review separately. It adds a clearer visual layer without asking you to replace the platforms
                    already in place.
                  </p>
                </div>

                <div className='rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6'>
                  <div className='flex items-start gap-3'>
                    <div className='hidden shrink-0 sm:block'>
                      <IconLink className='h-10 w-10 text-emerald-600' />
                    </div>
                    <div className='space-y-5'>
                      <div>
                        <h3 className='text-lg font-semibold tracking-tight'>What it connects</h3>
                        <p className='mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base'>
                          Connect GIS, engineering records, surveys, imagery, documents and other sources within one
                          shared environment.
                        </p>
                      </div>
                      <div className='flex flex-wrap gap-2.5'>
                        {wrapperInputs.map((item) => (
                          <Pill key={item}>{item}</Pill>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className='space-y-6'>
                {/* Graphic 1: wrapper diagram */}
                <div className='overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50'>
                  <img
                    src={wrapperDiagramImg}
                    alt='How AssetScape wraps your existing systems — data sources flow into the 3D operational data layer and out to review, inspection, coordination and decision-making'
                    className='block w-full h-auto'
                    loading='lazy'
                  />
                </div>

              </div>
            </div>

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <div className='rounded-2xl border border-neutral-200 p-5'>
                <h3 className='text-base font-semibold'>Less switching between tools</h3>
                <p className='mt-2 text-sm leading-relaxed text-neutral-700'>
                  Review related information in one place rather than moving between maps, records, files and
                  separate interfaces.
                </p>
              </div>
              <div className='rounded-2xl border border-neutral-200 p-5'>
                <h3 className='text-base font-semibold'>Clearer physical context</h3>
                <p className='mt-2 text-sm leading-relaxed text-neutral-700'>
                  Understand how assets, issues and evidence relate to each other on the ground, not just in a
                  database.
                </p>
              </div>
              <div className='rounded-2xl border border-neutral-200 p-5'>
                <h3 className='text-base font-semibold'>Shared view for teams</h3>
                <p className='mt-2 text-sm leading-relaxed text-neutral-700'>
                  Give different disciplines a common visual reference point even when their data comes from
                  different systems.
                </p>
              </div>
              <div className='rounded-2xl border border-neutral-200 p-5'>
                <h3 className='text-base font-semibold'>Better review and coordination</h3>
                <p className='mt-2 text-sm leading-relaxed text-neutral-700'>
                  Support clearer discussion, faster review and stronger decision-making around live delivery and
                  asset management work.
                </p>
              </div>
            </div>
          </section>

          {/* Build the 3D world */}
          <section className='rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10'>
            <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
              <div className='space-y-4'>
                <SectionMarker label='Creating context' className='text-[0.65rem] tracking-[0.32em] sm:text-xs' />
                <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
                  No existing 3D environment? We can build it
                </h2>
                <p className='text-base leading-relaxed text-neutral-700'>
                  Some clients already have strong geospatial and model data. Others do not. AssetScape can work in
                  both situations. Where the underlying 3D world does not yet exist, we can help create it.
                </p>
                <div className='space-y-4 pt-2'>
                  <p className='text-sm leading-relaxed text-neutral-700 sm:text-base'>
                    Use LiDAR, point clouds, aerial imagery, photography, terrain data and related sources to build
                    usable visual context.
                  </p>
                  <p className='text-sm leading-relaxed text-neutral-700 sm:text-base'>
                    Combine this baseline environment with asset and engineering data so teams can work within one
                    coherent view.
                  </p>
                  <p className='text-sm leading-relaxed text-neutral-700 sm:text-base'>
                    Draw on practical experience of turning fragmented source material into useful 3D environments.
                  </p>
                </div>
              </div>

              <div className='overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50'>
                  <img
                    src={building3dWorldImg}
                    alt='Building the 3D world — LiDAR, point clouds, aerial imagery, photography, terrain and CAD/BIM data combine into a navigable 3D environment'
                    className='block w-full h-auto'
                    loading='lazy'
                  />
              </div>
            </div>
          </section>

          {/* Practical use */}
          <section className='rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:p-10'>
            <div className='max-w-3xl space-y-4'>
              <SectionMarker label='Practical use' className='text-[0.65rem] tracking-[0.32em] sm:text-xs' />
              <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>What teams can do inside AssetScape</h2>
              <p className='text-base leading-relaxed text-neutral-700'>
                AssetScape is not just for displaying data in 3D. It supports real delivery tasks by helping teams
                review, organise and work with connected information in context.
              </p>
            </div>

            <div className='mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
              {capabilityCards.map((card) => (
                <div key={card.title} className='rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm'>
                  <h3 className='text-lg font-semibold tracking-tight'>{card.title}</h3>
                  <p className='mt-3 text-sm leading-relaxed text-neutral-700'>{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Structures viewer spotlight */}
          <section className='overflow-hidden rounded-3xl bg-neutral-900 p-6 text-white shadow-sm sm:p-8 lg:p-10'>
            <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
              <div className='space-y-4'>
                <SectionMarker
                  label='Feature spotlight'
                  className='text-[0.65rem] tracking-[0.32em] text-emerald-400 sm:text-xs'
                />
                <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>The Structures Viewer</h2>
                <p className='text-base leading-relaxed text-neutral-300'>
                  The Structures Viewer is a strong example of what AssetScape makes possible in practice. It gives
                  teams a clear 3D view of structures and their components, with tools that support inspection,
                  review and collaboration.
                </p>
                <div className='space-y-4 pt-1 text-sm leading-relaxed text-neutral-300 sm:text-base'>
                  <p>Explore structures in 3D, including exploding views of individual elements.</p>
                  <p>Add comments, inspection notes, attachments and supporting photos directly within context.</p>
                  <p>
                    Keep information tied to the relevant structure or component rather than spread across separate
                    files and systems.
                  </p>
                  <p>Support clearer review and communication around condition, issues and follow-up actions.</p>
                </div>

                <div className='rounded-2xl border border-white/10 bg-white/5 px-5 py-4'>
                  <p className='text-sm font-medium text-neutral-200'>
                    A more practical way to review structures than switching between static drawings, records and
                    disconnected files.
                  </p>
                </div>
              </div>

              <div className='overflow-hidden rounded-3xl border border-white/10'>
                <img
                    src={structuresViewerImg}
                    alt='AssetScape Structures Viewer — exploded 3D bridge view with comments, inspection notes, photos and attachments'
                    className='block w-full h-auto'
                    loading='lazy'
                  />
              </div>
            </div>
          </section>

          {/* JIT delivery */}
          <section className='rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10'>
            <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr]'>
              <div className='space-y-4'>
                <SectionMarker label='Delivery approach' className='text-[0.65rem] tracking-[0.32em] sm:text-xs' />
                <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
                  Built around real needs, with faster turnaround
                </h2>
                <p className='text-base leading-relaxed text-neutral-700'>
                  AssetScape is designed to support practical delivery, not force every client into the same rigid
                  model. We take a just-in-time approach, shaping modules and workflows around the real requirement
                  and responding quickly when needs change.
                </p>
                <ul className='space-y-4 pt-1 text-sm leading-relaxed text-neutral-700 sm:text-base'>
                  <li className='flex items-start gap-3'>
                    <IconCheck className='mt-1 h-5 w-5 shrink-0 text-emerald-500' />
                    <span>Build targeted modules for specific review, inspection or operational needs.</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <IconCheck className='mt-1 h-5 w-5 shrink-0 text-emerald-500' />
                    <span>Adapt quickly when a new workflow, data source or interface requirement emerges.</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <IconCheck className='mt-1 h-5 w-5 shrink-0 text-emerald-500' />
                    <span>
                      Offer the responsiveness of a smaller, local team with direct understanding of infrastructure and
                      asset data challenges.
                    </span>
                  </li>
                </ul>
              </div>

              <div className='space-y-6'>
                <div className='rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6'>
                  <div className='flex items-start gap-3'>
                    <div className='hidden shrink-0 sm:block'>
                      <IconWrench className='h-10 w-10 text-emerald-600' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold tracking-tight'>Examples of just-in-time modules</h3>
                      <div className='mt-4 flex flex-wrap gap-2.5'>
                        {moduleExamples.map((item) => (
                          <Pill key={item}>{item}</Pill>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6'>
                  <p className='text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700'>How we work with you</p>
                  <div className='mt-5 grid gap-3 sm:grid-cols-2'>
                    {workSteps.map((step, idx) => (
                      <div key={step} className='rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm'>
                        <p className='text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700'>
                          Step {idx + 1}
                        </p>
                        <p className='mt-2 text-sm leading-relaxed text-neutral-700'>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI-ready */}
          <section className='rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10'>
            <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
              <div className='space-y-4'>
                <SectionMarker label='AI-ready data architecture' className='text-[0.65rem] tracking-[0.32em] sm:text-xs' />
                <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>AI-ready from day one</h2>
                <p className='text-base leading-relaxed text-neutral-700'>
                  Many organisations are asking how their existing data and systems can support AI. In practice, the
                  main barrier is often not the AI tool itself, but the condition of the data behind it. AssetScape
                  helps solve that problem by bringing fragmented sources into clearer spatial and operational
                  context.
                </p>
                <div className='space-y-4 pt-1 text-sm leading-relaxed text-neutral-700 sm:text-base'>
                  <p>Connect records, documents, imagery and location context in one environment.</p>
                  <p>Help shape data so it is more structured, accessible and usable for future AI-assisted workflows.</p>
                  <p>Provide a clearer foundation for search, automation, review support and other AI-related use cases.</p>
                  <p>Improve data usability without requiring wholesale replacement of existing systems.</p>
                </div>
                <div className='rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4'>
                  <p className='text-sm font-medium text-emerald-900'>
                    AI works better when the underlying data is connected, understandable and grounded in context.
                  </p>
                </div>
              </div>

              <div className='overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50'>
                <img
                    src={aiReadyArchitectureImg}
                    alt='AI-ready data architecture — fragmented source data flows through AssetScape into AI-assisted search, automation, review support and better decision-making'
                    className='block w-full h-auto'
                    loading='lazy'
                  />
              </div>
            </div>
          </section>

          {/* Proof */}
          <section className='space-y-6'>
            <div className='max-w-3xl space-y-3'>
              <SectionMarker label='Live examples' className='text-[0.65rem] tracking-[0.32em] sm:text-xs' />
              <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>Applied on real infrastructure programmes</h2>
              <p className='text-base leading-relaxed text-neutral-700'>
                AssetScape has already been used across live infrastructure and asset management work, from
                large-scale data and workflow challenges to focused verification and review tasks.
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-3'>
              {proofPoints.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className='group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5'
                >
                  <div className='aspect-[16/9] overflow-hidden'>
                    <img src={p.cover} alt={p.title} className='h-full w-full object-cover transition group-hover:scale-105' />
                  </div>
                  <div className='p-4'>
                    <h3 className='font-medium leading-snug group-hover:underline'>{p.title}</h3>
                    <p className='mt-2 text-sm leading-6 text-neutral-500'>{p.stat}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className='rounded-3xl bg-neutral-900 p-8 text-center text-white md:p-12'>
            <SectionMarker
              label='Next step'
              className='justify-center text-[0.65rem] tracking-[0.32em] text-emerald-400 sm:text-xs'
            />
            <h2 className='mt-4 text-2xl font-semibold tracking-tight md:text-3xl'>
              See how AssetScape could work alongside your existing systems
            </h2>
            <p className='mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300 sm:text-base'>
              Whether you need a clearer 3D view of existing data, a new visual environment built from source
              material, or a fast custom module around a specific workflow, AssetScape can help.
            </p>
            <div className='mt-7'>
              <a
                href={MAILTO}
                className='inline-flex items-center rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-transparent hover:text-white'
              >
                Get in touch
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}