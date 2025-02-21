import { founders } from '@/constants/data/founders'
import { Card, CardHeader, CardContent } from '../shadcn/ui/card'
import { Layout } from './Layout'
import { members } from '@/constants/data/members'

export const About = () => {
  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className=" flex flex-col gap-2  md:justify-center items-start md:items-center text-center ">
            <p className="font-bold text-xl text-primary">About Us</p>
            <p className="text-center w-full py-4">
              <span className="text-primary text-4xl">The</span> named behind
              28Softwares is that, we are making 28 different software products
              for different areas (such as Hotel lines, schools, Hospitals
              etc.). These softwares are generally MIS, ERP or CRM which are
              powered by AI/ML. Besides our in house projects, we also work for
              out-source/freelance projects doing Web Development, Mobile App
              Development, and other software development services.
            </p>
            {/* CEO/CTO Directo photo section */}
            <p className="text-left  text-lg lg:text-4xl font-bold pb-5">
              Meet our Founders and Members.
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full px-8">
                {founders.map((founder, index) => (
                  <Card key={index} className="overflow-hidden mx-auto">
                    <CardHeader className="p-0">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </CardHeader>
                    <CardContent className="p-4 text-center">
                      <h3 className="text-xl font-semibold">{founder.name}</h3>
                      <p className="text-muted-foreground">
                        {founder.position}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <p className="text-left  text-lg lg:text-4xl font-bold pb-8 mt-10">
              Amazing peoples who are/have working/worked with us
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
                    loading="lazy"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  No.of Involved Projects &nbsp;
                  <span
                    title="Points is no.of involved projects"
                    className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 cursor-pointer"
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
