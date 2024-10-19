import images from '@/constants/image.constant'

export enum projectNames {
  'UNIPLAN' = 'Uniplan',
  'INVESTIAA' = 'Investiaa',
  'A_TO_Z_ECOMMERCE' = 'A to Z Ecommerce',
}
export const projectList = [
  {
    title: 'Uniplan',
    description:
      'AI based Mobile App for teachers for creating and sharing curriculum and lesson plans.',
    type: 'Mobile Application',
    link: 'https://play.google.com/store/apps/details?id=com.uniplan',
    image: images.uniplanLogo,
    year: 2024,
  },
  {
    title: 'Investiaa',
    description:
      'An online ecosystem for startups, connecting incubators, angel investors, venture capitalists, and academia for seamless access and growth.',
    link: 'https://www.investiaa.com/',
    type: 'Web Application',
    image: images.investiaaImage,
    year: 2024,
  },
]
