import styles from './VideoItem.module.css';
import View from './View';
const VideoItem = ({ title, duration, date, description }) => {
	return (
		<div className={styles.container}>
			<h3>{title}</h3>
			<div>
				<span className={`${styles.duration} ${styles.color}`}>{duration}</span>
				<span>{date}</span>
			</div>
			<p>{description}</p>
			<View />
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
