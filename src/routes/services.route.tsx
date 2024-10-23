import { Faq } from '@/UI/organisms/Faq'
import { Contact } from '@/UI/pages/Contact'
import { Layout } from '@/UI/pages/Layout'
import Projects from '@/UI/pages/Projects'
import { Services } from '@/UI/pages/Services'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: () => (
    <>
      <Layout>
        <Services />
        <Projects />
        <Faq />
        <Contact />
      </Layout>
    </>
  ),
})
