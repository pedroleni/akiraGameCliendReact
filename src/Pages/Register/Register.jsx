import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API } from '../../services/API';
import {
	ButtonSubmit,
	FormContainer,
	FormElement,
	RegisterContainer,
	RegisterSection,
} from './Register.element';

const Register = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const formSubmit = (data) => {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('nick', data.nick);
		formData.append('email', data.email);
		formData.append('location', data.location);
		formData.append('password', data.password);
		formData.append('image', data.image);

		API.post('/user/register', formData).then((res) => {
			if (res) {
				navigate('/');
			}
		});
	};

	return (
		<>
			<RegisterSection className='register_section'>
				<FormContainer className='form-container'>
					<RegisterContainer className='register-container'>
						<h2>Register</h2>
					</RegisterContainer>
					<FormElement onSubmit={handleSubmit(formSubmit)}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							name='name'
							{...register('name')}
							placeholder='Name'
						/>
						<label htmlFor='nick'>Nick</label>
						<input
							type='text'
							id='nick'
							name='nick'
							{...register('nick')}
							placeholder='Nick'
						/>

						<label htmlFor='email'>E-mail</label>
						<input
							type='text'
							id='email'
							name='email'
							{...register('email')}
							placeholder='example@mail.com'
						/>

						<label htmlFor='location'>Location</label>
						<input
							type='text'
							id='location'
							name='location'
							{...register('location')}
							placeholder='Madrid, Spain'
						/>

						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							{...register('password')}
							placeholder='Example123!*$'
						/>

						<label>Image</label>
						<input type='file' id='file-input' {...register('image')}></input>
						<label
							htmlFor='file-input'
							className='file-button'
							id='image'
							name='image'
						>
							Select File
						</label>
						<ButtonSubmit type='submit'>Submit</ButtonSubmit>
					</FormElement>
				</FormContainer>
			</RegisterSection>
		</>
	);
};

export default Register;
