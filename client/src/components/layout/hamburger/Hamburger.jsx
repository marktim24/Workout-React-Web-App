import { ReactComponent as MenuHamburger } from '../../images/header/hamburger.svg'
import styles from './Hamburger.module.scss'

const Hamburger = () => {
	const [isShow, SetIsShow] = useState(false)
	return (
		<div className={styles.wrapper}>
			<button onClick={() => SetIsShow(!isShow)}>
				{isShow ? <IoClose color='white' /> : <MenuHamburger />}
			</button>
		</div>
	)
}

export default Hamburger
