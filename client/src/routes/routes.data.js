import Auth from '../components/layout/screens/auth/Auth'
import Home from '../components/layout/screens/home/Home'

export const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		auth: false
	},
	{
		path: '/',
		exact: false,
		component: Auth,
		auth: false
	},
	{
		path: '/',
		exact: true,
		component: NewWokouts,
		auth: true
	},
	{
		path: '/',
		exact: true,
		component: Profile,
		auth: false
	}
]
