import { Button } from '@/components/ui/button'
import { companyDataConstants } from '@/constants/companyData.constant'
import { Linkedin, MapPin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="p-10">
      <div className="flex gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">CONTACT US</h2>
          <p>{companyDataConstants.address}</p>
          <p className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Bhaktapur, Nepal
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">FOLLOW US</h2>
          <div className="flex gap-4">
            <a
              href={companyDataConstants.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex  justify-center font-ubuntu pb-10 text-center">
        Copyright © {companyDataConstants.foundedYear} -{' '}
        {new Date().getFullYear()} | 28Softwares Pvt. Ltd.
      </div>
    </footer>
  )
}
