import { companyDataConstants } from '@/constants/data/companyData.constant'
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
          <hr />
          <div className="space-y-6">
            <p className="flex gap-1 leading-7">
              <span>
                <p className="font-medium">Head Office:</p>
                <p>
                  {companyDataConstants.address[0]},
                  {companyDataConstants.country}
                </p>
                <p> {companyDataConstants.email[0]}</p>
                <p>{companyDataConstants.phone[0]} </p>
              </span>
            </p>

            <p className="flex gap-1 leading-7">
              <span>
                <p className="font-medium">Australia Office:</p>
                <p>{companyDataConstants.address[1]}</p>
                <p> {companyDataConstants.email[1]}</p>

                <p> {companyDataConstants.phone[1]}</p>
              </span>
            </p>
          </div>
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
                className="hover:underline"
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
        Copyright © {companyDataConstants.foundedYear[0]} -{' '}
        {new Date().getFullYear()} | 28Softwares Pvt. Ltd.
      </div>
    </footer>
  )
}
