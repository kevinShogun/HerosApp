import React from "react";
import HeroesList from "../heroes/HeroList";

export const DcScreen = () => {
	return (
		<div>
			<br />
			<h1>Dc Screen</h1>
			<hr />
			<br />
			<br />
			<HeroesList publisher={"DC Comics"} />
		</div>
	);
};
