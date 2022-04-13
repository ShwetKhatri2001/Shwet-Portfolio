import React from "react";
import "./Footer.css";
import { greeting } from "../../portfolio.js";
import { Fade } from "react-reveal";

export default function Footer(props) {
	return (
		<div className="footer-div">
			<Fade>
				<p className="footer-text" style={{ color: props.theme.secondaryText }}>
					Made with <span role="img">❤️</span> by {greeting.title}
				</p>
			</Fade>
		</div>
	);
}
