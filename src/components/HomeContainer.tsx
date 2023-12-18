import NavBar from "./NavBar"
import SearchContainer from "./SearchContainer"
import CountryCardContainer from "./CountryCardContainer"
import { ChangeEvent, useState } from "react"

import { countries as allCountries } from "../data"
import styled from "styled-components"

const Home = styled.div`
	padding-top: 3rem;
	padding-inline: var(--padding-md);
	background: var(--color-bg);
	max-width: 100vw;
	min-height: 100dvh;
	display: grid;
	grid-template-rows: 8rem 10rem 1fr;
	gap: 2.5rem;

	@media only screen and (max-width: 700px) {
		padding: 1rem;
	}
`

export default function HomeContainer() {
	const [search, setSearch] = useState("")
	const [countries, setCountries] = useState(allCountries)
	const [selectedRegion, setSelectedRegion] = useState("Africa")

	function handleSearch(e: ChangeEvent<HTMLInputElement>) {
		setSearch(e.target.value)

		const filteredSearch = countries.filter((country: any) =>
			country.name.toLowerCase().includes(search.toLowerCase())
		)
		setCountries(filteredSearch)
	}

	return (
		<Home>
			<NavBar />
			<SearchContainer
				handleSearch={handleSearch}
				search={search}
				setSelectedRegion={setSelectedRegion}
			/>
			<CountryCardContainer
				countries={countries}
				filterBy={selectedRegion}
			/>
		</Home>
	)
}
