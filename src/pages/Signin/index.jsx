import { Button, Input } from '../../components';
import { useState } from 'react';
import {
	Content,
	Label,
	LabelError,
	LabelSignin,
	Strong,
	Container,
} from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { FaRoute } from 'react-icons/fa';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleLogin = () => {
		console.log('Login');
		navigate('/home');
	};

	return (
		<Container height="100vh">
			<Content>
				<Label style={{ fontSize: '30px' }}>
					<FaRoute style={{ color: '#2F9B2C' }} /> Routes React
				</Label>
				<LabelSignin>
					Welcome back.
					<br />
					Sign in and start exploring.
				</LabelSignin>
				<Input
					type="email"
					value={email}
					placeholder="Email"
					onChange={(e) => [setEmail(e.target.value), setMessage('')]}
				/>
				<Input
					type="password"
					value={password}
					placeholder="Password"
					onChange={(e) => [setPassword(e.target.value), setMessage('')]}
				/>
				<LabelError>{message}</LabelError>
				<Button Text="Sign In" color="#2F9B2C" onClick={handleLogin}></Button>
				<LabelSignin>
					Don't have an account?
					<Strong>
						<Link to="/signup">&nbsp;Sign up</Link>
					</Strong>
				</LabelSignin>
			</Content>
		</Container>
	);
};

export default Login;
