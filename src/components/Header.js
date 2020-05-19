import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<nav className="navbar navbar-expand-md fixed-top">
			<span classname="navbar-brand">
				<h6 className="nav-text" id="title">
					Twitch Leaderboard
				</h6>
			</span>
			<div class="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
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
				</ul>
			</div>
		</nav>
	);
}

export default Header;
