import { Faq } from '@/UI/organisms/Faq'
import { Layout } from '@/UI/pages/Layout'
import { Projects } from '@/UI/pages/Projects'
import { Services } from '@/UI/pages/Services'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: () => (
    <div>
      <Layout>
        <Services />
        <Projects />
        <Faq />
      </Layout>
    </div>
  ),
})
