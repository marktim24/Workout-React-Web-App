import { GrFormClose } from 'react-icons/gr'
import { HiMenu } from 'react-icons/hi'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <GrFormClose /> : <HiMenu />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
