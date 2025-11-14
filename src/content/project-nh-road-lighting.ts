import projectNhRoadLightingScreenshot1 from '../assets/projects/projectNhRoadLightingScreenshot1.png'
import projectNhRoadLightingScreenshot2 from '../assets/projects/projectNhRoadLightingScreenshot2.png'
import projectNhRoadLightingScreenshot3 from '../assets/projects/projectNhRoadLightingScreenshot3.png'
import projectNhRoadLightingScreenshot4 from '../assets/projects/projectNhRoadLightingScreenshot4.png'

export const P_NH_RL = {
  title: 'National Highways Road Lighting',
  subtitle: 'Inventory verification and condition intelligence for lighting assets.',
  sections: [
    {
      h: 'Background and objectives',
      p: 'National Highways asked AssetScape to reconcile disparate lighting records and quantify asset condition across the strategic road network to steer renewal and maintenance planning.',
      image: projectNhRoadLightingScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: 'We coordinated regional data owners and contractors, pushing updates through agreed workflows so the shared inventory reflected verified changes and commentary.',
      image: projectNhRoadLightingScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'Fused LiDAR, night-time imagery, existing inventory feeds and site records within AssetScape.',
        'Applied rule-based checks and technician review to validate asset attributes and condition states.',
        'Structured outputs for export into contractor maintenance and design systems.',
      ],
      image: projectNhRoadLightingScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Delivered a verified lighting inventory with condition intelligence to guide renewal and maintenance planning.',
        'Produced prioritised intervention lists backed by traceable evidence packs and defensible data for funding bids.',
      ],
      image: projectNhRoadLightingScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}
