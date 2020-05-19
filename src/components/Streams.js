import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api.js';

/* This component shows the top 20 streams on Twitch */

function Streams() {
	const [ streams, setStreams ] = useState([]);

	let counter = 1;

	useEffect(() => {
		const fetchData = async () => {
			const result = await api.get('https://api.twitch.tv/helix/streams');
			let dataArray = result.data.data;
			let streamArray = dataArray.map((stream) => {
				let thumbnailURL = stream.thumbnail_url.replace('{width}', '500').replace('{height}', '500');
				stream.thumbnail_url = thumbnailURL;
				return stream;
			});
			setStreams(streamArray);
		};
		fetchData();
	}, []);

	return (
		<div className="body">
			<h1 className="title">
				Top 20 <span className="redText">LIVE</span> Streams
			</h1>
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

export default Streams;
