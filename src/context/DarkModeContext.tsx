import { createContext, useContext, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const DarkModeContext = createContext({
	isDarkMode: false,
	toggleTheme: () => {}
})

type ContextProp = {
	children: React.ReactNode
}

function DarkModeProvider({ children }: ContextProp) {
	const [isDarkMode, setIsDarkMode] = useLocalStorage(
		window.matchMedia("(prefers-color-scheme:dark)").matches,
		"isDarkMode"
	)

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark-mode")
			document.documentElement.classList.remove("light-mode")
		} else {
			document.documentElement.classList.add("light-mode")
			document.documentElement.classList.remove("dark-mode")
		}
	}, [isDarkMode])

	function toggleTheme() {
		setIsDarkMode((currTheme: any) => !currTheme)
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</DarkModeContext.Provider>
	)
}

function useDarkMode() {
	const context = useContext(DarkModeContext)

	if (context === undefined)
		throw new Error(
			"You are using DarkModeContext wrong, please verify your code"
		)

	return context
}
export { DarkModeProvider, useDarkMode }
