import React from "react";
import "./ContactUs.css";
export default function ContactUs() {
	return (
		<div className="contact flex text-white bg-black px-16">
			<div className="contact-left p-16 w-1/2">
				<p>GET IN TOUCH OR </p>
				<h1 className="heading">VISIT US</h1>
				<div className="mt-16">
					<div>
						<p className="sub-heading">CALL AT</p>
						<p>7069817800</p>
					</div>
					<div>
						<p className="sub-heading">EMAIL AT</p>
						<p>perfection@galainfra.com</p>
					</div>
				</div>
				<p className="sub-heading"> SITE ADDRESS</p>
				<p className="text">
					Le Parque. Sanand Bavla Road, (near Reliance Gas Bottling/
					PuniskaHealth Care). Pipan - 382110
				</p>
				<p className="sub-heading"> CORPORATE ADDRESS</p>
				<p className="text">
					Gala Group. A wing 9th floor Sofal Profitaire, Corparate Road,
					Prahalad nagar, Ahmedabad - 15
				</p>
			</div>
			<div className="contact-right p-16">
				<form></form>
			</div>
		</div>
	);
}
