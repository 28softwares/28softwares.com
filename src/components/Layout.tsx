import {  useContext } from "react"
import { ThemeContext } from "@/hooks/ThemeContext"
import { Navbar } from "./Navbar"

type Props = {
  children?: React.ReactNode
}

export const Layout = ({children}:Props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme.backgroundColor} ${theme.color} ${theme.modeClass}`}> 
      <Navbar />
      {children}
    </div>
  )
}
