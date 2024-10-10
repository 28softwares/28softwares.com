import { Card, CardContent } from '@/components/shadcn/ui/card'
import { Layout } from './Layout'
import images from '../../constants/image.constant'
export const Projects = () => {
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
    <Layout>
      <h4 className="text-4xl font-extrabold text-center dark:text-white p-5 mt-10">
        💻👨‍💻
      </h4>
      {projectList.map((project) => (
        <div className="p-10 flex flex-col lg:flex-row gap-x-10">
          <img
            className=" lg:w-[800px] h-[400px] md:h-[600px] border-4 rounded-3xl object-cover w-2/4"
            src={project.image}
          />
          <div className=" col-8 self-center text-center w-2/4">
            <a href={project.link}>
              <h1 className="text-5xl md:text-8xl uppercase underline dark:text-white font-extrabold">
                {project.title}
              </h1>
            </a>
            <Card className="text-center border-dashed dark:text-gray-300 h-12 py-2 font-ubuntu text-lg font-extrabold">
              <CardContent>{project.type}</CardContent>
            </Card>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </Layout>
  )
}
