import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Games from './components/Games';
import Header from './components/Header';
import Streams from './components/Streams';
import GameStreams from './components/GameStreams';
import Channel from './components/Channel';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

function App() {
	return (
		<Router>
			<Header />
			<Route exact path="/" component={Games} /> {/* Links to the top games page */}
			<Route exact path="/top-streams" component={Streams} /> {/* Links to the top streams page */}
			<Route exact path="/game/:id" component={GameStreams} />
			{/* Links to the top streams page for a specific game */}
			<Route exact path="/channel/:id" component={Channel} /> {/* Links to a specific channel chosen */}
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
