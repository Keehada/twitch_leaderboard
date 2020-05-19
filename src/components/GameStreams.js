import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

/* This component shows the top 20 streams related to the chosen game */

function GameStreams({ match, location }) {
	const [ streams, setStreams ] = useState([]);
	const [ viewers, setViewers ] = useState(0);

	let counter = 1;

	useEffect(() => {
		const fetchData = async () => {
			const result = await api.get(`https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`);
			let streamArray = result.data.data;
			let finalStreamArray = streamArray.map((stream) => {
				let thumbnailURL = stream.thumbnail_url.replace('{width}', '500').replace('{height}', '500');
				stream.thumbnail_url = thumbnailURL;
				return stream;
			});

			let totalViewers = finalStreamArray.reduce((acc, val) => {
				return acc + val.viewer_count;
			}, 0);

			setViewers(totalViewers);
			setStreams(finalStreamArray);
		};
		fetchData();
	}, []);

	return (
		<div class="body">
			<h1 class="title">{match.params.id} Streams</h1>
			<h4 class="viewer-count">
				{' '}
				<span class="viewer-color">{viewers}</span> total viewers
			</h4>
			<div className="container">
				<div className="row">
					{streams.map((stream) => (
						<div className="col-4 mt-5">
							<div className="card">
								<img className="card-img-top" src={stream.thumbnail_url} alt={stream.user_name} />
								<div className="card-body">
									<h5 className="card-title">
										#{counter++} {stream.user_name}
									</h5>
									<h6 className="card-subtitle mb-2 text-muted">{stream.viewer_count} Viewers</h6>
									<Link
										className="link"
										to={{
											pathname: '/channel/' + stream.user_name,
											state: {
												channelID: stream.user_name
											}
										}}
									>
										{' '}
										<button className="btn btn-success">Go to {stream.user_name}'s channel</button>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default GameStreams;
