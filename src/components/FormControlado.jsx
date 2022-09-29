import { useState } from 'react';

const FormControlado = () => {
	const [frmState, setFrmState] = useState({ email: '', password: '' });
	const { email, password } = frmState;

	/*
	const handlerInputEmail = env => {
		// console.log(env.target.value);
		setFrmState({ ...frmState, email: env.target.value });
	};

	const handlerInputPassword = env => {
		setFrmState({ ...frmState, password: env.target.value });
	};
*/
	const handlerInput = ({ target: { name, value } }) => {
		setFrmState({ ...frmState, [name]: value });
	};

	return (
		<form>
			<input
				type='text'
				name='email'
				placeholder='Email'
				autoComplete='off'
				value={email}
				onChange={handlerInput}
			></input>
			<input
				type='password'
				name='password'
				placeholder='Password'
				autoComplete='off'
				value={password}
				onChange={handlerInput}
			/>
			<button>Login</button>
			<br />
			<span>Email:{email}</span>
			<br />
			<span>Password:{password}</span>
			<br />
		</form>
	);
};

export default FormControlado;
