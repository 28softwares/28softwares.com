import { Contact } from './Contact'
import { Hero } from './Hero'
import { Layout } from './Layout'

export const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen overflow-hidden">
        <Hero />
        {/* Top 1 Product showcase section  */}
        <Contact />
      </div>
    </Layout>
  )
}
