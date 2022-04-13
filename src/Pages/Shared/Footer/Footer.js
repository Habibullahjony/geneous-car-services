import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="text-center mt-5">
			<small>copyright@{year}</small>
		</footer>
	);
};

export default Footer;
