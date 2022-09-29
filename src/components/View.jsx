import { useState } from 'react';
import Button from './Button';

const View = () => {
	console.log('Render-View');
	const [amount, setAmount] = useState({ value: 0 });
	return <Button amount={amount} setAmount={setAmount} />;
};

export default View;
