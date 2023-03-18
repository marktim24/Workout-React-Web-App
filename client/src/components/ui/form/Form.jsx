import styles from './Form.module.scss'

const Form = ({ register, name, options, error, ...rest }) => {
	return (
		<div>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Form
