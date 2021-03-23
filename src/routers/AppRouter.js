import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import { PublicRoute } from "./PublicRouter";


const AppRouter = () => {
	const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuth={ user.logged }
                    />
					<Route  path='/' component={ DashboardRoutes }/>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
