import { SERVICE_BACK_TO, SERVICE_BACK_LABEL } from './service-3d-visualisation'
import serviceStrategicAssetManagementImage1 from '../assets/services/serviceStrategicAssetManagement1.jpg'
import serviceStrategicAssetManagementImage2 from '../assets/services/serviceStrategicAssetManagement2.jpg'
import serviceStrategicAssetManagementImage3 from '../assets/services/serviceStrategicAssetManagement3.jpg'

export const S_Strategic = {
  title: 'Strategic Asset Management',
  subtitle: 'Translate asset intelligence into clear investment decisions.',
  images: [
    serviceStrategicAssetManagementImage1,
    serviceStrategicAssetManagementImage2,
    serviceStrategicAssetManagementImage3,
  ],
  sections: [
    {
      h: 'Focus areas',
      p: [
        'Lifecycle planning aligned to risk and performance utilising links to Decision Support Tools.',
        'Scenario modelling with configurable scoring and weighting.',
        'Portfolio dashboards for leadership reporting.',
      ],
    },
    {
      h: 'How AssetScape helps',
      p: [
        'Spatialise programme data to highlight hotspots and dependencies.',
        'Blend condition, utilisation and risk indicators into a single workspace.',
        'Export ready-made packs for governance and funding boards.',
      ],
    },
    {
      h: 'Result',
      p: [
        'Empower teams with a transparent evidence base for investment planning and prioritisation.',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}
