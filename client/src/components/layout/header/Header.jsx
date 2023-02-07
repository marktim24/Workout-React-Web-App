import { useAuth } from '../../../hooks/useAuth'
import { ReactComponent as Menu } from '../../images/header/hamburger.svg'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	/* TODO: router */
	const { isAuth } = useAuth()
	return (
		<div className={styles.header}>
			<button onClick={() => {}}>
				<Menu />
			</button>
			<Hamburger />
		</div>
	)
}

export default Header