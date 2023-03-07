import { IoMdArrowBack } from 'react-icons/io'
import { RiUserSmileLine } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<IoMdArrowBack />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/Profile')
					}}
				>
					<RiUserSmileLine />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
