import React from 'react'
import { createBrowserRouter, Route } from 'react-router-dom'
import NotFound from '../components/layout/screens/not-found/NotFound'
import { routes } from './routes.data'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			{routes.map(route => (
				<Route>
					key={route.path}
					element={<route.component />}
				</Route>
			))}

			<Route element={<NotFound />}></Route>
		</Route>
	)
)
