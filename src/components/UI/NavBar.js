import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
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
				className="nav-item nav-link right-0"
                id='log'
				exact
				to="/login"
			>
				Logout
			</NavLink>
		</ul>
	);
};
