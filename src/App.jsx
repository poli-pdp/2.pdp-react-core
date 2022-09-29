import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';
import styles from './App.module.css';
import FormNoControlado from './components/FormNoControlado';
import FormControlado from './components/FormControlado';

const App = () => (
	<div className={styles.container}>
		<VideoList title='Programacion'>
			<VideoItem
				title='Video de React'
				duration='25:10'
				date='21-09-2022'
				description='Conceptos basicos de React'
			/>
			<VideoItem
				title='Video de Java'
				duration='15:10'
				date='20-09-2022'
				description='Conceptos basicos de Java'
			/>
		</VideoList>
		<VideoList title='Backed'>
			<VideoItem
				title='Video de .Net'
				duration='25:10'
				date='21-09-2022'
				description='Conceptos basicos de .Net'
			/>
		</VideoList>
		<VideoList title='Salsa' />
		<br />
		<FormNoControlado />
		<br />
		<FormControlado />
		<br />
	</div>
);

export default App;
