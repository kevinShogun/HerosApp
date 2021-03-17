import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { DcScreen } from '../DC/DcScreen';
import { HeroesScreen } from '../heroes/HeroesScreen';
import { MarvelScreen } from '../Marvel/MarvelScreen';
import { NavBar } from '../UI/NavBar';

const DashboardRoutes = () => {
    return ( 
        <>
        <NavBar />
            <div className='container-xl'>
            

                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroes/:heroeId" component={ HeroesScreen } />
                    <Route exact path="/dc" component={DcScreen } />


                    <Redirect to="/dc" />
                </Switch>

            </div>
        </> 
    );
}
 
export default DashboardRoutes;