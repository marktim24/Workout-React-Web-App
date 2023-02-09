import { IoMdArrowBack } from 'react-icons/io'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	/* TODO: router */
	const { isAuth } = useAuth()
	return (
		<div className={styles.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack />
			</button>
			<Hamburger />
		</div>
	)
}

export default Header
