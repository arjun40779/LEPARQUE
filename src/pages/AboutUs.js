import React from "react";
import "./AboutUs.css";
export default function AboutUs() {
	return (
		<div className="wrapper">
			<div className="about-us flex m-16 p-8">
				<div className="about-us-image w-full">
					<img className="w-full" src="about.jpg" alt="about-us" />
				</div>
				<div className="about-us-text">
					<p className="text2">EVERY INCH PLANNED TO</p>
					<h1 className="heading">LET YOU LIVE BETTER</h1>
					<p className="text">
						A 300 acres vast estate, Le Parque is a self-contained haven located
						just 30 minutes from central Ahmedabad. Le Parque embraces the
						concept of exclusitvity, offering a carefully curated collection of
						resort-style villas with a sprawling landscape that redefines
						opulence. Each villa is meticulously designed to embody elegance,
						combining contemporary architecture with timeless charm.{" "}
					</p>
					<p className="text">
						Embrace the exvlusivity of your own private haven where you can
						retreat from the world and revel in the traquility of your
						surroundings
					</p>
					<button className="btn">CONTACT US</button>
				</div>
			</div>
		</div>
	);
}
