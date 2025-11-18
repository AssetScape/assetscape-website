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
        'DBFOs (Design, Build, Finance, and Operate companies) are a form of Private Finance Initiative (PFI) that hold concessions to manage and operate assets across parts of the UK’s Strategic Road Network. Collectively, these DBFOs are responsible for approximately 10% of the National Highways network.',
        'Handback is the process by which a DBFO formally returns control of assets to National Highways at the end of its contract and demonstrates that these assets meet the required standards of condition and residual life.',
        'Our client’s brief was to develop a system (CCMT) capable of managing the Handback process by storing inventory and condition data, while also providing tools to support various assessment processes.',
        'AssetScape was chosen because it could deliver the core requirements and was able to grow and develop with the project (over seven years). AssetScape has successfully met all project requirements and has provided valuable tools to complement technical assessments. It is designed to be flexible to the needs of the customer and can adapt dynamically to change, responding to requests and updates in less time than the industry standard.',
        'The base system includes functionality to generate 3D and ortho imagery, along with interconnected data for display and analysis. The client required every element of the Handback process to be managed through CCMT, beginning with the creation of a 3D representation of the real world (data was readily available from the client).',
        'Collating the core inventory as the backbone of the assessment was essential. This began with DBFO data, which created a single version of the truth, used as a reference point to agree on condition and residual life at Handback.',
        'CCMT supports Handback across eight DBFO schemes. It manages 2,900 km of pavements and over 160,000 assets, including 1,100 structures, within a single connected platform used by National Highways, DBFOs, and advisers. More than ten organisations and over one hundred system users work to a common process with a full audit trail maintained within the system. The system aligns inventory, condition, assessments, evidence, and decisions, enabling teams to agree on what exists, where it is, what state it is in, and what remains to be done.',
      ],
      image: projectNhCcmtScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: [
        "AssetScape provides the platform for National Highways' CCMT system, utilising additional modules that have been configured specifically for the project.",
        'It provides connectivity across various sources of data and external systems and renders the result in 3D scenes built along the linear network (including linear referencing converted to real-world assets). In the National Highways deployment (Contract Completion Management Toolkit), the authority already held the base data: 3D terrain surfaces, OS mapping and aerial imagery. AssetScape connected initial asset information from National Highways’ systems and combined it with third-party datasets in different formats (provided by DBFOs and their suppliers). The platform loaded, aligned and enabled all of it without custom modelling (no CAD/BIM modellers required), so teams could work in one place.',
        'The key deliverable is to provide a platform that enables all stakeholders to manage every asset through the Handback process. CCMT is configured to align with the Handback process enabling inventory, condition data, Handback assessment and ultimately the return of assets to National Highways.',
        'CCMT manages the end-to-end process with the single source of truth approach. Teams plan and track asset management tasks, demonstrate condition and residual life, attach evidence referenced to assets, exchange and resolve Requests For Information (RFIs), and manage documents (referenced to assets or groups) and decisions. New users reach productive use after a few hours of training, showcasing how easy it is to embrace the AssetScape platform.',
      ],
      image: projectNhCcmtScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'LiDAR, mapping, imagery, Street View, inventory, condition data, and evidence packs from National Highways and DBFOs were loaded into AssetScape. 3D scenes were auto-generated from these disparate sources, reducing the effort required to create and maintain working datasets. Data flows out of AssetScape and into Tableau Online, allowing programme leads to see progress by route and asset class, along with current throughput, blockers, and gaps.',
        'CCMT includes tools for assessment. The road markings module uses machine learning on downward-facing camera images to build a dataset, classify defects, and drive responses. The structures 3D viewer supports element-level inspection, defect review, and the capture of observations and comments — all tied to the correct component and location. The TRACS Pavement Viewer aligns pavement data to the route with high-definition photo review.',
        'Automated data verification cross-checks inventories, surveys, and works records so conflicts can be resolved with a recorded decision on each item. Rule-based assessment reduces manual effort and focuses specialists on items that matter. For example, pavement construction matching compares lane parameters and proposes outcomes that users can accept or amend, with the audit trail noting the basis. Cross-mapping links data down to element level and back to the linear reference and contract record, while the platform maintains connections to client and supplier systems and can incorporate new AI methods as they mature.',
      ],
      image: projectNhCcmtScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Initial setup of the routes and scenes is performed automatically, significantly reducing the time required to create the project.',
        'Road and structures reviews take place online, which reduces site visits. Evidence shows a near 50 percent reduction in repeat site visits on sampled routes within the first three years.',
        'Evidence packs are attached to records at the correct location and time, reducing milestone evidence pack creation from days to minutes once teams adopt the workflow.',
        "Decision cycles shorten because RFIs, comments, and files sit on the same record, and users work to 'one version of the truth.'",
        'Required fields, validation, and an audit trail reduce rework and eliminate duplicate uploads, submissions, and lost records, as users operate from the same source.',
        'Tableau Online reporting shows progress, blockers, and gaps by route and asset class, enabling managers to act on current data and turn insights into actions.',
        'Create a fully compliant inventory of assets – without the system, the data was held by eight DBFOs in varying states.',
        'AssetScape’s intuitive and user-friendly interface means that, after only a few hours of training, users who had never used AssetScape before were able to use the system effectively.',
      ],
      image: projectNhCcmtScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}
