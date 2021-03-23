import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const NavBar = () => {
	const {
		user: { name },
		dispatch,
	} = useContext(AuthContext);

	const history = useHistory();

	const handleLogout = () => {
		dispatch({
			type: types.logout,
		});

		history.replace("/login");
	};

	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link className=" nav-item nav-link" to="/">
					Asociaciones
				</Link>
			</li>

			<NavLink
				activeClassName="active"
				className="nav-item nav-link"
				exact
				to="/marvel"
			>
				Marvel
			</NavLink>

			<NavLink
				activeClassName="active"
				className="nav-item nav-link"
				exact
				to="/dc"
			>
				DC
			</NavLink>
			<NavLink
				activeClassName="active"
				className="nav-item nav-link"
				exact
				to="/search"
			>
				Search
			</NavLink>
			<p id="name" className="text-info mt-2">
				{name}
			</p>

			<button className="nav-item nav-link" id="log" onClick={handleLogout}>
				Logout
			</button>
		</ul>
	);
};
