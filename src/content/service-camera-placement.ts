import { SERVICE_BACK_TO, SERVICE_BACK_LABEL } from './service-3d-visualisation'
import serviceCctvImage1 from '../assets/services/serviceCCTV1.jpg'
import serviceCctvImage2 from '../assets/services/serviceCCTV2.jpg'
import serviceCctvImage3 from '../assets/services/serviceCCTV3.jpg'

export const S_CameraPlacement = {
  title: 'Camera Placement – CCTV Module',
  subtitle: 'Design effective CCTV schemes using virtual line-of-sight analysis.',
  images: [serviceCctvImage1, serviceCctvImage2, serviceCctvImage3],
  sections: [
    {
      h: 'Inputs',
      p: [
        '3D corridor models generated from LiDAR, imagery and mapping.',
        'Template libraries covering fixed, PTZ and specialist camera hardware.',
        'Digital terrain data to capture gradients, cuttings and structures.',
      ],
    },
    {
      h: 'Analysis',
      p: [
        'Simulate line-of-sight and coverage envelopes with adjustable mounting heights.',
        'Compare alternative pole and bracket locations inside the 3D world.',
        'Produce visibility heatmaps and polar plots for stakeholders.',
        'CCTV Module includes template for carrying out technical assessment in accordance with standards for design.',
      ],
    },
    {
      h: 'Outcome',
      p: [
        'Generate evidence packs and camera schedules to accelerate approvals and installation.',
        'No onsite requirement - “survey once, use many times”',
        'Develop many designs and options for approval.',
        'Safe environment to design – No on-site surveys required',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}
