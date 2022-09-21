import styled from '@emotion/styled';

export const LoginSection = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	height: 100vh;
	background-color: var(--secondary-back);
	color: var(--text-color);
	padding-top: 80px;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 442px;
	gap: 23px;
	padding: 60px;
	box-shadow: rgb(0 0 0 / 25%) 4px 3px 10px;
	background-color: #00000099;
	border-radius: 20px;
`;

export const LoginContainer = styled.div`
	color: #575757;
	text-align: center;
`;

export const FormElement = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
`;

export const ButtonSubmit = styled.button`
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
		color: black;
		background-color: #87b7e1;
	}
`;
