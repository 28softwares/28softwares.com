import { Layout } from '@/UI/pages/Layout'
import { ProductsPage } from '@/UI/pages/Products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: () => (
    <>
      <Layout>
        <ProductsPage />
      </Layout>
    </>
  ),
})
