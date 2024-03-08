import React from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";
export default function HomePage() {
	return (
		<div className="homepage-wrapper">
			{" "}
			<div className="homepage">
				<Navbar />
			</div>
			<div className="banner-text">
				<div className="banner-text-left">
					<p>A SEAMLESS BLEND OF</p>
					<h3>LUXURY AND LEISURE</h3>
				</div>
				<div className="banner-text-right">
					<p>
						Take in fresh air amidst greenery that stretches as far as the eye
						can see
					</p>
				</div>
			</div>
		</div>
	);
}
