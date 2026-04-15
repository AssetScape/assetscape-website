import type { ReactNode } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './brochure.css'

import logoImg from '../assets/logo-wordmark-combined.png'
import wrapperDiagramImg from '../assets/wrapper/wrapperDiagram.png'
import structuresViewerImg from '../assets/wrapper/structuresViewer.jpg'
import building3dWorldImg from '../assets/wrapper/building3dWorld.jpg'
import projectCCMTScreenshot1 from '../assets/projects/projectCCMTScreenshot1.png'
import projectCCMTCover from '../assets/projects/projectCCMTCover.png'
import projectHeTechCover from '../assets/projects/projectHeTechCover.png'
import projectM3Cover from '../assets/projects/projectM3Cover.jpg'

const currentYear = new Date().getFullYear()

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

const openingProof = [
  {
    stat: '2,900 km',
    detail: 'of pavements managed through CCMT across eight DBFO schemes',
  },
  {
    stat: '160,000+',
    detail: 'assets connected in a single National Highways Handback platform',
  },
  {
    stat: '250,000+',
    detail: 'roadside technology assets cleansed and verified',
  },
]

const wrapperBenefits = [
  {
    title: 'Less switching between tools',
    text: 'Review related information in one place rather than moving between maps, records and separate interfaces.',
  },
  {
    title: 'Clearer physical context',
    text: 'Understand how assets, issues and evidence relate to each other on the ground, not just in a database.',
  },
  {
    title: 'Shared view for teams',
    text: 'Give different disciplines a common visual reference point even when data comes from different systems.',
  },
  {
    title: 'Better review and coordination',
    text: 'Support clearer discussion, faster review and stronger decision-making around live delivery work.',
  },
]

const workSteps = [
  'Review your current systems and data',
  'Connect or generate the 3D context',
  'Configure AssetScape around your workflows',
  'Deliver, refine and support ongoing needs',
]

const projectProof = [
  {
    title: 'National Highways Contract Completion Toolkit (CCMT)',
    subtitle: 'A configurable platform supporting Contract Completion and Handback workflows at scale.',
    body:
      "AssetScape provides the platform for National Highways' CCMT system, managing Handback across eight DBFO schemes. The system manages 2,900 km of pavements and over 160,000 assets, including 1,100 structures, within a single connected platform used by National Highways, DBFOs and advisers.",
    points: [
      'More than ten organisations and over 100 users working to a common process with full audit trail',
      'Near 50% reduction in repeat site visits on sampled routes within the first three years',
      'Evidence pack creation reduced from days to minutes',
    ],
    image: projectCCMTCover,
    alt: 'National Highways CCMT',
  },
  {
    title: 'National Highways Technology',
    subtitle: 'Data cleansing of technology assets for the whole National Highways technology network.',
    body:
      'The project produced a cleansed and reconciled dataset for more than 250,000 roadside technology assets across the Strategic Road Network in England, giving National Highways sub-metre accurate locations and condition intelligence to underpin operations and maintenance contracts.',
    points: [
      'Semi-automated asset generation, verification and audit workflow driven entirely within AssetScape',
      'Delivered assurance packs with traceable edits and review history for National Highways governance',
      'Enabled technology service providers to plan interventions using a single, trusted source of asset data',
    ],
    image: projectHeTechCover,
    alt: 'National Highways Technology',
  },
  {
    title: 'M3 Junction 2 to 4a Asset Verification',
    subtitle: 'Full corridor asset identification and recording on the M3 between junctions 2 and 4a.',
    body:
      'AssetScape supported an assured asset inventory covering every asset above ground on the upgraded M3 corridor between junctions 2 and 4a. The post-construction inventory was developed off-site through a desktop approach.',
    points: [
      'Semi-automated workflow for asset creation, verification and audit with full progress tracking',
      'Issues log and spot-check audit trail provided evidence for National Highways assurance gates',
      'Created validated data loaders and scripts to ensure compliant data was loaded back to the host system',
    ],
    image: projectM3Cover,
    alt: 'M3 Junction 2 to 4a',
  },
]

function BrochureHeader({ label }: { label: string }) {
  return (
    <header className="brochure-header">
      <img src={logoImg} alt="AssetScape" />
      <span>{label}</span>
    </header>
  )
}

