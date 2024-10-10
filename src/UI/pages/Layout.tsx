import { Navbar } from './Navbar'

type Props = {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  )
}
