import projectCctvScreenshot1 from '../assets/projects/projectCctvScreenshot1.jpg'
import projectCctvScreenshot2 from '../assets/projects/projectCctvScreenshot2.jpg'
import projectCctvScreenshot3 from '../assets/projects/projectCctvScreenshot3.jpg'
import projectCctvScreenshot4 from '../assets/projects/projectCctvScreenshot4.jpg'

export const P_CCTV = {
  title: 'Assessing the Suitability of Proposed CCTV Camera Sites',
  subtitle: 'Clients use AssetScape to assess the suitability of proposed CCTV camera sites, eliminating the need for many site visits.',
  sections: [
    {
      h: 'Background and objectives',
      p: 'AssetScape supported National Highways delivery partners who needed to validate proposed camera positions for strategic road network upgrades without repeated site visits, accelerating approvals for new roadside CCTV coverage.',
      image: projectCctvScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: [
        'AssetScape supported National Highways delivery partners who needed to validate proposed camera positions for UK strategic road network upgrades without repeated site visits.',
      ],
      image: projectCctvScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'Configured refined mobile and aerial LiDAR, OS MasterMap, orthographic imagery and Google Street View into a navigable 3D world.',
        'Applied AssetScape Line of Sight tooling with camera templates, adjustable settings and interactive assets. Generated polar imagery outputs showing percentage visibility, screen height and depth for each location.',
        'Generated polar imagery outputs showing percentage visibility, screen height and depth for each location.',
      ],
      image: projectCctvScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Line-of-sight analytics documented coverage rationale for scheme reviews and safety cases.',
        'New analysts achieved productive assessments after a few hours of onboarding, supporting nationwide roll-out.',
      ],
      image: projectCctvScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}
