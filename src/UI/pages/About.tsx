import { Button } from '../shadcn/ui/button'
import { Card, CardHeader, CardContent } from '../shadcn/ui/card'
import { Layout } from './Layout'
import { members } from '@/constants/data/members'

export const About = () => {
  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Amazing peoples who are/have working/worked with us
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
                  {member.projectsInvolved.length > 0 && (
                    <div className="mt-4 flex  flex-col space-x-4">
                      Projects Involved :
                      <div className="flex gap-1">
                        {member.projectsInvolved.map((project, index) => (
                          <Button variant="secondary" key={index}>
                            {project}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
