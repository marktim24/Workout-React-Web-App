import { CgProfile } from 'react-icons/cg'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	/* TODO: router */
	const { isAuth } = useAuth()
	return (
		<div className={styles.header}>
			<button onClick={() => {}}>
				<CgProfile />
			</button>
			<Hamburger />
		</div>
	)
}

export default Header
