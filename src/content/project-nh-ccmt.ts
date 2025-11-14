import projectNhCcmtScreenshot1 from '../assets/projects/projectCCMTScreenshot1.png'
import projectNhCcmtScreenshot2 from '../assets/projects/projectCCMTScreenshot2.png'
import projectNhCcmtScreenshot3 from '../assets/projects/projectCCMTScreenshot3.png'
import projectNhCcmtScreenshot4 from '../assets/projects/projectCCMTScreenshot4.png'

export const P_NH_CCMT = {
  title: 'National Highways CCMT System',
  subtitle: 'A configurable platform supporting Contract Completion and Handback workflows at scale.',
  sections: [
    {
      h: 'Background and objectives',
      p: [
        'Private Finance Initiative contracts fund and deliver public assets through private capital. Design, Build, Finance and Operate companies hold concessions on parts of the Strategic Road Network. Handback is the process at the end of a concession when the operator returns the asset to the authority in an agreed condition with defined residual life and evidence.  ',
        'The Contract Completion Management Toolkit supports Handback across eight DBFO schemes. It holds about 1,100 structures, 160,000 other assets and 2,900 km of pavements in one connected platform used by National Highways, DBFOs and advisers. More than ten organisations and over one hundred named users work to a common process with an audit trail. The system aligns inventory, condition, assessments, evidence and decisions so teams can agree what exists, where it is, what state it is in and what remains to be done.  ',
        'The brief was a 3D representation of the real world so the client could manage every asset and element through Handback. AssetScape establishes one version of the truth by collating the inventory and verifying it so teams can confirm what and where, reconcile conflicts and bring the inventory to a handover-ready state early in the programme. ',
      ],
      image: projectNhCcmtScreenshot1,
    },
    {
      h: 'Delivery approach',
      p: [
        'AssetScape connects client and third-party data and renders it in 3D along the linear network. In CCMT we used existing base layers and aligned incoming sources without custom modelling so teams could work in one place. CCMT runs the end-to-end process on a single source of truth. Teams plan and track work, attach evidence to assets, resolve RFIs, and manage decisions and documents. Users reached productive use after a few hours. We co-designed the workflow with National Highways and DBFO users and adjusted it in short cycles. The platform accepts new steps, rules and screens without rebuild. ',
        'Teams operate at the level needed for the task. They group assets by route, chainage, type or ownership, record one decision for the group and apply exceptions where evidence differs. Each decision links to the asset, location, evidence and user, with a full timeline for audit. The mobile solution feeds field photos, notes and measurements straight into CCMT with the correct links and time stamp. Users scan corridors in 3D, open records and progress items, which reduces site visits. ',
      ],
      image: projectNhCcmtScreenshot2,
    },
    {
      h: 'Technical detail',
      p: [
        'AssetScape loaded LiDAR, mapping, imagery, Street View, source databases, inventory and condition data, and evidence packs from National Highways and DBFOs. Scenes auto-load from these connected sources, which cuts effort to create and maintain datasets. Data flows to Tableau Online so programme leads see progress by route and asset class with current throughput, blockers and gaps. ',
        'CCMT includes tools for assessment. The road markings module uses machine learning on downward-facing camera images to build a dataset, classify defects and drive responses. The structures 3D viewer supports element-level inspection, defect review and capture of observations and comments, all tied to the correct component and location. TRACS Pavement Viewer aligns pavement data to the route with high-definition photo review. ',
        'Automated data verification cross-checks inventories, surveys and works records so conflicts can be resolved with a recorded decision on the item. Rule-based assessment reduces manual effort and focuses specialists on items that matter. For example, pavement construction matching compares lane parameters and proposes outcomes that users can accept or amend, with the audit trail noting the basis. Cross-mapping links data down to element level and back to the linear reference and contract record, while the platform keeps connections to client and supplier systems and can incorporate new AI methods as they mature. ',
      ],
      image: projectNhCcmtScreenshot3,
    },
    {
      h: 'Outcomes and benefits',
      p: [
        'Route and structures reviews occur online which reduces site visits. Evidence indicates a near 50 percent reduction in repeat site visits on sampled routes within the first three years.  ',
        'Evidence packs are attached to the record at the right location and time which moves milestone evidence pack creation from days to minutes once teams adopt the workflow.  ',
        'Decision cycles shorten because RFIs, comments and files sit on the same record and users work to one version of the truth.  ',
        'Required fields, validation and an audit trail cut rework and remove duplicate uploads, submissions and lost records as users operate from the same source.  ',
        'Tableau Online reporting shows progress, blockers and gaps by route and asset class so managers act on current data and can convert insights into actions. ',
      ],
      image: projectNhCcmtScreenshot4,
    },
  ],
  backTo: { pathname: '/', hash: '#projects' },
  backLabel: '← Back to Projects',
  markerLabel: 'Project',
}
