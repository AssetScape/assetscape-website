import projectHeTechScreenshot1 from '../assets/projects/projectHeTechScreenshot1.png'
import projectHeTechScreenshot2 from '../assets/projects/projectHeTechScreenshot2.png'
import projectHeTechScreenshot3 from '../assets/projects/projectHeTechScreenshot3.png'
import projectHeTechScreenshot4 from '../assets/projects/projectHeTechScreenshot4.png'

export const P_HE_Tech = {
  title: 'Highways England Technology',
  subtitle: 'Data cleansing for 25,000 technology assets for the NorthEast RCC Technology Area',
  sections: [
    {
      h: 'Background and objectives',
      p: 'Highways England’s technology team required sub-metre accurate locations and condition intelligence to underpin operations and maintenance contracts across more than 25,000 roadside assets.',
      image: projectHeTechScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: 'AssetScape orchestrated survey outputs and stakeholder reviews, running a repeatable workflow that digitised equipment, reconciled changes and secured approvals before publishing updates.',
      image: projectHeTechScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'Combined AVIS and OS imagery, LiDAR point clouds and OS mapping within a tailored AssetScape schema.',
        'Applied point-cloud feature recognition and 3D visualisation to digitise equipment to within less than a metre.',
        'Implemented structured processing methodology, audit protocols and output specifications for downstream systems.',
      ],
      image: projectHeTechScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Produced a cleansed and reconciled dataset for more than 25,000 roadside technology assets across the North East RCC.',
        'Delivered assurance packs with traceable edits and review history, enabling technology service providers to plan interventions using a single, trusted source of asset data.',
      ],
      image: projectHeTechScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}
