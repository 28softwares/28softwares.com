import { ImageConstants } from '../image.constant'

export enum projectNames {
  'UNIPLAN' = 'Uniplan',
  'INVESTIAA' = 'Investiaa',
  'A_TO_Z_ECOMMERCE' = 'A to Z Ecommerce',
  'DBL_INSURANCE' = 'DBL Insurance',
}

export const projectList = [
  {
    title: projectNames.UNIPLAN,
    description:
      'AI based Mobile App for teachers for creating and sharing curriculum and lesson plans.',
    type: 'Mobile Application',
    link: 'https://play.google.com/store/apps/details?id=com.uniplan',
    image: ImageConstants.PROJECTS.uniplan,
    year: 2024,
  },
  {
    title: projectNames.INVESTIAA,
    description:
      'An online ecosystem for startups, connecting incubators, angel investors, venture capitalists, and academia for seamless access and growth.',
    link: 'https://investiaa.com/',
    type: 'Web Application',
    image: ImageConstants.PROJECTS.investiaa,
    year: 2024,
  },
  {
    title: projectNames.A_TO_Z_ECOMMERCE,
    description:
      'An end-to-end e-commerce platform for small businesses to sell their products online.',
    link: 'https://atozcleaningsupplies.com.au/',
    type: 'Web Application',
    image: 'https://atozcleaningsupplies.com.au/assets/white-logo-CVYLiP2S.png',
    year: 2024,
  },
  {
    title: projectNames.DBL_INSURANCE,
    description: 'Insurance Web Portal',
    link: 'https://dbl-insurance.ca',
    type: 'Website',
    image:
      'https://prolink.insure/wp-content/uploads/2022/05/Disability-Insurance-04.png',
    year: 2025,
  },
].sort((a, b) => b.year - a.year)
// returns project list sorted by ascending year
