import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label, LabelError, Content, Strong, LabelSignup, Container } from './styles';
import { FaHiking, FaCheck } from 'react-icons/fa';
import { Button, Input } from '../../components';
import { saveCustomer } from '../../services/customer.js';
import { successNotification, errorNotification } from '../../services/notification';
import { useAuth } from '../../context/AuthContext';

const Signup = () => {
	const { customer, setCustomerFromToken } = useAuth();
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState('');
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		age: '',
		gender: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (formData) => {
		console.log(formData);
		saveCustomer(formData)
			.then((res) => {
				console.log(res);
				localStorage.setItem('access_token', res.headers['authorization']);
				setCustomerFromToken();
				cleanForm();
				successNotification('Usuário cadastrado com sucesso!');
				setTimeout(() => {
					navigate('/login');
				}, 1300);
			})
			.catch((err) => {
				console.log(err);
				errorNotification(err.code || 'Error', err.response.data.message || 'An error occurred');
			});
	};

	const cleanForm = () => {
		setFormData({
			name: '',
			email: '',
			age: '',
			gender: '',
			password: '',
		});
	};

	return (
		<Container height="100vh">
			<Content>
				<Label style={{ fontSize: '30px' }}>
					<FaHiking style={{ color: '#2F9B2C' }} /> User Account
				</Label>
				<LabelSignup>Create an account to manage your trails</LabelSignup>
				<Input type="text" placeholder="Enter your full name..." name="name" value={formData.name} onChange={handleChange} />
				<Input type="email" placeholder="Enter your email address..." name="email" value={formData.email} onChange={handleChange} />
				<Input type="number" placeholder="Enter your age..." name="age" value={formData.age} onChange={handleChange} />
				<Input type="text" placeholder="Enter your gender..." name="gender" value={formData.gender} onChange={handleChange} />
				<Input type="password" placeholder="Enter your password..." name="password" value={formData.password} onChange={handleChange} />
				<LabelError>{message}</LabelError>
				<Button Text="Get Started!" onClick={() => handleSubmit(formData)} />
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
