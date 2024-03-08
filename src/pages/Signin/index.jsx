import { Button, Input } from '../../components';
import { useState } from 'react';
import { useAuth } from "../../context/AuthContext"
import { Content, Label, LabelError, LabelSignin, Strong, Container } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { FaRoute } from 'react-icons/fa';
import { apiLogin } from "../../services/api"

const Signin = () => {
	const { login } = useAuth()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const handleSignin = async (event) => {
		event.preventDefault()

		try {
				const response = apiLogin(email, password)
				if (response.success) {
						login(response)
						navigate('/home')
				} else {
					setMessage(response);
					return;
				}

		} catch (error) {
				console.log(error)
		}
}

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
				<Button Text="Sign In" color="#2F9B2C" onClick={handleSignin}></Button>
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

export default Signin;
