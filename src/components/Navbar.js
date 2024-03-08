import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../assets/Logo.svg";
export default function Navbar() {
	return (
		<div className="navbar">
			<ul className="navlist">
				<li>About us</li>
				<li>Sectors</li>
				<li className="brand">
					<Logo />
				</li>
				<li>Gallery</li>
				<li>Contact us</li>
			</ul>
		</div>
	);
}
