import { ThemeProvider } from "./hooks/ThemeContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/pages/Home"

export const App = () => {
  return (
    <ThemeProvider>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    </ThemeProvider>
  )
}
