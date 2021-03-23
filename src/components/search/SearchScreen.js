import React, { useMemo } from "react";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../Hooks/useForm";
import queryString from "query-string";
import { useLocation } from "react-router";
import {
	getHeroesByAlterEgo,
	getHeroesByCharacter,
	getHeroesByName,
} from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { q = "" } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({
		searchText: q,
	});

	const { searchText } = formValues;

	const heroesFilter = useMemo(() => getHeroesByName(q), [q]);
	const heroesFilterAlter_ego = useMemo(() => getHeroesByAlterEgo(q), [q]);
	const heroesFilterCharacter = useMemo(() => getHeroesByCharacter(q), [q]);

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`);
	};

	return (
		<>
			<div className="row">
				<div className="col-5">
					<h4>Search Your Hero</h4>
					<hr />

					<form>
						<input
							type="text"
							className="form-control"
							placeholder="Hero..."
							name="searchText"
							value={searchText}
							onChange={handleInputChange}
						/>

						<button
							type="submit"
							className="mt-2 btn btn-outline-primary btn-block"
							onClick={handleSearch}
						>
							Search...
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results Hero</h4>
					<hr />
					{q === "" && (
						<div className="alert alert-info">
							<p>Search a Hero</p>
						</div>
					)}
					{q !== "" && heroesFilter.length === 0 && (
						<>
							{heroesFilterAlter_ego.map((hero) => (
								<>
									<br />
									<HeroCard key={hero.id} {...hero} />
								</>
							))}
						</>
					)}
					{q !== "" && heroesFilterAlter_ego.length === 0 && (
						<>
							{heroesFilterCharacter.map((hero) => (
								<>
									<br />
									<HeroCard key={hero.id} {...hero} />
								</>
							))}
						</>
					)}
					{q !== "" &&
						heroesFilter.length === 0 &&
						heroesFilterCharacter.length === 0 &&
						heroesFilterAlter_ego.length === 0 && (
							<div className="alert alert-info">
								<p>There is not a Hero "{q}"</p>
							</div>
						)}

					{heroesFilter.map((hero) => (
						<>
							<br />
							<HeroCard key={hero.id} {...hero} />
						</>
					))}
				</div>
			</div>
		</>
	);
};
