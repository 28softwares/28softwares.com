interface Member {
  name: string
  role: string
  projectsInvolved: string[]
  image: string
}

const baseURL =
  'https://raw.githubusercontent.com/28softwares/28softwares.com--assets/refs/heads/main/images/members/'

export const members: Member[] = [
  {
    name: 'Sushil Gyawali',
    role: 'Mobile App Developer',
    projectsInvolved: ['Uniplan'],
    image: `${baseURL}/SushilGyawali_MobileAppDeveloper.png`,
  },
  {
    name: 'Grishmin Karki',
    role: 'Frontend Developer',
    projectsInvolved: ['A to Z Ecommerce'],
    image: `${baseURL}/GrishminKarki_FrontendDeveloper.png`,
  },
  {
    name: 'Simon Chaudhary',
    role: 'Mobile App Developer',
    projectsInvolved: ['Investiaa'],
    image: `${baseURL}/SimonChaudhary_BackendDeveloper.png`,
  },
  {
    name: 'Nirmal Neupane',
    role: 'Fullstack Developer',
    projectsInvolved: ['Investiaa', 'UniPlan'],
    image: `${baseURL}/NirmalNeupane_FullStackDeveloper.png`,
  },
]
