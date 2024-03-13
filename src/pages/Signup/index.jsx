import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	Label,
	LabelError,
	Content,
	Strong,
	LabelSignup,
	Container,
} from './styles';
import { FaHiking, FaCheck } from 'react-icons/fa';
import { Button, Input } from '../../components';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [emailConf, setEmailConf] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState('');
	const navigate = useNavigate();

	const handleSignup = () => {
		if (!email || !emailConf || !password) {
			setMessage('Fill in all fields');
			return;
		} else if (email !== emailConf) {
			setMessage('Emails do not match');
			return;
		} else if (!checkEmail(email)) {
			setMessage('Enter email correctly');
			return;
		} else if (!checkPassword(password)) {
			setMessage('Password must contain at least 8 numbers and letters!');
			return;
		}
		// addUser(email, password);
		setSuccess('User account created successfully!');
		cleanForm();

		setTimeout(() => {
			navigate('/login');
		}, 1300);
	};

	const cleanForm = () => {
		setEmail('');
		setEmailConf('');
		setPassword('');
	};

	return (
		<Container height="100vh">
			<Content>
				<Label style={{ fontSize: '30px' }}>
					<FaHiking style={{ color: '#2F9B2C' }} /> User Account
				</Label>
				<LabelSignup>Create an account to manage your trails</LabelSignup>
				<Input
					type="email"
					placeholder="Enter your email address..."
					value={email}
					onChange={(e) => [setEmail(e.target.value), setMessage('')]}
				/>
				<Input
					type="email"
					placeholder="Confirm your email address..."
					value={emailConf}
					onChange={(e) => [setEmailConf(e.target.value), setMessage('')]}
				/>
				<Input
					type="password"
					placeholder="Enter your password..."
					value={password}
					onChange={(e) => [setPassword(e.target.value), setMessage('')]}
				/>
				<LabelError>{message}</LabelError>
				<Button Text="Get Started!" onClick={handleSignup} />
				<LabelSignup>
					Already have an account?
					<Strong>
						<Link to="/signin">&nbsp;Sign In</Link>
					</Strong>
				</LabelSignup>
			</Content>
		</Container>
	);
};

export default Signup;
