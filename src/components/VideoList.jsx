const VideoList = ({ title, children }) => (
	<div>
		<h1>{title}</h1>
		{children || 'Sin videos'}
	</div>
);

export default VideoList;
