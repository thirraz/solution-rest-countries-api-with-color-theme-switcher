import CountryCard from "./CountryCard"
import styled from "styled-components"

const CountryCardsContainer = styled.div`
	max-width: 100%;
	height: auto;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: var(--card-gap-desktop) 3rem;

	@media screen and (max-width: 800px) {
		gap: var(--card-gap-mobile);
	}
`

type Countries = {
	countries: any[]
	filterBy: string
}

export default function CountryCardContainer({
	countries,
	filterBy
}: Countries) {
	return (
		<>
			{countries.length ? (
				<CountryCardsContainer>
					{countries
						.filter(country => country.region == filterBy)
						.map((country, i) => {
							const {
								capital,
								name,
								population,
								region,
								flags,
								topLevelDomain,
								subregion,
								currencies,
								languages,
								nativeName
							} = country

							return (
								<CountryCard
									flags={flags.svg}
									capital={capital!}
									name={name}
									population={population}
									region={region}
									key={i}
									topLevelDomain={topLevelDomain}
									subRegion={subregion}
									currencies={currencies}
									languages={languages}
									nativeName={nativeName}
								/>
							)
						})}
				</CountryCardsContainer>
			) : (
				<p>Not Found</p>
			)}
		</>
	)
}
