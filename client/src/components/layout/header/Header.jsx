import styles from './Header.module.scss'
import { Hamburger } from '/client/public/hamburger.svg'

const Header = ({ backLink }) => {
	/* TODO: router */
	const { isAuth } = useAuth()
	return (
		<header className={styles.Header}>
			<button>
				<img src={Hamburger}></img>
			</button>
		</header>
	)
}

export default Header
