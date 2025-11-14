import type { To } from 'react-router-dom'

import service3DVisualisationImage1 from '../assets/services/service3DVis1.jpg'
import service3DVisualisationImage2 from '../assets/services/service3DVis2.jpg'
import service3DVisualisationImage3 from '../assets/services/service3DVis3.jpg'

export const SERVICE_BACK_TO: To = { pathname: '/', hash: '#services' }
export const SERVICE_BACK_LABEL = '← Back to Services'

export const S_3D = {
  title: '3D Visualisation',
  subtitle: 'Build immersive, navigable 3D scenes that place every asset in context.',
  images: [service3DVisualisationImage1, service3DVisualisationImage2, service3DVisualisationImage3],
  sections: [
    {
      h: 'Integrated data sources',
      p: [
        'Combine LiDAR, photogrammetry and BIM to construct true-to-life environments.',
        'Overlay mapping, CAD and attribute data with precise georeferencing.',
        'Blend aerial and terrestrial imagery for full corridor coverage.',
        'Used as a wrapper for existing systems and datasets or standalone system.',
      ],
    },
    {
      h: 'Capabilities',
      p: [
        'Interrogate assets with measurement, slicing and annotation tools.',
        'Switch viewpoints instantly to support design, maintenance and stakeholder reviews.',
        'Export presentation-ready imagery and video flythroughs.',
      ],
    },
    {
      h: 'Delivery',
      p: [
        'AssetScape tailors visualisations to your asset classes and workflows, ensuring key information is surfaced with minimal navigation.',
        'Can be used for infrastructure asset management, flooding assessments, line of sight assessments and much more.',
        'Easy to create scenes and overlay / link datasets to the scene. Scenes are auto created, so need for labour intensive scene building using many resources.',
        'Intuitive Ui to manage scenes including route manager to build specific routes of interest. Group assets and operational enquiries around the route to enable efficient coordination and management within AssetScape’s platform.',
        'Create routes that are 100’s km’s in length once - travel along the route in a car, train, boat or fly through looking at topography, vegetation, assets, operational data (documents, queries, flags, risk areas etc).',
        'Note: Scenes are as accurate as the data loaded. Can be mm precise depending on the quality of the LiDAR, Ortho-imagery. Scene can be built with accurate data, open-source data and merged automatically.',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}
