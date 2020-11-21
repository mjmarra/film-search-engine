import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function About() {
	return (
		<div className="App">
			<Header />
			<div className="container my-5">
				<div className="text-left p-5">
					<div className="row">
						<div className="col-lg-6">
							<div className="aboutUsImage mb-5"></div>
						</div>
						<div className="col-lg-6">
							<h2>Hackflix</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
								voluptate nihil eum consectetur similique? Consectetur, quod,
								incidunt, harum nisi dolores delectus reprehenderit voluptatem
								perferendis dicta dolorem non blanditiis ex fugiat.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
								magni, aperiam vitae illum voluptatum aut sequi impedit non
								velit ab ea pariatur sint quidem corporis eveniet. Odit,
								temporibus reprehenderit dolorum!
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
								consequuntur, modi mollitia corporis ipsa voluptate corrupti eum
								ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti
								necessitatibus perspiciatis quis?
							</p>
							<p>
								<Link className="btn btn-outline-secondary mt-4" to="/contacto">
									<i className="far fa-envelope"></i> Contacto
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
