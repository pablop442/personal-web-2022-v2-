import React from "react";
import "./navbar.css";
import PabloPeñaBig from "../img/PabloPeñaBig.png";


const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
				<div className="container">
					<a href="/#" className="navbar-brand p-0">
						<img
							src={PabloPeñaBig}
							alt="Pablo Peña Logo"
							id="logo"
							className="img-fluid"
						/>
					</a>

					<button
						className="navbar-toggler me-3"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navmenu">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navmenu">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a href="#about" className="nav-link">
									About me
								</a>
							</li>
							<li className="nav-item">
								<a href="#skills" className="nav-link">
									Skills
								</a>
							</li>
							<li className="nav-item">
								<a href="#resume" className="nav-link">
									Resume
								</a>
							</li>
							<li className="nav-item">
								<a href="#portafolio" className="nav-link">
									Portafolio
								</a>
							</li>
							<li className="nav-item">
								<a
									href="/#"
									className="nav-link"
									data-bs-toggle="modal"
									data-bs-target="#contact">
									Contact me
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;