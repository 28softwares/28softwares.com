import { PinContainer } from '@/UI/aceternity/3d-pin'
import images from '@/constants/image.constant'
import { Layout } from './Layout'

export function Projects() {
  const projectList = [
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
      image: images.investiaaLogo,
      year: 2024,
    },
  ]
  return (
    <div className="container">
      <h2 className="font-bold text-5xl  p-8">
        Projects<span className="text-primary">.</span>
      </h2>
      <div className="h-[40rem] w-full grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {projectList.map((project) => (
          <div>
            <PinContainer
              title={project.link}
              href={project.link}
              containerClassName="-left-[8%]"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{project.description}</span>
                </div>

                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 ">
                  <img src={project.image} className="object-cover " />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}
