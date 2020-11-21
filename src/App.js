import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Search from "./components/Search";
import NoMatch from "./components/NoMatch";
import MovieDetails from "./components/MovieDetails";
import useIsOnline from "./hooks/useIsOnline";
import NoConnection from "./components/NoConnection"

function App() {
	const isOnline = useIsOnline();

	return (
		<Router>
			{!isOnline && <NoConnection />}
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/buscar" component={Search} />
				<Route path="/pelicula/:id" component={MovieDetails} />
				<Redirect from="/movie/:id" to="/pelicula/:id" />
				<Route exact path="/sobre-nosotros" component={About} />
				<Route exact path="/contacto" component={Contact} />
				<Route component={NoMatch} />
			</Switch>
		</Router>
	);
}

export default App;
