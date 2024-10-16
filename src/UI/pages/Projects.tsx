import { projectList } from '@/constants/data/projects'
import { Globe } from 'lucide-react'
import { Button } from '../shadcn/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../shadcn/ui/card'
import { Badge } from '../shadcn/ui/badge'

export function Projects() {
  return (
    <div className="container pt-36">
      <h2 className="font-bold text-5xl mb-8">
        Our Past Works<span className="text-primary">.</span>
      </h2>
      <div className=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {projectList.map((project, index) => (
          <div>
            <Card
              className="max-w-[420px] static h-[420px] flex flex-col justify-between bg-primary"
              key={index}
            >
              <CardHeader key={index}>
                <CardTitle className="flex justify-between text-black">
                  {project.title}
                  <p className="text-sm">
                    <Badge variant={'secondary'}>{project.type}</Badge>
                  </p>
                </CardTitle>
                <CardDescription className="text-black">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="overflow-hidden p-4 object-contain">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg object-fit"
                />
              </CardContent>
              <CardFooter className="pt-4">
                <a href={project.link} target="_blank">
                  <Button
                    variant="secondary"
                    disabled={!project.link}
                    size={'sm'}
                  >
                    View Live
                    <span className="p-2">
                      <Globe />
                    </span>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
