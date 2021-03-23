import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
    
	if (name === "") {
		return [];
	}

	name = name.toLocaleLowerCase();

	return heroes.filter((hero) =>
		hero.superhero.toLocaleLowerCase().includes(name)
	);
};

export const getHeroesByCharacter = (name = "") => {
	if (name === "") {
		return [];
	}
	name = name.toLocaleLowerCase();

	return heroes.filter((hero) =>
		hero.characters.toLocaleLowerCase().includes(name)
	);
};

export const getHeroesByAlterEgo = (name = "") => {
	if (name === "") {
		return [];
	}
	name = name.toLocaleLowerCase();

	return heroes.filter((hero) =>
		hero.alter_ego.toLocaleLowerCase().includes(name)
	);
};
