import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../../hooks/useAuth'

import Button from '../../../ui/button/Button'

import Layout from '../../Layout'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<Layout bgImage={'/images/home-bg.jpg'}>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/Auth')}>
				{isAuth ? 'Sign In' : 'Sign Up'}
			</Button>
			<h1 className={styles.heading}>EXERCISE FOR BETTER LIFE</h1>
		</Layout>
	)
}

export default Home
