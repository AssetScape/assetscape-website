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
        'An innovative approach was deployed via the AssetScape platform to manage data collation and cleansing using 3D technology. All other approaches utilised 2D ArcView-based solutions with no database connectivity to assets and relied on tile-based systems. AssetScape was able to deliver a \'World Management System\' using its platform. This enabled connectivity of assets throughout the project area, allowing the processing team to work dynamically across all parts of the network in line with the delivery plan.',
        'The system enabled the processing team to create, verify, and audit assets within a dedicated data-cleansing module. The module enabled the project manager to track progress, answer questions, and sign off every asset. All decisions were tracked as part of the timeline feature, allowing them to be reviewed at any time.',
        'The system included an emulator that mirrored the client\'s checking system for loading in accordance with schema and data dictionary requirements. This enabled AssetScape to validate data prior to loading it into the client\'s system.',
        'The unique 3D view allowed users to integrate topography into the data-cleansing process and efficiently validate ground levels for assets and exit points.',
        'Provided a mobile solution connected to the project’s instance of AssetScape, enabling the survey team to carry out ad-hoc validation of outputs and record any missing or unusual assets when required (though this was not necessary during the project).',
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
