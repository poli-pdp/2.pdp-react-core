const VideoItem = ({ title, duration, date, description }) => {
	return (
		<div>
			<h3>{title}</h3>
			<div>
				<span>{duration}</span>
				<span>{date}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default VideoItem;

/* const VideoItem = props => {
	return (
		<div>
			<h2>{props.title}</h2>
			<div>
				<span>{props.duration}</span>
				<span>{props.date}</span>
			</div>
			<p>{props.description}</p>
		</div>
	);
};

export default VideoItem;
*/
