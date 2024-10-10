import { FloatingNav } from '@/components/aceternity/floating-navbar'
import { ModeToggle } from '@/components/mode-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

export const Navbar = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Home',
      link: '/',
    },
  ]
  return (
    <>
      <FloatingNav navItems={navLinks} />
    </>
  )
}
