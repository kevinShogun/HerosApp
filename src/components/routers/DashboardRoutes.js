import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { DcScreen } from '../DC/DcScreen';
import { HeroesScreen } from '../heroes/HeroesScreen';
import { MarvelScreen } from '../Marvel/MarvelScreen';
import { SearchScreen } from '../search/SearchScreen';
import { NavBar } from '../UI/NavBar';

const DashboardRoutes = () => {
    return ( 
        <>
        <NavBar />
            <div className='container-xl mt-2'>
            

                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroesScreen } />
                    <Route exact path="/dc" component={DcScreen } />
                    <Route exact path="/search" component={SearchScreen } />
                    <Redirect to="/dc" />
                </Switch>

            </div>
        </> 
    );
}
 
export default DashboardRoutes;