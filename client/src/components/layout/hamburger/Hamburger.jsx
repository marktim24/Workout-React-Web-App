import { HiMenu } from 'react-icons/hi'
import { IoIosClose } from 'react-icons/io'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoIosClose /> : <HiMenu />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
