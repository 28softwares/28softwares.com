import React from "react"

interface Theme {
    backgroundColor: string
    color: string
    modeClass: string
}

interface ThemeContextType {
    dark: boolean
    theme: Theme
    toggleTheme: () => void
}

const themes = {
    dark: {
        backgroundColor: "bg-black bg-noise",
        color: "text-slate-500",
        modeClass: "dark", 
    },
    light: {
        backgroundColor: "",
        color: "text-slate-900",
        modeClass: "light", 
    },
}

const initialState: ThemeContextType = {
    dark: true, 
    theme: themes.dark,
    toggleTheme: () => {},
}

const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = React.useState(initialState.dark)

    React.useEffect(() => {
        const storedDark = localStorage.getItem("dark")
        const isDark = storedDark ? JSON.parse(storedDark) : initialState.dark
        setDark(isDark)

        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [])

        const toggleTheme = () => {
            const isDark = !dark
            localStorage.setItem("dark", JSON.stringify(isDark))
            setDark(isDark)

            if (isDark) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }

    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ theme, dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
