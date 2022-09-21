import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import WikipediaSearch from '../WikipediaSearch/WikipediaSearch';

const theme = {
	background: '#f5f8fb',
	headerBgColor: '#eb3449',
	headerFontColor: '#fff',
	headerFontSize: '20px',
	botBubbleColor: '#eb3449',
	botFontColor: '#fff',
	userBubbleColor: '#0cb3c9',
	userFontColor: '#fff',
};

const Contenido = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<ChatBot
					steps={[
						{
							id: '1',
							message: "Hello world. I am a Robot. What's your name?",
							trigger: '2',
						},
						{
							id: '2',
							user: true,
							validator: (value) => {
								if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
									return true;
								} else {
									return 'Please enter a valid name.';
								}
							},
							trigger: '3',
						},
						{
							id: '3',
							message: 'Hi, nice to meet you!',
							trigger: '4',
						},
						{
							id: '4',
							message: 'Do you need anything from me?',
							trigger: '5',
						},
						{
							id: '5',
							options: [
								{ value: 'y', label: 'Yes', trigger: '6A' },
								{ value: 'n', label: 'No', trigger: '6B' },
							],
						},
						{
							id: '6A',
							message: 'Great! Tell me what are you looking for...',
							trigger: 'seleccion',
						},
						{
							id: '6B',
							message: 'Im sorry if I cannot be of help to you. See you later',
							end: true,
						},
						{
							id: 'seleccion',
							options: [
								{ value: 'f', label: 'Profile', trigger: '7A' },
								{ value: 'b', label: 'Play mini-game', trigger: '7B' },
								{ value: 'c', label: 'What to play', trigger: '7C' },
								{ value: 'e', label: 'Hogwarts Legacy', trigger: '7D' },
							],
						},
						{
							id: '7A',
							message:
								'Check out the top of the age. You will see your avatar image, click on it. Here you have your profile. You can change your image, change your description and change some of your info',
							trigger: 'preguntaVuelta',
						},
						{
							id: '7B',
							message:
								'If you want to try some mini-games need to go to our top page in Menu. Click on the button with the play icon and this will redirect to our games. Enjoy!',
							trigger: 'preguntaVuelta',
						},
						{
							id: '7C',
							message:
								'This month just release a new game called -A Plague Tale: Requiem- ',
							trigger: 'preguntaVuelta',
						},
						{
							id: '7D',
							message:
								' Hogwarts Legacy will launch on February 10, 2023 for PlayStation, Xbox and PC. The Nintendo Switch launch date will be revealed soon.',
							trigger: 'preguntaVuelta',
						},

						{
							id: 'preguntaVuelta',
							message: 'Do you need to know anything else?',
							trigger: 'respuestaVuelta',
						},
						{
							id: 'respuestaVuelta',
							options: [
								{ value: 'y', label: 'Yes', trigger: '6A' },
								{ value: 'n', label: 'No', trigger: '6B' },
							],
						},
					]}
				/>
			</ThemeProvider>
		</>
	);
};

export default Contenido;
