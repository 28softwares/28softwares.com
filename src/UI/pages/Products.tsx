import { Button } from '@/UI/shadcn/ui/button'
import { CheckCircle, ChevronRight } from 'lucide-react'
import { productsData } from '@/constants/products'

export function ProductsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-24">
        {productsData.map((product, index) => (
          <div
            key={product.id}
            className={`grid md:grid-cols-2 gap-8  ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
          >
            <div
              className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
            >
              <h2 className="text-4xl font-bold">{product.title}</h2>
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="btn-group flex gap-4">
                <Button variant="secondary" className="group">
                  Request for Demo
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button className="group">
                  Request for Quotation
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div
              className={`bg-primary w-[420px] max-w-[1312px] rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:col-start-1' : ''}`}
            >
              <img
                src={product.image}
                alt={`${product.title} preview`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
