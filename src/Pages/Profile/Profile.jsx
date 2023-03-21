import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../../context/jwtContext';
import { API } from '../../services/API';
import {
	HeroProfile,
	ProfileSection,
	ImageProfile,
	FormGroupProfile,
	Label,
	Input,
	ButtonSubmit,
} from '../Profile/Profile.element';

const Profile = () => {
	const { user, logout } = useContext(JwtContext);

	const resetUser = () => {
		const savedUser = localStorage.getItem('user');
		const resetValue = JSON.parse(savedUser);
		localStorage.setItem('userRefresh', JSON.stringify(resetValue));
	};

	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const defaultValues = {
		nick: user.nick,
		location: user.location,
		image: user.image,
	};

	const formSubmit = (data) => {
		const formData = new FormData();
		formData.append('nick', data.nick);
		formData.append('location', data.location);
		console.log("file", data.image[0])
		// formData.append("searchCouple", data.searchCouple);
		data.image[0] ? formData.append('image', data.image[0]) : <></>;
		API.patch(`/user/${user._id}`, formData).then((res) => {
			logout();
			if (res) {
				navigate('/');
			}
		});
	};

	useEffect(() => {
		resetUser();
	}, []);

	return (
		<>
			<HeroProfile>
				<ProfileSection className='profile'>
					<ImageProfile className='container_profile'>
						<div className='left-container-profile'>
							<div className='container_image_profile'>
								<img
									className='profile-img'
									src={user.image}
									alt='User image'
								/>
							</div>
							<div className='container_edit-profile'>
								<FormGroupProfile onSubmit={handleSubmit(formSubmit)}>
									<div className='formprofile'>
										<Label htmlFor='nick'>nick</Label>
										<Input
											type='text'
											id='nick'
											name='nick'
											{...register('nick')}
											defaultValue={defaultValues.nick}
										></Input>
										<Label htmlFor='location'>location</Label>
										<Input
											type='text'
											id='location'
											name='location'
											{...register('location')}
											defaultValue={defaultValues.location}
										></Input>
									</div>
									<div className='formprofile'>
										<Label>Image</Label>
										<input
											type='file'
											id='file-input'
											{...register('image')}
										></input>
										<label
											htmlFor='file-input'
											className='file-button'
											id='image'
											name='image'
										>
											Select File
										</label>
										<ButtonSubmit type='submit'>Edit Profile</ButtonSubmit>
									</div>
								</FormGroupProfile>
							</div>
						</div>
					</ImageProfile>
				</ProfileSection>
			</HeroProfile>
		</>
	);
};

export default Profile;
