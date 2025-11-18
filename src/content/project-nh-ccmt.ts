import projectNhCcmtScreenshot1 from '../assets/projects/projectCCMTScreenshot1.png'
import projectNhCcmtScreenshot2 from '../assets/projects/projectCCMTScreenshot2.png'
import projectNhCcmtScreenshot3 from '../assets/projects/projectCCMTScreenshot3.png'
import projectNhCcmtScreenshot4 from '../assets/projects/projectCCMTScreenshot4.png'

export const P_NH_CCMT = {
  title: 'National Highways Contract Completion Toolkit (CCMT) System',
  subtitle: 'A configurable platform supporting Contract Completion and Handback workflows at scale.',
  sections: [
    {
      h: 'Background and objectives',
      p: [
        'Private Finance Initiative contracts fund and deliver public assets through private capital. Design, Build, Finance and Operate companies hold concessions on parts of the Strategic Road Network. The size of the project equates to 10% of the National Highways road network.',
        "The client's brief was to provide a system that could manage the Handback process. A system that could hold inventory, condition data, and deliver the tools to carry out the Handback assessment process.",
        'AssetScape was chosen because it could deliver the core requirements and could also grow and develop with the project (7 years). It has successfully aligned with the needs of the project and provided useful tools to compliment the needs of the technical assessments. AssetScape is set up to be flexible to the needs of the customer needs and can adapt to change dynamically. Responding to requests and changes in all cases in less time than the industry standard.',
        'The base system included the ability to generate 3D and ortho-imagery along with the interconnectivity of data for display and utilisation. The client required every element managed through the HB process, starting with the creation of a 3D representation of the real world (Data was readily available from the client).',
        'Collating the inventory as the backbone to the assessment was essential and that started with collating the inventory from the DBFO Cos to create “One version of the Truth” as placeholder to agree the condition and residual life at Handback.',
        'CCMT supports Handback across 8 DBFO schemes. It holds 1,100 structures, 160,000 other assets and 2,900 km of pavements in one connected platform used by National Highways, DBFOs and advisers. More than ten organisations and over one hundred named users work to a common process with an audit trail that is held in the system. The system aligns inventory, condition, assessments, evidence and decisions so teams can agree what exists, where it is, what state it is in and what remains to be done.',
      ],
      image: projectNhCcmtScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: [
        'AssetScape provides the platform for National Highways CCMT system having additional modules that have been configured specifically for the project.',
        'Provide connectivity across various sources of data and external systems and renders the result in 3D scenes built along the linear network (including linear referencing converted to a real-world assets). In the National Highways (Contract Completion Management Toolkit) deployment, the authority already held the base data: 3D terrain surfaces, OS mapping and aerial imagery. AssetScape connected initial asset information from National Highways’ systems and combined it with third-party datasets in different formats (provided by DBFOs and their suppliers). The platform loaded, aligned and enabled all of it without custom modelling (no CAD/BIM modellers required), so teams could work in one place.',
        'The key deliverable is to provide a platform that enables all stakeholders to manage every asset through the HB process. CCMT is configured to align with the HB process enabling inventory, condition data, HB assessment and ultimately the HB of assets back to NH.',
        'CCMT manages the end-to-end process with the single source of truth approach. Teams plan and track asset management tasks, demonstrate condition and residual life, attach evidence referenced to assets, exchange and resolve Requests For Information (RFIs), and manage documents (referenced to assets or groups) and decisions. New users reached productive use after a few hours of training, showcasing how easy it is to “get into data world” with AssetScape platform.',
      ],
      image: projectNhCcmtScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'AssetScape loaded LiDAR, mapping, imagery, Street View, source databases, inventory and condition data, and evidence packs from National Highways and DBFOs. Scenes auto-load from these connected sources, which cuts effort to create and maintain datasets. Data flows to Tableau Online so programme leads see progress by route and asset class with current throughput, blockers and gaps.',
        'CCMT includes tools for assessment. The road markings module uses machine learning on downward-facing camera images to build a dataset, classify defects and drive responses. The structures 3D viewer supports element-level inspection, defect review and capture of observations and comments, all tied to the correct component and location. TRACS Pavement Viewer aligns pavement data to the route with high-definition photo review.',
        'Automated data verification cross-checks inventories, surveys and works records so conflicts can be resolved with a recorded decision on the item. Rule-based assessment reduces manual effort and focuses specialists on items that matter. For example, pavement construction matching compares lane parameters and proposes outcomes that users can accept or amend, with the audit trail noting the basis. Cross-mapping links data down to element level and back to the linear reference and contract record, while the platform keeps connections to client and supplier systems and can incorporate new AI methods as they mature.',
      ],
      image: projectNhCcmtScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Initial set up of the routes and scenes is carried out automatically, hence reducing the time required to create the project significantly.',
        'Road and structures reviews occur online which reduces site visits. Evidence indicates a near 50 percent reduction in repeat site visits on sampled routes within the first three years.',
        'Evidence packs are attached to the record at the right location and time which moves milestone evidence pack creation from days to minutes once teams adopt the workflow.',
        'Decision cycles shorten because RFIs, comments and files sit on the same record and users work to one version of the truth.',
        'Required fields, validation and an audit trail cut rework and remove duplicate uploads, submissions and lost records as users operate from the same source.',
        'Tableau Online reporting shows progress, blockers and gaps by route and asset class so managers act on current data and can convert insights into actions.',
        'Create a fully compliant inventory of assets – Without the system the data was held by 8no DBFOs in various states.',
        'AssetScape’s intuitive and user-friendly interface means that with only a few hours of training users who had never used AssetScape before, were using the system.',
      ],
      image: projectNhCcmtScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}
