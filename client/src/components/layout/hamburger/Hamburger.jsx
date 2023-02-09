import { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { HiMenu } from 'react-icons/hi'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <GrFormClose /> : <HiMenu />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
