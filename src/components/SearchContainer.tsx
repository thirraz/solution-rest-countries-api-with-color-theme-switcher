import { ChangeEvent } from "react"
import styled from "styled-components"

const StyledSearchContainer = styled.div`
	max-width: 100%;
	max-height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: var(--box-shadow);
	border-radius: var(--md-radius);
	padding-inline: 20px;
`

const Input = styled.input.attrs({ type: "text" })`
	background: var(--color-input);
	border: none;
	padding: 1rem 0.8rem;
	border-radius: var(--sm-radius);
	outline: none;
	font-family: inherit;

	&:focus {
		background: #d4d4d4;
	}

	&:active {
		animation: var(--click-animation);
	}
`

export type PropsSearchContainer = {
	search: string
	handleSearch(e: ChangeEvent<HTMLInputElement>): void
	setSelectedRegion: (e: string) => void
}

export default function SearchContainer({
	search,
	handleSearch,
	setSelectedRegion
}: PropsSearchContainer) {
	return (
		<StyledSearchContainer>
			<div className="search-container-input">
				<Input
					placeholder="Search for a country"
					value={search}
					onChange={handleSearch}
				/>
			</div>

			<select
				name="countries"
				onChange={e => {
					setSelectedRegion(e.target.value)
				}}
			>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</StyledSearchContainer>
	)
}
