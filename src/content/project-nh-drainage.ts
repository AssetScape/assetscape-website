import projectNhDrainageScreenshot1 from '../assets/projects/projectNhDrainageScreenshot1.png'
import projectNhDrainageScreenshot2 from '../assets/projects/projectNhDrainageScreenshot2.png'
import projectNhDrainageScreenshot3 from '../assets/projects/projectNhDrainageScreenshot3.png'
import projectNhDrainageScreenshot4 from '../assets/projects/projectNhDrainageScreenshot4.png'

export const P_NH_DR = {
  title: 'National Highways Drainage',
  subtitle: 'Drainage asset identification, verification and risk insights.',
  sections: [
    {
      h: 'Background and objectives',
      p: 'National Highways required consistent records for drainage assets to support risk-based maintenance and flooding mitigation across the network.',
      image: projectNhDrainageScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: 'AssetScape led a coordinated verification campaign, aligning survey outputs and stakeholder reviews so drainage data could be trusted for programme planning.',
      image: projectNhDrainageScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'Led imagery-based identification supported by LiDAR, survey data and existing schema definitions.',
        'Reconciled and aligned records to National Highways drainage data structures and location referencing.',
        'Embedded QA/QC with audits, comment reviews and acceptance workflows inside AssetScape.',
      ],
      image: projectNhDrainageScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Produced a complete drainage asset dataset aligned to National Highways inventory standards.',
        'Enabled regional teams to target high-risk assets with reliable condition and connectivity information, supported by export-ready files and audit packs.',
      ],
      image: projectNhDrainageScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}
