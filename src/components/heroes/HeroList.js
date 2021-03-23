import React from "react";
import { getHeroeByPublisher } from "../../selectors/getHeroeByPublisher";
import { HeroCard } from "./HeroCard";

const HeroesList = ({ publisher }) => {
	const heroes = getHeroeByPublisher(publisher);

	return (
		<div className="row row-cols-1 row-cols-md-2 g-4">
			{heroes.map((hero) => (
				<div className="col">
					<HeroCard key={hero.id} {...hero} />
				</div>
			))}
		</div>
	);
};

export default HeroesList;
