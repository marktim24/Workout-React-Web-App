import styles from './Hamburger.module.scss'

const Menu = () => {
	return (
		<nav className={`${styles.menu} ${isComponentVisible}`}>
			<ul>
				{menu.map((item, index) => {
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				})}
				<li>
					<button onClick={}></button>
				</li>

			</ul>
		</nav>
	)
}

export default Menu
