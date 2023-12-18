import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomeContainer from "./components/HomeContainer"
import CountryDetail from "./components/CountryDetail"
import GlobalStyles from "./style/GlobalStyle"
import { DarkModeProvider } from "./context/DarkModeContext"

const router = createBrowserRouter([
	{ path: "/", element: <HomeContainer /> },
	{ path: "/country/:id", element: <CountryDetail /> }
])

export default function App() {
	return (
		<div className="App">
			<DarkModeProvider>
				<GlobalStyles />
				<RouterProvider router={router} />
			</DarkModeProvider>
		</div>
	)
}
