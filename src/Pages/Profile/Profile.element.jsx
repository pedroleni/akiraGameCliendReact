import styled from '@emotion/styled';

export const HeroProfile = styled.div`
	height: 100vh;
	min-height: 1043px;
	color: black;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-top: 150px;
`;

export const HeroProfileContainer = styled.div`
	width: 400px;
	height: 600px;
	background-color: #ffffff;
	color: black;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TitleProfile = styled.h1`
	color: black;
	letter-spacing: 3px;
`;

export const ProfileSection = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ImageProfile = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`;

export const FormGroupProfile = styled.form`
	color: #000000;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 300px;
	margin: 50px auto;
	height: 100%;
	gap: 30px;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #dadada;
	display: block;
	font-weight: bolder;
`;

export const ButtonRED = styled.button`
	padding: 0.5em;
	color: #ffffff;
	background: #621515;
	border: none;
	border-radius: 10px;
	width: 50%;
	height: 60px;
	margin-bottom: 0.5em;
	margin-top: 40px;
	&&:hover {
		background-color: #991e1e;
	}
`;

export const Input = styled.input`
	padding: 0.5em;
	color: #000000;
	background: #dcdcdc72;
	border: none;
	font-weight: bold;
	font-size: 14px;
	border-radius: 10px;
	width: 100%;
	margin-bottom: 0.5em;
	&&:focus {
		border-color: black solid 2px;
	}
	@media (max-width: 1200px) {
		&&:focus {
			border-color: black solid 2px;
		}
	}
`;

export const InputSubmit = styled.input`
	padding: 0.5em;
	color: #ffffff;
	background: #000000;
	border: none;
	border-radius: 10px;
	width: 30%;
	height: 60px;
	margin-bottom: 0.5em;
	margin-top: 40px;
	&&:hover {
		color: white;
		background-color: #602585;
	}
`;

export const ButtonSubmit = styled.button`
	padding: 0.5em;
	color: #ffffff;
	background: #af2727;
	border: none;
	border-radius: 10px;
	width: 100%;
	height: 39px;
	margin-bottom: 0.5em;
	margin-top: 40px;
	&&:hover {
		color: white;
		background-color: #5e2ba6;
	}
`;
