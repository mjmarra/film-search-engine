import React from "react";
import { NavLink } from "react-router-dom";
import useNavbarBg from "../hooks/useNavbarBg";

export default function Navbar() {
	const navBackground = useNavbarBg();

	return (
		<nav
			className={`navbar navbar-expand-md fixed-top navbar-dark ${
				navBackground ? "bg-custom" : "bg-transparent"
			}`}
		>
			<div className="container">
				<NavLink
					exact
					activeClassName="active"
					className="navbar-brand d-none d-md-block"
					to="/"
				>
					Hackflix
				</NavLink>

				<ul className="navbar-nav text-left">
					<li className="nav-item">
						<NavLink exact activeClassName="active" className="nav-link" to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							activeClassName="active"
							className="nav-link"
							to="/sobre-nosotros"
						>
							Sobre nosotros
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							activeClassName="active"
							className="nav-link"
							to="/contacto"
						>
							Contacto
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							activeClassName="active"
							className="nav-link"
							to="/buscar"
						>
							Buscar películas
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
