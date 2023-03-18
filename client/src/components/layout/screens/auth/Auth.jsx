import React from 'react'
import { useForm } from 'react-hook-form'

import Form from '../../../ui/form/Form'

import Layout from '../../Layout'

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})
	const onSubmit = data => {
		console.log(data)
	}
	return (
		<Layout heading='Sign In' bgImage='/images/bg-auth.jpg'>
			<div className=''>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Form
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{ required: 'Email is required' }}
						type='text'
						placeholder='Enter email'
					/>
					<button>Submit</button>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
