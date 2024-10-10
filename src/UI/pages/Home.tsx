import { Contact } from './Contact'
import { Services } from './Services'
import { Hero } from './Hero'
import { Layout } from './Layout'

export const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen overflow-hidden">
        <Hero />
        <Services />
        <Contact />
      </div>
    </Layout>
  )
}
