import React from "react";
import "./Luxarious.css";
export default function Luxarious() {
	return (
		<div className="lux">
			<div className="lux-container p-16">
				<div className="lux-top flex justify-between">
					<div>
						<p className="bold">LUXARIOUS</p>
						<h1 className="heading">VILLA DEVELOPMENTS</h1>
					</div>
					<div className="px-32 text-sm w-2/5">
						<p>
							Le Parque 300 acres are divided into several villa development
							each with own distict identity
						</p>
					</div>
				</div>
				<div className="lux-img w-full">
					<img className="w-full" src="lux.jpg" alt="lux"></img>
				</div>
				<div className="lux-btm text-2xl text-center my-8">
					<p>WHERE EVERYDAY FEELS LIKE A PARADISIACAL ESCAPE</p>
				</div>
			</div>
		</div>
	);
}
