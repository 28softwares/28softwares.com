import { Button } from '@/UI/shadcn/ui/button'
import { CheckCircle, ChevronRight } from 'lucide-react'
import { productsData } from '@/constants/data/products/products'
import { useEffect, useState } from 'react'
import { Dialog, DialogContent } from '../shadcn/ui/dialog'

import { PopupModal } from 'react-calendly'

export function ProductsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const [open, setOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<unknown>()
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <center>
        <h1 className="text-4xl sm:text-2xl md:text-3xl font-bold  bg-primary text-black mb-10  rounded-md cursor-pointer w-1/3">
          List of 28 Softwares
        </h1>
      </center>
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24 mt-10">
        {productsData.map((product, index) => (
          <div
            key={product.title + '_' + new Date()}
            className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${
              index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            <div
              className={`space-y-4 sm:space-y-6 ${
                index % 2 === 1 ? 'md:col-start-2' : ''
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {index + 1} <span className="text-primary">.</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {product.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {product.features.map((feature, featureIndex) => (
                  <>
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  </>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="secondary"
                  className="group w-full sm:w-auto"
                  onClick={() => {
                    setOpen(!open)
                    setSelectedPackage(product.packages)
                  }}
                >
                  View Packages
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  className="group w-full sm:w-auto"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  Request for Quotation
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <PopupModal
                  url="https://calendly.com/28softwaresnp/30min"
                  open={isCalendlyOpen}
                  onModalClose={() => setIsCalendlyOpen(false)}
                  rootElement={document.getElementById('root')!}
                />
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

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {productsData.length + 1}....{28} <br />
          UNDER DEVELOPMENT
          <span className="text-primary">.</span>
        </h1>
      </div>

      {/* Dialog */}

      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent className="max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 p-4">
            {/* @ts-ignore */}
            {selectedPackage &&
              Object.values(selectedPackage).map((pkg) => (
                <div
                  // key={pkg.name}
                  className="border rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow"
                >
                  <div className="text-xl font-bold">{pkg.name}</div>
                  <div className="text-2xl font-bold text-primary">
                    {/* {pkg.price} */}
                  </div>
                  <ul className="space-y-2">
                    {/* @ts-ignore */}
                    {pkg.features.map((feature) => (
                      <li
                        key={feature.slice(0, 5)}
                        className="flex items-start space-x-2 sm:space-x-3"
                      >
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="w-full mt-4">Select {pkg.name}</Button> */}
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
