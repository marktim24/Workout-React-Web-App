import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../../ui/button/Button'

import Form from '../../../ui/form/Form'
import Loader from '../../../ui/loader/Loader'
import styles from './Auth.module.scss'

import Layout from '../../Layout'
const isLoading = false
const isLoadingAuth = false
const Auth = () => {
	const [type, setType] = useState('auth')
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})
	const onSubmit = data => {
		// TODO: Type
		console.log(data)
	}
	return (
		<>
			<Layout heading='Sign In' bgImage='/images/bg-auth.jpg' />
			<div className={styles.wrapper}>
				{(isLoading || isLoadingAuth) && <Loader />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<Form
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{ required: 'Email is required' }}
						type='text'
						placeholder='Enter email'
					/>
					<Form
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{ required: 'Password is required' }}
						type='password'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButton}>
						<Button clickHandler={() => setType('auth')}>Sign In</Button>
						<Button clickHandler={() => setType('reg')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
