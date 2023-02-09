import Header from './header/Header'
import cn from 'clsx'
import styles from './Layout.module.scss'

const Layout = ({ children, bgImage, heading = '', backLink }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout
