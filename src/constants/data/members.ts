import { projectNames } from './projects'

interface Member {
  name: string
  role: string
  projectsInvolved: string[]
  image: string
}

const baseURL =
  'https://raw.githubusercontent.com/28softwares/28softwares.com--assets/refs/heads/main/images/members/'

const members: Member[] = [
  {
    name: 'Sushil Gyawali',
    role: 'Mobile App Developer',
    projectsInvolved: [projectNames.UNIPLAN],
    image: `${baseURL}/SushilGyawali_MobileAppDeveloper.png`,
  },
  {
    name: 'Grishmin Karki',
    role: 'Frontend Developer',
    projectsInvolved: [projectNames.A_TO_Z_ECOMMERCE],
    image: `${baseURL}/GrishminKarki_FrontendDeveloper.png`,
  },
  {
    name: 'Simon Chaudhary',
    role: 'Mobile App Developer',
    projectsInvolved: [projectNames.INVESTIAA],
    image: `${baseURL}/SimonChaudhary_BackendDeveloper.png`,
  },
  {
    name: 'Nirmal Neupane',
    role: 'Fullstack Developer',
    projectsInvolved: [projectNames.INVESTIAA, projectNames.A_TO_Z_ECOMMERCE],
    image: `${baseURL}/NirmalNeupane_FullStackDeveloper.png`,
  },
]
members.sort((a, b) => b.projectsInvolved.length - a.projectsInvolved.length)

export { members }
