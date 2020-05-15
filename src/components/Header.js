import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav className="navbar justify-content-center fixed-top">
			<li className="nav-item nav-link">
				<Link to="/" className="nav-text">
					Top Games
				</Link>
			</li>
			<li className="nav-item nav-link">
				<Link to="/top-streams" className="nav-text">
					Top Streams
				</Link>
			</li>
		</nav>
	);
}

export default Header;
