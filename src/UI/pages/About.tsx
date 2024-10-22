import { Card, CardHeader, CardContent } from '../shadcn/ui/card'
import { Layout } from './Layout'
import { members } from '@/constants/data/members'

export const About = () => {
  return (
    <Layout>
      <div className="container mt-10">
        <span className="text-primary text-4xl">The</span> named behind
        28Softwares is that, we are making 28 different software products for
        different areas (such as Hotel lines, schools, Hospitals etc.).
        <br />
        These softwares are generally MIS, ERP or CRM which are powered by
        AI/ML. Besides our in house projects, we also work for
        out-source/freelance projects doing Web Development, Mobile App
        Development, and other software development services.
      </div>
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
                  No.of Involved Projects &nbsp;
                  <span
                    title="Points is no.of involved projects"
                    className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                  >
                    {member.projectsInvolved.length}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
