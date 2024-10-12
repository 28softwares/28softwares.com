import { Layout } from '@/UI/pages/Layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: () => (
    <>
      <Layout>Products</Layout>
    </>
  ),
})
