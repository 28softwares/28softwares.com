import TopProduct from '../organisms/TopProduct'
import { Contact } from './Contact'
import { Hero } from './Hero'
import { Layout } from './Layout'

export const Home = () => {
  return (
    <Layout>
      <div className="container p-8 min-h-screen overflow-hidden">
        <Hero />
        {/* Top 1 Product showcase section  */}
        <TopProduct />
        <Contact />
      </div>
    </Layout>
  )
}
