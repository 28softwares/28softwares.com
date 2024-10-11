import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { Button } from '@/UI/shadcn/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/UI/shadcn/ui/sheet'
import { navLinks } from '@/constants/navlinks'
import { ModeToggle } from './mode-toggle'

export const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-background border-b z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex gap-2 items-center justify-center"
            >
              <img src={'/28.svg'} className="size-12" />
              <span className="text-2xl font-bold text-black dark:text-white">
                28Softwares
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  to={link.link}
                  key={link.name}
                  className="text-secondary-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild title="open sheet">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.link}
                      className="text-secondary-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="p-2">
                  <ModeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
