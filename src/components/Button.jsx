const Button = ({ amount, setAmount }) => {
	return (
		<button
			onClick={() => {
				const newAmount = { ...amount };
				newAmount.value++;
				setAmount(newAmount);
			}}
		>
			Views : {amount.value}
		</button>
	);
};

export default Button;
