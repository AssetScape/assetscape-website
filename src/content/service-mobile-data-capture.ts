import { SERVICE_BACK_TO, SERVICE_BACK_LABEL } from './service-3d-visualisation'
import serviceMobileDataCaptureImage1 from '../assets/services/serviceMobileDataCapture1.png'
import serviceMobileDataCaptureImage2 from '../assets/services/serviceMobileDataCapture2.png'
import serviceMobileDataCaptureImage3 from '../assets/services/serviceMobileDataCapture3.png'

export const S_MobileData = {
  title: 'Mobile Data Capture',
  subtitle: 'Keep inventories current.',
  images: [
    serviceMobileDataCaptureImage1,
    serviceMobileDataCaptureImage2,
    serviceMobileDataCaptureImage3,
  ],
  sections: [
    {
      h: 'Capabilities',
      p: [
        'High-resolution imagery synchronised with GNSS positioning. ',
        'Highly configurable UI – Create for user, assets, inspection types. ',
        'Intuitive UI design to enable quick and easy access to data and logging – Set up what you need to see before you survey. ',
        'Vehicle and backpack-based capture options with calibrated sensors. ',
        'Optional - Vehicle and backpack-based capture options with calibrated sensors. And LiDAR integration for dense point-cloud creation. ',
      ],
    },
    {
      h: 'Workflow',
      p: [
        'Plan survey routes, tasks and naming conventions inside AssetScape.',
        'Capture observations with configurable forms and prompts.',
        'Upload data to the platform for validation, enrichment and publishing.',
        'Wrap around solution for existing asset management systems – Enhanced functionality and use, moving away from windows-based screen layouts.',
      ],
    },
    {
      h: 'Deliverables',
      p: [
        'Structured datasets, QA reports and viewer-ready scenes ready for downstream systems.',
        'Connectivity via app to AssetScape and other systems.',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}
