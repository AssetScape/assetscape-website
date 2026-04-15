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
    title: 'One place to review related information',
    text: 'Review records, spatial data, imagery and documents together rather than checking each source separately.',
  },
  {
    title: 'Clearer physical context',
    text: 'See how assets, issues and evidence relate to each other physically, not only as separate records.',
  },
  {
    title: 'Shared view across teams',
    text: 'Give different disciplines one visual reference point even when the source data sits in different systems.',
  },
  {
    title: 'Faster review and coordination',
    text: 'Support clearer discussion, quicker review and stronger decision-making on live delivery work.',
  },
]

const workSteps = [
  'Review your current systems and data',
  'Connect data and establish the 3D context',
  'Configure AssetScape around your workflows',
  'Deliver, refine and support ongoing use',
]

const projectProof = [
  {
    title: 'National Highways Contract Completion Toolkit (CCMT)',
    subtitle: 'Configurable platform supporting Contract Completion and Handback workflows at scale.',
    body:
      "AssetScape provides the platform for National Highways' CCMT system, supporting Handback across eight DBFO schemes. The system manages 2,900 km of pavements and more than 160,000 assets, including 1,100 structures, within one connected platform used by National Highways, DBFOs and advisers.",
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
    subtitle: 'Data cleansing and reconciliation of technology assets across the National Highways network.',
    body:
      'The project produced a cleansed and reconciled dataset for more than 250,000 roadside technology assets across the Strategic Road Network in England, giving National Highways sub-metre accurate locations and better information to support operations and maintenance contracts.',
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
      'AssetScape supported an assured post-construction asset inventory covering every above-ground asset on the upgraded M3 corridor between junctions 2 and 4a. The inventory was developed off-site through a desktop approach.',
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
          <p>CONNECTED ASSET DATA IN ONE WORKING 3D ENVIRONMENT</p>
        </div>

        <div className="cover-title-grid">
          <div>
            <h1>AssetScape</h1>
            <p className="cover-subtitle">
              Connect systems, asset data and spatial information in one working 3D environment
            </p>
          </div>
          <p className="cover-audience">
            Used across roads, rail, water and public infrastructure by asset owners, managing agents, DBFOs, local authorities and delivery partners.
          </p>
        </div>

        <figure className="cover-hero">
          <img src={projectCCMTScreenshot1} alt="AssetScape 3D infrastructure corridor with connected asset data" />
          <figcaption>Work with asset records, evidence and spatial context in one navigable 3D environment.</figcaption>
        </figure>

        <div className="cover-intro-grid">
          <div className="cover-intro">
            <p className="brochure-section-label">About</p>
            <h2>One 3D environment for connected infrastructure data</h2>
            <p>
              AssetScape&reg; brings together asset records, GIS, surveys, engineering information, imagery and documents in one usable environment. Teams can review assets in context, manage evidence, support decisions and run practical workflows without replacing the systems already in place.
            </p>
            <p>
              We work with your teams from initial data setup through to delivery and ongoing support, configuring the platform around your data, processes and operational needs.
            </p>
          </div>

          <aside className="cover-principles">
            <p className="brochure-section-label">In practice</p>
            <div>
              <h3>Reduce switching between systems</h3>
              <p>Bring connected data into one place so teams can review it faster and with less manual cross-checking.</p>
            </div>
            <div>
              <h3>See assets in physical context</h3>
              <p>Combine spatial data, surveys, imagery and records so teams can understand the asset, its condition and its surroundings together.</p>
            </div>
            <div>
              <h3>Configure around live workflows</h3>
              <p>Support handback, inspection, review, verification and operational workflows without forcing every client into the same model.</p>
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

      <BrochurePageFrame headerLabel="Working with existing systems">
        <div className="page-heading">
          <p className="brochure-section-label">Working with existing systems</p>
          <h2>Work with existing systems, not against them</h2>
        </div>

        <section className="wrapper-lead brochure-no-break">
          <div>
            <p>
              AssetScape works alongside your asset management, GIS, engineering and data systems as a working 3D layer.
              It brings information from multiple sources into one visual environment where teams can review assets,
              capture comments and decisions, and move outcomes back into connected processes.
            </p>
            <div className="brochure-callout">
              <p>Built to work with your current systems, not replace them</p>
            </div>
          </div>
          <img src={wrapperDiagramImg} alt="How AssetScape wraps your existing systems" />
        </section>

        <section className="connection-panel brochure-no-break">
          <div>
            <p className="brochure-section-label">What it connects</p>
            <p>Information that teams often have to review across separate systems, files and interfaces.</p>
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
              The Structures Viewer gives teams a clear 3D view of structures and their components, with tools for
              inspection, review, comments and supporting evidence.
            </p>
            <ul className="brochure-check-list">
              <li>Explore structures in 3D, including exploded views of individual elements.</li>
              <li>Add comments, inspection notes, attachments and supporting photos directly against the relevant structure or component.</li>
              <li>Keep evidence and discussion tied to the correct asset rather than spread across separate files and systems.</li>
            </ul>
          </div>
          <img src={structuresViewerImg} alt="AssetScape Structures Viewer" />
        </section>
      </BrochurePageFrame>

      <BrochurePageFrame headerLabel="Delivery and Implementation">
        <section className="context-feature brochure-no-break">
          <img src={building3dWorldImg} alt="Building the 3D world from LiDAR, point clouds and imagery" />
          <div>
            <p className="brochure-section-label">Creating context</p>
            <h2>No 3D environment yet?<br />
              We can create the working context</h2>
            <p>
              Some clients already have strong geospatial or model data. Others do not. AssetScape can work in both
              situations. Where a usable 3D environment does not yet exist, we can help create the visual and spatial
              context needed to get started.
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
            <p className="brochure-section-label">Data foundation for AI and automation</p>
            <h2>Better data foundation for AI and automation</h2>
            <p>
              Organisations are asking how current data and systems can support AI and automation. In practice, the main
              barrier is usually fragmented, inconsistent or hard-to-use data. AssetScape improves structure and context
              so future search, automation and review workflows are easier to support.
            </p>
            <ul className="brochure-check-list">
              <li>Connect records, documents, imagery and location context in one environment.</li>
              <li>Improve how data is structured, accessed and reviewed for future search, automation and decision-support workflows.</li>
            </ul>
          </article>

          <article className="brochure-panel brochure-no-break">
            <p className="brochure-section-label">Delivery approach</p>
            <h2>Built around real delivery needs, with faster turnaround</h2>
            <p>
              AssetScape is designed to support delivery, not force every client into the same rigid model. We shape
              modules and workflows around the actual requirement and respond quickly when needs change.
            </p>
            <ul className="brochure-check-list">
              <li>Build targeted modules for specific review, inspection or operational needs.</li>
              <li>Adapt quickly when new workflow, data source or interface needs emerge.</li>
              <li>Work with a smaller local team that understands infrastructure and asset data challenges.</li>
            </ul>
          </article>
        </section>

        <section className="work-steps brochure-no-break">
          <div>
            <p className="brochure-section-label">Typical implementation path</p>
            <h2>How implementation typically works</h2>
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
          <p className="brochure-section-label">Used on live infrastructure projects</p>
          <h2>Proven on live infrastructure projects</h2>
          <p>
            AssetScape has been used across live handback, data cleansing, asset verification and review workflows, from
            large-scale programmes to focused corridor-level tasks.
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
            <h2>Request a short demo of AssetScape for your use case.</h2>
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
