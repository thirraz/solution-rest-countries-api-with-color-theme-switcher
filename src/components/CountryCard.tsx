import styled from "styled-components"
import { NavLink } from "react-router-dom"

const StyledCountryCard = styled(NavLink)`
	background: var(--color-elements);
	max-width: 23rem;
	min-height: 30rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	display: flex;
	flex-direction: column;
	text-decoration: none;
	font-size: 1.6rem;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	border-radius: var(--sm-radius);
	overflow: hidden;

	&:hover {
		transform: translateY(-1rem);
		box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 14px;
	}
`
const CountryCardInfos = styled.div`
	flex: 1;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	color: var(--color-text);
`

const CountryCardThumb = styled.div`
	max-height: 45%;
	max-width: 100%;
	background: hsl(0, 0%, 0%, 60%);

	& img {
		max-width: 100%;
		width: 100%;
		max-height: 100%;
		min-height: 100%;
		object-fit: cover;
	}
`

const Info = styled.p`
	font-size: 1.6rem;
	padding-bottom: 0.6rem;

	&:not(:last-child) {
		border-bottom: 1px solid hsl(0, 100%, 0%, 10%);
	}
`

const Title = styled.p`
	color: var(--color-title);
	font-size: 1.6rem;
	background: var(--color-title-bg);
	padding: 0.5rem;
	text-align: center;
	border-radius: 4px;
	margin-bottom: 0.8rem;
	hyphens: auto;
	letter-spacing: 0.06rem;
`

const Span = styled.span`
	font-weight: bold;
`

export type PropsCountryCard = {
	population?: number
	flags?: string
	name?: string
	capital?: string
	region?: string
	subRegion?: string
	nativeName: string
	topLevelDomain?: string[]
	currencies?: string[]
	languages?: string[]
}

export default function CountryCard({
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
}: PropsCountryCard) {
	return (
		<StyledCountryCard
			state={{
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
			}}
			to={`/country/${name?.toLowerCase().replaceAll(" ", "-")}`}
			className="country-card"
		>
			<CountryCardThumb>
				{flags ? (
					<img src={flags} alt="current country flag" />
				) : (
					<p
						style={{
							width: "100%",
							textAlign: "center",
							marginTop: "1rem"
						}}
					>
						Not available
					</p>
				)}
			</CountryCardThumb>
			<CountryCardInfos>
				<Title>
					<Span>{name}</Span>
				</Title>
				<Info>
					<Span>Population:</Span> {population}
				</Info>
				<Info>
					<Span>Region:</Span> {region}
				</Info>
				<Info>
					<Span>Capital:</Span> {capital}
				</Info>
			</CountryCardInfos>
		</StyledCountryCard>
	)
}
