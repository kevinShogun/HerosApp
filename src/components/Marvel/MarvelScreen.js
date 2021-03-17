import React from 'react'
import HeroesList from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
			<br />
            <h1>Marvel Screen</h1>
            <hr />
			<br />
			<br />
            <HeroesList publisher={'Marvel Comics'}/>
        </div>
    )
}
