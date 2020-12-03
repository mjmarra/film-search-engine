import React from "react";
import Header from "./Header";

export default function Contact() {
	return (
		<div className="App">
			<Header />
			<div className="container my-5">
				<form className="text-left p-5">
					<h2 className="mb-5">Contacto</h2>

					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="inputEmail4">Correo electrínico</label>
							<input
								type="email"
								className="form-control"
								id="inputEmail4"
								placeholder="Ingresar correo electrónico"
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="inputPassword4">Contraseña</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword4"
								placeholder="Ingresar contraseña"
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="inputAddress">Dirección</label>
						<input
							type="text"
							className="form-control"
							id="inputAddress"
							placeholder="Ingresar dirección"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="inputAddress2">Dirección 2</label>
						<input
							type="text"
							className="form-control"
							id="inputAddress2"
							placeholder="Ingresar número de apartamento o piso"
						/>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="inputCity">Ciudad</label>
							<input
								type="text"
								className="form-control"
								id="inputCity"
								placeholder="Ingresar ciudad"
							/>
						</div>
						<div className="form-group col-md-2">
							<label htmlFor="inputZip">Código postal</label>
							<input
								type="text"
								className="form-control"
								id="inputZip"
								placeholder="Código postal"
							/>
						</div>
					</div>
					<button type="submit" className="btn btn-outline-secondary mt-4">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
