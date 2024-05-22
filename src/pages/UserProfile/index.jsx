import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	Sidebar,
	Header,
	Container,
	Wrapper,
	Content,
	Title,
	InputHookForm,
	Button,
} from '../../components';
import { Subtitle, FormContainer } from './styles';
import { saveTrail } from '../../services/trail';
import { successNotification, errorNotification } from '../../services/notification';

const schema = yup
	.object({
		name: yup.string().required('Insert yout name'),
		email: yup.string().email().required('Insert your email address'),
		country: yup.string().required('Insert your country'),
		city: yup.string().required('Insert your city'),
		password: yup.string().required('Insert yout password'),
		profileImageURL: yup.string().required('Insert your profile image url'),
	})
	.required();

const UserProfile = () => {
	const navigate = useNavigate();

	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			country: '',
			city: '',
			password: '',
			profileImageURL: '',
		},
	});

	const onSubmit = async (formData) => {
		saveTrail(formData)
			.then(() => {
				reset();
				successNotification('User profile successfully saved!');
				navigate('/trails');
			})
			.catch((err) => {
				const errorMessage = `Error saving user profile ${err.code} ${err.message}`;
				errorNotification(errorMessage);
			});
	};

	return (
		<Wrapper>
			<Header />
			<Sidebar />
			<Container>
				<Content>
					<FormContainer>
						<Title>User Profile</Title>
						<Subtitle>Details</Subtitle>
						<form style={{ width: '275px' }} onSubmit={handleSubmit(onSubmit)}>
							<InputHookForm
								type='email'
								placeholder='Email Address'
								name='email'
								control={control}
								errorMessage={errors?.email?.message}
							/>
							<InputHookForm
								placeholder='Name'
								name='name'
								control={control}
								errorMessage={errors?.name?.message}
							/>

							<InputHookForm
								type='text'
								placeholder='Country'
								name='country'
								control={control}
								errorMessage={errors?.country?.message}
							/>
							<InputHookForm
								type='text'
								placeholder='City'
								name='city'
								control={control}
								errorMessage={errors?.city?.message}
							/>
							<InputHookForm
								placeholder='Password'
								name='password'
								control={control}
								errorMessage={errors?.password?.message}
							/>
							<InputHookForm
								type='text'
								placeholder='Profile Image URL'
								name='profileImageURL'
								control={control}
								errorMessage={errors?.profileImageURL?.message}
							/>
							<Button
								style={{ marginTop: '25px' }}
								Text='Save User Profile'
								variant='secondary'
								type='submit'
							/>
						</form>
					</FormContainer>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default UserProfile;
