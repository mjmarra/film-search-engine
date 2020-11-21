import React, { useState } from "react";
import "../App.css";
import Movies from "./Movies";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

export default function Search() {
	const [pageNumber, setPageNumber] = useState(1);
	const [filteredByName, setFilteredByName] = useState([]);
	const [search, setSearch] = useState("");

	return (
		<div className="App">
			<header className="masthead">
				<div className="overlay"></div>
				<Navbar />
				<div className="site-heading">
					<h1 className="text-light d-none d-md-block">
						¡Tus películas favoritas!
					</h1>
					<h2 className="text-light d-none d-md-block">
						Disfruta donde quieras. Cancela cuando quieras.
					</h2>
					<SearchBar
						search={search}
						setSearch={setSearch}
						setFilteredByName={setFilteredByName}
						pageNumber={pageNumber}
					/>
				</div>
			</header>
			<div className="main-wrapper">
				<div className="row">
					<Movies filteredByName={filteredByName} />
					{search === "" && (
						<div className="alert alert-success mt-5" role="alert">
							Busque una película
						</div>
					)}
					{search !== "" && filteredByName.length === 0 && (
						<div className="alert alert-danger mt-5" role="alert">
							Ninguna película coincide con su búsqueda
						</div>
					)}
				</div>
				{filteredByName.length !== 0 && (
					<Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
				)}
			</div>
		</div>
	);
}
