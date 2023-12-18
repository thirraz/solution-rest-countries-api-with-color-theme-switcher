import { useLocation } from "react-router-dom"
import { IoMdArrowBack } from "react-icons/io"
import NavBar from "./NavBar"
import styled from "styled-components"

const Country = styled.div`
	max-width: 100vw;
	min-height: 100vh;
	background-color: var(--color-bg);
	display: grid;
	grid-template-rows: 8rem 15rem 1fr;
	padding-inline: var(--padding-md);
	font-size: 1.6rem;
	justify-items: center;

	@media only screen and (max-width: 700px) {
		padding: 1rem;
	}
`

const CountryProperties = styled.div`
	display: grid;
	grid-template-rows: 6rem repeat(5, min-content);
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	color: var(--color-text);

	@media only screen and (max-width: 700px) {
		gap: 1rem;
		grid-template-columns: 1fr;

		grid-auto-rows: 1fr;
	}
`

const CountryThumb = styled.div`
	min-width: 10rem;
	max-width: 42rem;
	max-height: 28rem;
	min-height: auto;
	overflow: hidden;
	border-radius: 10px;
	outline: 2px solid hsl(0, 0%, 0%, 50%);
	outline-offset: 2px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const StyledCountryDetail = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	grid-auto-rows: auto;
	justify-items: center;
	gap: 3rem;
	/* display: flex;
	flex-wrap: wrap;
	gap: 4rem;
	justify-content: center; */
`

const H2 = styled.h2`
	grid-column: 1/-1;

	@media only screen and (max-width: 700px) {
		text-align: center;
		text-transform: uppercase;
	}
`

const Button = styled.button`
	display: block;
	width: 13rem;
	height: 4rem;
	align-self: center;
	justify-self: start;
	cursor: pointer;
	font-size: 2rem;
	transition: background-color 0.3s ease-out;

	border: none;
	border-radius: var(--sm-radius);

	background: #d1d1d1;

	&:active {
		animation: var(--click-animation);
	}
`

const P = styled.p`
	font-size: 1.6rem;
	margin: 0 1rem 1rem 0;

	padding: 0.5rem;
	border-radius: 4px;
	text-overflow: clip;

	@media only screen and (max-width: 700px) {
		width: 100%;
		text-align: center;
		margin: 0;
		padding: 0.8rem;
	}
`

const Bold = styled.span`
	font-weight: bold;
`

export default function CountryDetail() {
	const location = useLocation()
	const {
		flags,
		capital,
		name,
		population,
		region,
		currencies,
		subRegion,
		topLevelDomain,
		languages,
		nativeName
	} = location.state

	function showLanguages(languages: string[]) {
		return languages.map((lang: any) => lang.name).join(", ")
	}

	function showCurrencies(currencies: string[]) {
		return currencies.map((currency: any) => currency.name).join(", ")
	}

	function showTopLevelDomain(topLevelDomain: string[]) {
		for (let i in topLevelDomain) {
			return topLevelDomain[i]
		}
	}
	return (
		<Country>
			<NavBar />
			<Button onClick={() => history.back()}>
				<IoMdArrowBack />
			</Button>
			<StyledCountryDetail>
				<CountryThumb>
					<img src={flags} alt="country's flag" />
				</CountryThumb>
				<CountryProperties>
					<H2>{name} </H2>
					<P>
						<Bold>Native Name: </Bold> {nativeName}
					</P>
					<P>
						<Bold>Population: </Bold> {population}
					</P>
					<P>
						<Bold>Region: </Bold> {region}
					</P>
					<P>
						<Bold>Sub Region: </Bold> {subRegion}
					</P>
					<P>
						<Bold>Capital: </Bold> {capital}
					</P>
					<P>
						<Bold>Top Level Domain: </Bold>
						{showTopLevelDomain(topLevelDomain)}
					</P>
					<P>
						<Bold className="bold">Currencies: </Bold>
						{showCurrencies(currencies)}
					</P>
					<P>
						<Bold className="bold">Languages: </Bold>
						{showLanguages(languages)}
					</P>
				</CountryProperties>
			</StyledCountryDetail>
		</Country>
	)
}
