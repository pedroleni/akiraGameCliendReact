import { useContext } from 'react';
import { JwtContext } from '../../context/jwtContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API } from '../../services/API';
import Swal from 'sweetalert2';
import { FormContainer, FormElement, LoginSection } from './Login.element';

const Login = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const { setJwt, setUser } = useContext(JwtContext);

	const notify = () => {
		Swal.fire({
			title: 'Loging in...',
			showConfirmButton: false,
			allowOutsideClick: false,
			timer: 5000,
			timerProgressBar: true,
		});
	};

	const formSubmit = (formData) => {
		API.post('/user/login', formData).then((res) => {
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('user', JSON.stringify(res.data.userInDb));
			setJwt(res.data.token);
			setUser(res.data.userInDb);
			if (res.data.token) {
				navigate('/profile');
			}
		});
	};

	return (
		<LoginSection>
			<FormContainer>
				<FormElement onSubmit={handleSubmit(formSubmit)}>
					<label htmlFor='nick'>nick</label>
					<input
						type='text'
						id='nick'
						name='nick'
						{...register('nick')}
					></input>

					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						name='password'
						title='Minimo 6 caracteres, debe contener al menos una letra mayuscula,
         al menos una minuscula y debe tener un caracter especial'
						pattern='^(?=.*[A-Z])(?=.*[.!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$'
						{...register('password')}
					></input>
					<label className='submit'></label>
					<input type='submit' onClick={notify}></input>
				</FormElement>
			</FormContainer>
		</LoginSection>
	);
};

export default Login;
