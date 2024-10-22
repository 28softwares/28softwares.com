import { ImageConstants } from '../image.constant'
import { projectNames } from './projects'

interface Member {
  name: string
  role: string
  projectsInvolved: string[]
  image: string
}

const members: Member[] = [
  {
    name: 'Sushil Gyawali',
    role: 'Mobile App Developer',
    projectsInvolved: [projectNames.UNIPLAN],
    image: ImageConstants.MEMBERS.sushilGyawali,
  },
  {
    name: 'Grishmin Karki',
    role: 'Frontend Developer',
    projectsInvolved: [projectNames.A_TO_Z_ECOMMERCE],
    image: ImageConstants.MEMBERS.grishminKarki,
  },
  {
    name: 'Simon Chaudhary',
    role: 'Mobile App Developer',
    projectsInvolved: [projectNames.INVESTIAA],
    image: ImageConstants.MEMBERS.simonChaudhary,
  },
  {
    name: 'Nirmal Neupane',
    role: 'Fullstack Developer',
    projectsInvolved: [projectNames.INVESTIAA, projectNames.A_TO_Z_ECOMMERCE],
    image: ImageConstants.MEMBERS.nirmalNeupane,
  },
  {
    name: 'Prayukta Mishra',
    role: 'UI/UX Designer',
    projectsInvolved: [projectNames.A_TO_Z_ECOMMERCE],
    image: ImageConstants.MEMBERS.prayuktaMishra,
  },
]
members.sort((a, b) => b.projectsInvolved.length - a.projectsInvolved.length)

export { members }
