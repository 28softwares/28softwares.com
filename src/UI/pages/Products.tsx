import { Button } from '@/UI/shadcn/ui/button'
import { CheckCircle, ChevronRight } from 'lucide-react'
import { productsData } from '@/constants/data/products'
import { useEffect } from 'react'

export function ProductsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <center>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-primary text-black mb-10">
          Our 28 Softwares
        </h1>
      </center>
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24">
        {productsData.map((product, index) => (
          <div
            key={product.id}
            className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${
              index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            <div
              className={`space-y-4 sm:space-y-6 ${
                index % 2 === 1 ? 'md:col-start-2' : ''
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {product.title}
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="secondary" className="group w-full sm:w-auto">
                  Request for Demo
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button className="group w-full sm:w-auto">
                  Request for Quotation
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div
              className={`bg-primary max-w-[420px] rounded-lg overflow-hidden ${
                index % 2 === 1 ? 'md:col-start-1' : ''
              }`}
            >
              <img
                src={product.image}
                alt={`${product.title} preview`}
                className="w-full   h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
