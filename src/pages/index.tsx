import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Gabriel Modesto</title>
			</Head>
		</div>
	);
}

export default Home;
