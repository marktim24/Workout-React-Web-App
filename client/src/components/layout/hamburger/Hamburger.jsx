import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose color='white' /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
