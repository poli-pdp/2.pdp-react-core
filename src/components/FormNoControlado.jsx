const FormNoControlado = () => {
	return (
		<form
			onSubmit={env => {
				env.preventDefault();
				// console.log(env.target);
				const email = env.target.email.value;
				const password = env.target.password.value;
				login(email, password);
			}}
		>
			<input
				type='text'
				name='email'
				placeholder='Email'
				autoComplete='off'
			></input>
			<input
				type='password'
				name='password'
				placeholder='Password'
				autoComplete='off'
			/>
			<button type='submit'>Login</button>
		</form>
	);
};

const login = (email, password) => {
	if (email === 'admin@gmail.com' && password === '123') alert('Login OK');
	else alert('Login Fail');
};

export default FormNoControlado;
