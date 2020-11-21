import React from "react";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<header className="masthead">
			<div className="overlay"></div>
			<Navbar />
			<div className="site-heading align-heading">
				<h1 className="text-light d-none d-md-block">
					¡Tus películas favoritas!
				</h1>
				<h2 className="text-light d-none d-md-block">
					Disfruta donde quieras. Cancela cuando quieras.
				</h2>
			</div>
		</header>
	);
}
