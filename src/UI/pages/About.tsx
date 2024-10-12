import { Linkedin, Github } from 'lucide-react'
import { Button } from '../shadcn/ui/button'
import { Card, CardHeader, CardContent } from '../shadcn/ui/card'
import { Layout } from './Layout'
import { members } from '@/constants/members'

export const About = () => {
  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Amazing peoples who have working/worked with us
            <span className="text-primary">.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  <div className="mt-4 flex space-x-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-muted-foreground"
                      >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
