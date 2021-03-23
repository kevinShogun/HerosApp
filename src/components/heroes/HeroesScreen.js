import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroesScreen = () => {

    const {heroeId} = useParams();

    const hero = getHeroeById(heroeId);

    if( !hero){
        return <Redirect to='/' />
    }

    const {
        superhero,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div>
            <h1>Heroes Screen</h1>
        </div>
    )
}
