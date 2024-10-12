import { ArrowUpRight, AwardIcon } from 'lucide-react'
import { Button } from '@/UI/shadcn/ui/button'
import { Checkbox } from '../shadcn/ui/checkbox'

const topProduct = {
  name: 'Ecommerce',
  description:
    'Ecommerce platforms provide easy navigation, detailed product info, customer reviews, and smooth transactions with various payment options and real-time inventory updates',
  image:
    'https://cdn.pixabay.com/photo/2020/08/03/10/00/laptop-5459712_1280.png',
  features: [
    'User-friendly navigation, search, and product filtering options, including site search, product filters, and footer navigation.',
    'Rich product presentation with  reviews, wishlists, detailed descriptions, high-quality images, and pricing info with discounts.',
    'Advanced shopping features like dynamic filters, automatic inventory updates, social share buttons, multiple payment/shipping methods, and shopping cart functionality.',
  ],
}
export const TopProduct = () => {
  return (
    <div className="grid  gap-4">
      <div className="flex justify-between items-center pb-4">
        <Button
          variant={'secondary'}
          className="rounded-full p-4 text-lg flex gap-4"
        >
          <AwardIcon /> Our #1 Sold Product
        </Button>
        <Button
          variant={'ghost'}
          className="text-primary flex items-center gap-2 hover:-translate-y-2 hover:translate-x-2"
        >
          View All <ArrowUpRight />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="grid ">
          <h3 className="text-xl ">{topProduct.description}</h3>
          <div className="grid w-[94%] gap-4">
            {topProduct.features.map((feature, index) => {
              return (
                <p className="flex gap-3 lg:text-lg tracking-wide">
                  <Checkbox
                    key={index}
                    className="rounded-full size-5 mt-1"
                    checked
                  />{' '}
                  {feature}
                </p>
              )
            })}
          </div>
          <div className="flex gap-4 p-6">
            <Button variant={'secondary'}>Request for Demo</Button>
            <Button>Request for Quotation</Button>
          </div>
        </div>
        <div className="img bg-primary p-8 rounded-lg">
          <img
            src={topProduct.image}
            className="w-[420px] max-w-[1312px] rounded-lg "
          />
        </div>
      </div>
    </div>
  )
}

export default TopProduct
