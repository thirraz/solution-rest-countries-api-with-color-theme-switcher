import { MdOutlineDarkMode } from "react-icons/md"
import { FcGlobe } from "react-icons/fc"
import styled from "styled-components"
import { useDarkMode } from "../context/DarkModeContext"
import { Link } from "react-router-dom"

const Nav = styled.nav`
	max-height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: var(--md-radius);
	padding-inline: 20px;
	box-shadow: var(--box-shadow);
	justify-self: start;
	min-width: 100%;
`

const ToggleTheme = styled.button`
	background-color: var(--color-bg);
	color: var(--color-text);
	padding: 0.8rem 1rem;
	border-radius: var(--sm-radius);
	display: flex;
	gap: 1.5rem;
	align-items: center;
	border: none;
	transition: background-color 0.3s ease-out;

	& svg {
		font-size: 2rem;
	}

	cursor: pointer;

	&:hover {
		background-color: #d4d4d4;
	}

	&:active {
		animation: var(--click-animation);
	}
`

const Logo = styled(Link)`
	font-size: 4rem;
	display: flex;
	flex-direction: column;
`

const P = styled.p`
	font-size: 1.6rem;
`
export default function NavBar() {
	const { toggleTheme } = useDarkMode()

	return (
		<Nav>
			<Logo to="/">
				<FcGlobe />
			</Logo>

			<ToggleTheme onClick={toggleTheme}>
				<MdOutlineDarkMode />
				<P>Dark Mode</P>
			</ToggleTheme>
		</Nav>
	)
}
