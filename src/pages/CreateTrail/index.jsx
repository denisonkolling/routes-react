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
		title: yup.string().required('Insert the trail name'),
		location: yup.string().required('Insert the trail location'),
		rate: yup
			.number()
			.nullable()
			.transform((value, original) => (original === '' ? null : value))
			.min(0, 'Rate must be greater than or equal to 0')
			.max(5, 'Rate must be less than or equal to 5')
			.required('Insert the trail rate between 0 and 5'),
		length: yup
			.number()
			.nullable()
			.transform((value, original) => (original === '' ? null : value))
			.required('Insert the trail length'),
		time: yup.string().required('Insert the trail time'),
		imageURL: yup.string().required('Insert the trail image url'),
	})
	.required();

const CreateTrail = () => {
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
			title: '',
			location: '',
			rate: '',
			length: '',
			time: '',
			imageURL: '',
		},
	});

	const onSubmit = async (formData) => {
		saveTrail(formData)
			.then(() => {
				reset();
				successNotification('Trail successfully saved!');
				navigate('/trails');
			})
			.catch((err) => {
				const errorMessage = `Error saving trail ${err.code} ${err.message}`;
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
						<Title>Create Trail</Title>
						<Subtitle>Fill in to create a new route</Subtitle>
						<form style={{ width: '275px' }} onSubmit={handleSubmit(onSubmit)}>
							<InputHookForm
								placeholder='Lake Tahoe'
								name='title'
								control={control}
								errorMessage={errors?.title?.message}
							/>
							<InputHookForm
								placeholder='Tahoe National Forest'
								name='location'
								control={control}
								errorMessage={errors?.location?.message}
							/>
							<InputHookForm
								type='number'
								placeholder='4.5'
								name='rate'
								control={control}
								errorMessage={errors?.rate?.message}
							/>
							<InputHookForm
								type='number'
								placeholder='2.5mi'
								name='length'
								control={control}
								errorMessage={errors?.length?.message}
							/>
							<InputHookForm
								type='string'
								placeholder='45Min'
								name='time'
								control={control}
								errorMessage={errors?.time?.message}
							/>
							<InputHookForm
								type='string'
								placeholder='Image URL'
								name='imageURL'
								control={control}
								errorMessage={errors?.imageURL?.message}
							/>
							<Button
								style={{ marginTop: '25px' }}
								Text='Create Trail'
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

export default CreateTrail;
