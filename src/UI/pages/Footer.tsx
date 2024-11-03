import { Link } from '@tanstack/react-router'
import { Button } from '../shadcn/ui/button'
export function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(20,1fr)] opacity-10 pointer-events-none">
        {[...Array(800)].map((_, i) => (
          <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <span className="text-[10rem] font-bold text-[#ADFF2F] leading-none ">
              28
            </span>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="text-[#ADFF2F] mb-4">ABOUT</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/products">OUR PRODUCTS</Link>
                </li>
                <li>
                  <Link to="/services">SERVICES</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#ADFF2F] mb-4">CONNECT</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://twitter.com/28softwares" target="_blank">
                    TWITTER
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/28softwares"
                    target="_blank"
                  >
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a href="https://github.com/28softwares" target="_blank">
                    GITHUB
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#ADFF2F] mb-4">LEGAL</h3>
              <ul
                className="space-y-2"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <li>
                  <Link to="/">SUPPORT</Link>
                </li>
                <li>
                  <Link to="/">CONTACT</Link>
                </li>
                <li>
                  <Link to="/">TERMS & CONDITIONS</Link>
                </li>
                <li>
                  <Link to="/">PRIVACY POLICY</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#ADFF2F] text-black px-4 py-2 mb-4 md:mb-0 "
          >
            BACK TO TOP
          </Button>
          <p>
            &copy; 2024 28SOFTWARES - Building, 28 Softwares for 28 Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
