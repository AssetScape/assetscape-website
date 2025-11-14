import projectNhDrainageScreenshot1 from '../assets/projects/projectNhDrainageScreenshot1.png'
import projectNhDrainageScreenshot2 from '../assets/projects/projectNhDrainageScreenshot2.png'
import projectNhDrainageScreenshot3 from '../assets/projects/projectNhDrainageScreenshot3.png'
import projectNhDrainageScreenshot4 from '../assets/projects/projectNhDrainageScreenshot4.png'

export const P_NH_DR = {
  title: 'National Highways Drainage – Area 2',
  subtitle: 'Drainage asset identification, verification and risk insights.',
  sections: [
    {
      h: 'Background and objectives',
      p: [
        'Produced a complete drainage asset dataset aligned to National Highways inventory standards. National Highways required consistent records for drainage assets to support risk-based maintenance and flooding mitigation. AssetScape were part of the delivery team that proposed an innovative approach to collate and data cleanse drainage inventories for the Area 2 National Highways region.',
        'Covered approx. 300,000 point, linear and polygon assets with 50no attributes.',
      ],
      image: projectNhDrainageScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: [
        'Innovative approach deployed via AssetScape platform to manage data collation, cleansing using 3D. All other approaches utilised 2D ArcView based solutions with no DB connectivity of assets and a tile-based solution. AssetScape were able to create a ’World Management System’ using our platform. This enabled connectivity of assets throughout the project area, enabling the process team to dynamically work on all parts of the network in line with delivery plan.',
        'The system enables the process team to create, verify and audit assets in a specific data cleansing module. The module enables the Project manager to track progress, answer questions and sign off every asset. All decision is tracked as part of the timeline feature, so can be reviewed at any time.',
        'The system included an emulator that mirrored the clients checking system for loading in accordance with schema and data dictionary requirements. This enable AssetScape to validate data prior to loading into the client\'s system.',
        'Unique 3D view allowed users to integrate topography into the data cleansing process. Able to validate ground levels for assets and exit points efficiently.',
        'Also provided mobile solution connected to AssetScape’s instance of the project. If required, survey team could carry out ad-hoc validation of output and if required invent any obscure asset inventory (not required).',
      ],
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
        'Enabled regional teams to target high-risk assets with reliable condition and connectivity information.',
        'Delivered export-ready files and audit packs to evidence compliance with Design Manual for Roads and Bridges guidance.',
        'Based on previous approach, AssetScape enabled:',
        'Higher Quality outputs that included link database entries for ongoing queries.',
        'Reduced process time from 9 months to 3 months.',
        'Reduced costs by 50%',
      ],
      image: projectNhDrainageScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}
