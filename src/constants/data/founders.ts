import { ImageConstants } from '../image.constant'

interface Founders {
  name: string
  position: string
  image: string
}

export const founders: Founders[] = [
  {
    name: 'Saroj Dahal',
    position: 'Founder and CTO',
    image: ImageConstants.MEMBERS.sarojDahal,
  },
  {
    name: 'Suraj Dahal',
    position: 'Managing Director',
    image: ImageConstants.MEMBERS.surajDahal,
  },
]