function BrochureFooter() {
  return (
    <footer className="brochure-footer">
      <div className="brochure-footer-brand">
        <img src={logoImg} alt="AssetScape" />
      </div>
      <div className="brochure-footer-links">
        <a href="mailto:enquiries@assetscape.co.uk">enquiries@assetscape.co.uk</a>
        <a href="https://www.assetscape.co.uk">www.assetscape.co.uk</a>
      </div>
      <p>&copy; {currentYear} AssetScape Limited</p>
    </footer>
  )
}

function BrochurePageFrame({
  children,
  headerLabel,
  variant = '',
}: {
  children: ReactNode
  headerLabel?: string
  variant?: string
}) {
  return (
    <section className={`brochure-page ${variant}`}>
      {headerLabel ? <BrochureHeader label={headerLabel} /> : null}
      <div className="brochure-page-body">{children}</div>
      <BrochureFooter />
    </section>
  )
}

export function BrochurePage() {
  useDocumentTitle('AssetScape - Brochure')

  return (
    <div className="brochure-root">
      <div className="brochure-toolbar">
        <button onClick={() => window.print()} type="button">
          Print / Save as PDF
        </button>
        <span>Ctrl+P - Save as PDF - A4 portrait - Enable background graphics</span>
      </div>

      <BrochurePageFrame variant="brochure-page-cover">
        <div className="cover-masthead">
          <img src={logoImg} alt="AssetScape" />
          <p>One 3D environment for connected data</p>
        </div>

        <div className="cover-title-grid">
          <div>
            <h1>AssetScape</h1>
            <p className="cover-subtitle">
              Connect systems, asset data and spatial information in one 3D environment
            </p>
          </div>
          <p className="cover-audience">
            AssetScape works across roads, rail, water and broader public infrastructure, supporting asset owners,
            managing agents, DBFOs, local authorities and delivery partners.
          </p>
        </div>

        <figure className="cover-hero">
          <img src={projectCCMTScreenshot1} alt="AssetScape 3D infrastructure corridor with connected asset data" />
          <figcaption>Connected asset records, evidence and spatial context in one navigable 3D environment.</figcaption>
        </figure>

        <div className="cover-intro-grid">
          <div className="cover-intro">
            <p className="brochure-section-label">About</p>
            <h2>One 3D environment for connected infrastructure data</h2>
            <p>
              By combining a multi-dimensional data management approach with our 3D graphics engine, we have created a
              platform for connecting and visualising infrastructure and asset data. AssetScape&reg; provides one 3D
              environment for connected infrastructure data, whether as a standalone platform or integrated with existing
              systems.
            </p>
            <p>
              We work with your teams from initial data setup through to ongoing support, delivering solutions configured
              for your workflows and systems.
            </p>
          </div>

          <aside className="cover-principles">
            <p className="brochure-section-label">In practice</p>
            <div>
              <h3>Simplify the complex</h3>
              <p>Bring data together in one place and present it in a useful, informative and manageable way.</p>
            </div>
            <div>
              <h3>Bring data to life</h3>
              <p>Combine LiDAR, external databases, shapefiles, mapping, surveys and imagery in a functional 3D environment.</p>
            </div>
            <div>
              <h3>Support practical delivery</h3>
              <p>Configure modules and workflows around real project, inspection, review and operational needs.</p>
            </div>
          </aside>
        </div>

        <div className="cover-proof-band" aria-label="AssetScape proof points">
          {openingProof.map((item) => (
            <div key={item.stat}>
              <strong>{item.stat}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </BrochurePageFrame>

      <BrochurePageFrame headerLabel="3D Data Wrapper">
        <div className="page-heading">
          <p className="brochure-section-label">3D Data Wrapper</p>
          <h2>A 3D wrapper for your existing infrastructure data and systems</h2>
        </div>

        <section className="wrapper-lead brochure-no-break">
          <div>
            <p>
              AssetScape works alongside your existing asset management, GIS, engineering and data systems as a 3D data
              wrapper. It brings information from multiple sources into one visual environment where teams can review
              assets, update records, capture decisions and move information back into connected workflows, without
              replacing the systems already in place.
            </p>
            <div className="brochure-callout">
              <p>Built to complement your current systems, not replace them</p>
            </div>
          </div>
          <img src={wrapperDiagramImg} alt="How AssetScape wraps your existing systems" />
        </section>

        <section className="connection-panel brochure-no-break">
          <div>
            <p className="brochure-section-label">What it connects</p>
            <p>Systems, records and spatial context that teams often have to review separately.</p>
          </div>
          <div className="brochure-pills">
            {wrapperInputs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="brochure-benefit-grid brochure-no-break">
          {wrapperBenefits.map((benefit) => (
            <div className="benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </section>

        <section className="viewer-spotlight brochure-no-break">
          <div className="viewer-copy">
            <p className="brochure-section-label">Feature spotlight</p>
            <h2>The Structures Viewer</h2>
            <p>
              The Structures Viewer gives teams a clear 3D view of structures and their components, with tools that
              support inspection, review and collaboration.
            </p>
            <ul className="brochure-check-list">
              <li>Explore structures in 3D, including exploding views of individual elements.</li>
              <li>Add comments, inspection notes, attachments and supporting photos directly within context.</li>
              <li>Keep information tied to the relevant structure or component rather than spread across separate files and systems.</li>
            </ul>
          </div>
          <img src={structuresViewerImg} alt="AssetScape Structures Viewer" />
        </section>
      </BrochurePageFrame>

      <BrochurePageFrame headerLabel="Capability and Delivery">
        <section className="context-feature brochure-no-break">
          <img src={building3dWorldImg} alt="Building the 3D world from LiDAR, point clouds and imagery" />
          <div>
            <p className="brochure-section-label">Creating context</p>
            <h2>No 3D environment?<br />
              We can generate it</h2>
            <p>
              Some clients already have strong geospatial and model data. Others do not. AssetScape can work in both
              situations. Where the underlying 3D world does not yet exist, we can help create it.
            </p>
            <ul className="brochure-check-list">
              <li>Use LiDAR, point clouds, aerial imagery, photography, terrain data and related sources to build usable visual context.</li>
              <li>Combine this baseline environment with asset and engineering data so teams can work within one coherent view.</li>
              <li>Draw on practical experience of turning fragmented source material into useful 3D environments.</li>
            </ul>
          </div>
        </section>

        <section className="supporting-capabilities">
          <article className="brochure-panel brochure-no-break">
            <p className="brochure-section-label">AI-ready data architecture</p>
            <h2>AI-ready from day one</h2>
            <p>
              Many organisations are asking how their existing data and systems can support AI. In practice, the main
              barrier is often not the AI tool itself, but the condition of the data behind it. AssetScape helps solve
              that problem by bringing fragmented sources into clearer spatial and operational context.
            </p>
            <ul className="brochure-check-list">
              <li>Connect records, documents, imagery and location context in one environment.</li>
              <li>Help shape data so it is more structured, accessible and usable for future AI-assisted workflows.</li>
            </ul>
          </article>

          <article className="brochure-panel brochure-no-break">
            <p className="brochure-section-label">Delivery approach</p>
            <h2>Built around real needs, with faster turnaround</h2>
            <p>
              AssetScape is designed to support practical delivery, not force every client into the same rigid model. We
              take a just-in-time approach, shaping modules and workflows around the real requirement and responding
              quickly when needs change.
            </p>
            <ul className="brochure-check-list">
              <li>Build targeted modules for specific review, inspection or operational needs.</li>
              <li>Adapt quickly when a new workflow, data source or interface requirement emerges.</li>
              <li>Offer the responsiveness of a smaller, local team with direct understanding of infrastructure and asset data challenges.</li>
            </ul>
          </article>
        </section>

        <section className="work-steps brochure-no-break">
          <div>
            <p className="brochure-section-label">From current systems to a working 3D environment</p>
            <h2>How we work with you</h2>
          </div>
          <ol>
            {workSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </BrochurePageFrame>

      <BrochurePageFrame headerLabel="Projects">
        <div className="proof-heading">
          <p className="brochure-section-label">Applied on real infrastructure projects</p>
          <h2>Real-world outcomes from delivered projects</h2>
          <p>
            AssetScape has already been used across live infrastructure and asset management work, from large-scale data
            and workflow challenges to focused verification and review tasks.
          </p>
        </div>

        <section className="project-proof-list">
          {projectProof.map((project) => (
            <article className="project-proof brochure-no-break" key={project.title}>
              <img src={project.image} alt={project.alt} />
              <div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-body">{project.body}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="closing-panel brochure-no-break">
          <div>
            <p className="brochure-section-label">Next step</p>
            <h2>See how AssetScape can support your next project.</h2>
          </div>
          <div>
            <a href="mailto:enquiries@assetscape.co.uk">enquiries@assetscape.co.uk</a>
            <a href="https://www.assetscape.co.uk">www.assetscape.co.uk</a>
          </div>
        </section>
      </BrochurePageFrame>
    </div>
  )
}
