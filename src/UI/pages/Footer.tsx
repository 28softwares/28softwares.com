import { companyDataConstants } from '@/constants/data/companyData.constant'
import { MapPin } from 'lucide-react'
import { navLinks } from '@/constants/navlinks'
import { Link } from '@tanstack/react-router'

export const Footer = () => {
  return (
    <footer className="p-8 md:p-12 lg:p-16  bg-secondary">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 md:justify-items-center gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">
            28Softwares Pvt. Ltd.
          </h2>
          <article>Building tomorrows digital experience today.</article>

          <p className="flex gap-2">
            <MapPin className="size-5" />
            <span>
              {companyDataConstants.address}, {companyDataConstants.country}
            </span>
          </p>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight uppercase text-primary">
            Follow Us
          </h2>
          <div className="flex flex-col gap-2">
            {companyDataConstants.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="quick-links">
          <h2 className="text-2xl font-semibold tracking-tight pb-2 uppercase text-primary">
            Quick Links
          </h2>
          <ul className="space-y-2">
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <Link to={navLink.link} className="hover:underline">
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex  justify-center p-4  text-center">
        Copyright © {companyDataConstants.foundedYear} -{' '}
        {new Date().getFullYear()} | 28Softwares Pvt. Ltd.
      </div>
    </footer>
  )
}
