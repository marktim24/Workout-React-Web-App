import { ReactComponent as Hamburger } from '../../images/header/hamburger.svg'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	/* TODO: router */
	// const { isAuth } = useAuth()d
	return (
		<div className={styles.header}>
			<Hamburger />
		</div>
	)
}

export default Header
