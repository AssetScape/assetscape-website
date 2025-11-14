import { SERVICE_BACK_TO, SERVICE_BACK_LABEL } from './service-3d-visualisation'
import serviceDataCleansingImage1 from '../assets/services/serviceDataCleansing1.jpg'
import serviceDataCleansingImage2 from '../assets/services/serviceDataCleansing2.jpg'
import serviceDataCleansingImage3 from '../assets/services/serviceDataCleansing3.jpg'

export const S_DataCleansing = {
  title: 'Data Cleansing',
  subtitle: 'Reconcile inventories and records into a single dependable dataset.',
  images: [
    serviceDataCleansingImage1,
    serviceDataCleansingImage2,
    serviceDataCleansingImage3,
  ],
  sections: [
    {
      h: 'Approach',
      p: [
        'AssetScape data cleansing modules 2D and 3D versions -',
        '2D - Utilises mapping and imagery to cleanse data in a 2D environment',
        '',
        'The system enables the process team to create, verify and audit assets in a specific data cleansing module. The module enables the Project manager to track progress, answer questions and sign off every asset. All decision is tracked as part of the timeline feature, so can be reviewed at any time.',
        'The system enables users to:',
        'Review existing schemas and align to AssetScape taxonomies.',
        'Blend automated validation with expert QA/QC for critical assets.',
        'Capture commentary, discrepancies and approvals in an auditable log.',
        'Client system emulators checkers – Create to meet project requirements',
        'The module enables the Project manager to track progress, answer questions and sign off every asset. All decision is tracked as part of the timeline feature, so can be reviewed at any time.',
        'Innovative approach deployed via AssetScape platform to manage data collation, cleansing using 3D. All other approaches utilised 2D ArcView based solutions with no DB connectivity of assets and a tile-based solution. AssetScape can provide a ’World Management System’ using our platform. This enables connectivity of assets throughout the project area, enabling the process team to dynamically work on all parts of the network in line with delivery plan.',
        '3D - Utilises LiDAR, DTM, mapping and imagery to cleanse data in a 3D environment',
        'Unique 3D view allows users to integrate topography into the data cleansing process. Assets float in 3D aspect to make it clearer when for multi-layer merging.',
        'Provision of mobile solution connected to AssetScape’s instance of the project on request – on-site verification and additional surveying.',
      ],
    },
    {
      h: 'Data inputs',
      p: [
        'Historic inventories, spreadsheets and databases.',
        'Site observations, as-built drawings and survey outputs.',
        'Feedback from maintainers and operations teams.',
      ],
    },
    {
      h: 'Outcome',
      p: [
        'Deliver a cleansed, schema-compliant dataset ready for import into AMS, GIS or BIM platforms.',
        'Clients provided with access to live outputs on progress via Power BI or Tableau reporting tools.',
        'Create validated data loaders and scripts to ensure compliant data was loaded back to host system.',
        'Fully auditable data cleansing datasets that can be reviewed, intergrated and used to maintain or add to in the future.',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}
