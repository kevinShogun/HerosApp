import { heroes } from "../data/heroes";

export const getHeroeByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes(publisher) ){
        throw new Error(`Publisher ${publisher} no Existe`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}
