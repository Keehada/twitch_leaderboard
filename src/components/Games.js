import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api.js';

/* This component renders a page showing the top 20 games being streamed on twitch */

function Games() {
	const [ games, setGames ] = useState([]);
	let counter = 1;

	useEffect(() => {
		const fetchData = async () => {
			const result = await api.get('https://api.twitch.tv/helix/games/top');
			let dataArray = result.data.data;
			let finalArray = dataArray.map((game) => {
				let newURL = game.box_art_url.replace('{width}', '500').replace('{height}', '500');
				game.box_art_url = newURL;
				return game;
			});
			setGames(finalArray);
		};
		fetchData();
	}, []);

	return (
		<div className="body">
			<h1 className="title">Most Popular Games</h1>
			<div className="row">
				{games.map((game) => (
					<div className="col-3 mt-5">
						<div className="card">
							<img className="card-img-top" src={game.box_art_url} alt={game.name} />
							<div className="card-body">
								<h5 className="card-title">
									#{counter++} {game.name}
								</h5>
								<Link
									className="link"
									to={{
										pathname: 'game/' + game.name,
										state: {
											gameID: game.id
										}
									}}
								>
									<button className="btn btn-success">{game.name} streams</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Games;
