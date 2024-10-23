import { Button } from '../shadcn/ui/button'
import { Card, CardHeader, CardContent } from '../shadcn/ui/card'
import { Layout } from './Layout'
import { members } from '@/constants/members'
import { Contact } from './Contact'

export const About = () => {
  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className=" flex flex-col gap-2  md:justify-center items-start md:items-center text-center ">
            <p className="font-bold text-xl text-primary">About Us</p>
            <p className="text-center w-full py-4">
              The named behind 28Softwares is that, we are making 28 different
              software products for different areas (such as Hotel lines,
              schools, Hospitals etc.). These softwares are generally MIS, ERP
              or CRM which are powered by AI/ML. Besides our in house projects,
              we also work for out-source/freelance projects doing Web
              Development, Mobile App Development, and other software
              development services.
            </p>
            <p className="text-left  text-lg lg:text-4xl font-bold pb-8">
              Amazing People, working with us
            </p>
          </div>
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

      <Contact />
    </Layout>
  )
}
