import { SERVICE_BACK_TO, SERVICE_BACK_LABEL } from './service-3d-visualisation'
import serviceConsultancyImage1 from '../assets/services/serviceConsultancy1.jpg'
import serviceConsultancyImage2 from '../assets/services/serviceConsultancy2.png'
import serviceConsultancyImage3 from '../assets/services/serviceConsultancy3.png'

export const S_Consultancy = {
  title: 'Consultancy',
  subtitle: 'Creating and deploying bespoke solutions to unlock your data',
  images: [serviceConsultancyImage1, serviceConsultancyImage2, serviceConsultancyImage3],
  sections: [
    {
      h: 'Introduction',
      p: [
        'Building software and developing utilities that integrate data and or connect to existing systems.',
        'Providing a wrapper to enable users to make better use of data for analysis and assessment.',
        'Creating tools that enable users to harness the latest technology that benefit your business delivery.',
      ],
    },
    {
      h: 'Capabilities',
      p: [
        'Creative thinkers, utilising the latest technology and AssetScape’s approach to developing solutions that deliver.',
        'Provide ad-hoc support to clients managing data including asset, operational and condition datasets.',
        'Create innovative solutions, working with clients to deploy robust solutions that meet the needs of end users.',
        'Deliver flexible solutions that can be configured, added to and is future proofed.',
        'Provide specific data and systems solutions advice and support to get the best out of your data – Creating cost effective solutions.',
      ],
    },
    {
      h: 'Delivery',
      p: [
        'AssetScape’s vision is to provide clients with practical tools that enable them to do the job quicker, easier and to a higher quality.',
        'Over the last 10 years, AssetScape has been successfully deploying solutions and supported clients with ad-hoc support, data mining, data cleansing, data analytics that includes the development and implementation of small utilities through to large scale systems.',
        'Our team are experienced team having knowledge of the domain, including asset datasets, systems architecture and understanding the end user requirements. This also includes solutions driven engineers who can get the most out of the digital technology, monitoring and using new technologies as appropriate.',
        'We strive for innovative solutions and constantly are developing and testing are ideas to bring to market. Examples of this can be seen in the delivery of innovative utilities such as CCTV, Structure viewer and Road Markings Analysis Tool.',
      ],
    },
  ],
  backTo: SERVICE_BACK_TO,
  backLabel: SERVICE_BACK_LABEL,
  markerLabel: 'Service',
}
