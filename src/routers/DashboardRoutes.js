import React, { useContext } from "react";
import { Redirect, Switch } from "react-router";
import { AuthContext } from "../auth/AuthContext";
import { DcScreen } from "../components/DC/DcScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { MarvelScreen } from "../components/Marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { NavBar } from "../components/UI/NavBar";
import { PrivateRoute } from "./PrivateRoute";

const DashboardRoutes = () => {
	const { user } = useContext(AuthContext);

	return (
		<>
			<NavBar />
			<div className="container-xl mt-2">
				<Switch>
					<PrivateRoute
						exact
						path="/marvel"
						component={MarvelScreen}
						isAuth={user.logged}
					/>
					<PrivateRoute
						exact
						path="/hero/:heroeId"
						component={HeroesScreen}
						isAuth={user.logged}
					/>
					<PrivateRoute
						exact
						path="/dc"
						component={DcScreen}
						isAuth={user.logged}
					/>
					<PrivateRoute
						exact
						path="/search"
						component={SearchScreen}
						isAuth={user.logged}
					/>
					<Redirect to="/dc" />
				</Switch>
			</div>
		</>
	);
};

export default DashboardRoutes;
