import projectM3Screenshot1 from '../assets/projects/projectM3Screenshot1.jpg'
import projectM3Screenshot2 from '../assets/projects/projectM3Screenshot2.jpg'
import projectM3Screenshot3 from '../assets/projects/projectM3Screenshot3.jpg'
import projectM3Screenshot4 from '../assets/projects/projectM3Screenshot4.png'

export const P_M3 = {
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
