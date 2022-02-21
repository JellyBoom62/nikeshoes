import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card } from '../components'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Head</title>
				<meta name="" content="" />
			</Head>
			<div className={styles.home}>
				<Card imageurl="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.pngY" />
			</div>
		</div>
	)
}

export default Home