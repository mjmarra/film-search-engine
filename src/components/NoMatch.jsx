import React from "react";
import Navbar from "./Navbar";

const NotFound = () => {
	const center = {
		textAlign: "center",
	};

	return (
		<div className="App">
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
			<div className="mt-5" style={center}>
				<h1>404</h1>
				<p>This is the 404 Page.</p>
			</div>
		</div>
	);
};

export default NotFound;
