import { hamburger } from '../../images/header/hamburger.svg'
import styles from './Hamburger.module.scss'

const Hamburger = () => {
	return (
		<div className={styles.wrapper}>
			<button>{hamburger}</button>
		</div>
	)
}

export default Hamburger
