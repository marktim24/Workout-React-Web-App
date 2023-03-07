import Auth from '../components/layout/screens/auth/Auth'
import Home from '../components/layout/screens/home/Home'
import NewWorkout from '../components/layout/screens/new-workout/NewWorkouts'
import Profile from '../components/layout/screens/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/auth',
		exact: false,
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: false
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	}
]
