import { useAuth } from '../../../hooks/useAuth'
import { ReactComponent as Hamburger } from '../../images/header/hamburger.svg'
import { ReactComponent as Profile } from '../../images/header/userProfile.svg'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	/* TODO: router */
	const { isAuth } = useAuth()
	return (
		<div className={styles.header}>
			<button onClick={() => {}}></button>
			<Profile />
			<Hamburger />
		</div>
	)
}

export default Header
