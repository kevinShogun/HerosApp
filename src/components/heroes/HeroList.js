import React from 'react';
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher';

const HeroesList = ({publisher}) => {
    
    const heroes = getHeroeByPublisher(publisher)
    
    return ( 
        <ul>
            {
                heroes.map(hero => (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }
        </ul>
    );
}
 
export default HeroesList;