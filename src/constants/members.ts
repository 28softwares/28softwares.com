interface Member {
  name: string
  role: string
  image: string
  linkedin: string
  github: string
}

export const members: Member[] = [
  {
    name: 'Jane Doe',
    role: 'Frontend Developer',
    image: '/placeholder.svg?height=400&width=400',
    linkedin: 'https://www.linkedin.com/in/janedoe',
    github: 'https://github.com/janedoe',
  },
  {
    name: 'John Smith',
    role: 'Backend Developer',
    image: '/placeholder.svg?height=400&width=400',
    linkedin: 'https://www.linkedin.com/in/johnsmith',
    github: 'https://github.com/johnsmith',
  },
  {
    name: 'Emily Brown',
    role: 'UX Designer',
    image: '/placeholder.svg?height=400&width=400',
    linkedin: 'https://www.linkedin.com/in/emilybrown',
    github: 'https://github.com/emilybrown',
  },
  {
    name: 'Michael Johnson',
    role: 'Project Manager',
    image: '/placeholder.svg?height=400&width=400',
    linkedin: 'https://www.linkedin.com/in/michaeljohnson',
    github: 'https://github.com/michaeljohnson',
  },
]
