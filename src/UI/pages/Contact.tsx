import { companyDataConstants } from '@/constants/companyData.constant'
import { Input } from '@/UI/shadcn/ui/input'
import { Button } from '@/UI/shadcn/ui/button'

export const Contact = () => {
  return (
    <div className="h-[50vh] flex  flex-col justify-center items-center gap-8">
      <h1 className="lg:text-5xl text-xl font-bold">
        Let's <span className=" underline">create</span> something together.
      </h1>
      <div className="flex gap-2">
        <Input placeholder="28softwares@gmail.com" />
        <a href={`mailto:${companyDataConstants.email}`}>
          <Button>Send Email</Button>
        </a>
      </div>
    </div>
  )
}
