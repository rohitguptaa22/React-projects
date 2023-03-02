import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
const Header = () => {
	return (
		<nav>
			<Link to='/'>home</Link>
			<Link to='/about'>about</Link>
			<Link to='/contact'>contact</Link>
		</nav>
	);
};

export default Header;
