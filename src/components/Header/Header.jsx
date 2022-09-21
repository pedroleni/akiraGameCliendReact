import {
	HeaderContainer,
	HeaderElement,
	LogoContainer,
} from './Header.element';
import ButtonStyle from '../UI/ButtonStyle/Button';
import ButtonDespegable from '../UI/ButtonDesplegable/ButtonDespegable';
import { BsFillMusicPlayerFill, BsPlayFill } from 'react-icons/bs';
import H1Custom from '../UI/H1Custom/H1Custom';
import { Link, useNavigate } from 'react-router-dom';
import { MdHelp } from 'react-icons/md';
import { FiRadio } from 'react-icons/fi';
import RenderBot from '../RenderBot/RenderBot';
import { useState, useContext } from 'react';
import RenderPlaylist from '../RenderPlaylist/RenderPlaylist';
import RenderFavPodcast from '../RenderFavPodcast/RenderFavPodcast';
import { JwtContext } from '../../context/jwtContext';
import { themeLight, themeDark } from './styles/theme';

const Header = () => {
	const [themePovide, setThemeProvide] = useState(themeDark);
	const [chatBot, setChatBot] = useState();
	const [playlist, setPlaylist] = useState();
	const [favPodcast, setFavPodcast] = useState();

	const { user, logout } = useContext(JwtContext);
	const navigate = useNavigate();

	const toggleTheme = () => {
		setThemeProvide(themePovide === themeLight ? themeDark : themeLight);
	};

	const myFunction = () => {
		playlist === 'block' ? setPlaylist('none') : setPlaylist('none');
		const hide = document.querySelector('.playlist');
		if (playlist === 'none') hide.style.display = playlist;

		favPodcast === 'block' ? setFavPodcast('none') : setFavPodcast('none');
		const hideTwo = document.querySelector('.podcast');
		if (favPodcast === 'none') hideTwo.style.display = favPodcast;

		chatBot === 'none' ? setChatBot('block') : setChatBot('none');
		const cambio = document.querySelector('.renderContainer');
		cambio.style.display = chatBot;
	};

	const myFunctionPlaylist = () => {
		chatBot === 'block' ? setChatBot('none') : setChatBot('none');
		const hide = document.querySelector('.renderContainer');
		if (chatBot === 'none') hide.style.display = chatBot;

		favPodcast === 'block' ? setFavPodcast('none') : setFavPodcast('none');
		const hideTwo = document.querySelector('.podcast');
		if (favPodcast === 'none') hideTwo.style.display = favPodcast;

		playlist === 'none' ? setPlaylist('block') : setPlaylist('none');
		const cambio = document.querySelector('.playlist');
		cambio.style.display = playlist;
	};

	const myFunctionFavPodcast = () => {
		chatBot === 'block' ? setChatBot('none') : setChatBot('none');
		const hide = document.querySelector('.renderContainer');
		if (chatBot === 'none') hide.style.display = chatBot;

		playlist === 'block' ? setPlaylist('none') : setPlaylist('none');
		const hideTwo = document.querySelector('.playlist');
		if (playlist === 'none') hideTwo.style.display = playlist;

		favPodcast === 'none' ? setFavPodcast('block') : setFavPodcast('none');
		const cambio = document.querySelector('.podcast');
		cambio.style.display = favPodcast;
	};

	return (
		<HeaderContainer>
			<HeaderElement>
				<div className='leftHeader'>
					<Link to={'/'}>
						<LogoContainer className='logo'></LogoContainer>
					</Link>
				</div>
				<div className='BtnHeader'>
					<ul className='HeaderList'>
						<Link to={'/'}>
							<li>Home</li>
						</Link>
						<Link to={'/game'}>
							<li>Games</li>
						</Link>
						<Link to={'/posts'}>
							<li>Posts</li>
						</Link>

						<a
							className='chat'
							href='https://game-a5d6a.firebaseapp.com/'
							target='blank'
						>
							<li className='chat'>Chat</li>
						</a>
					</ul>
					{user ? (
						<div className='profile-header-container'>
							<div className='listStyleHeader'>
								<div className='li_avatar'>
									<div className='avatar_container'>
										<Link to={'/profile'}>
											{user.image !== 'undefined' ? (
												<img src={user?.image} alt='user Avatar' />
											) : null}
										</Link>
									</div>
								</div>
							</div>
							<div onClick={() => logout() & navigate('/')}>
								<ButtonStyle variant={'small'} height={'30px'} width={'40px'}>
									logout
								</ButtonStyle>
							</div>
						</div>
					) : (
						<>
							<ButtonStyle variant={'small'} height={'30px'} width={'40px'}>
								<Link to={'/login'}>Log in</Link>
							</ButtonStyle>
							<ButtonStyle
								variant={'smallSecond'}
								height={'30px'}
								width={'50px'}
							>
								<Link to={'/register'}>Sign up</Link>
							</ButtonStyle>
						</>
					)}

					<ButtonDespegable height={'30px'} width={'30px'}>
						<H1Custom>
							<BsPlayFill />
						</H1Custom>
					</ButtonDespegable>

					<RenderBot />
					<div onClick={myFunction}>
						<ButtonDespegable
							className='Help'
							position={'fixed'}
							height={'50px'}
							width={'50px'}
							right={'20px'}
							bottom={'80px'}
						>
							<H1Custom>
								<MdHelp fontSize={'35px'} />
							</H1Custom>
						</ButtonDespegable>
					</div>
					<RenderFavPodcast />
					<div onClick={myFunctionFavPodcast}>
						<ButtonDespegable
							className='Podcast'
							position={'fixed'}
							height={'50px'}
							width={'50px'}
							right={'20px'}
							bottom={'140px'}
							padding={'0px 0px 0px 6px'}
						>
							<H1Custom>
								<FiRadio fontSize={'35px'} />
							</H1Custom>
						</ButtonDespegable>
					</div>
					<RenderPlaylist />
					<div onClick={myFunctionPlaylist}>
						<ButtonDespegable
							className='Music'
							position={'fixed'}
							height={'50px'}
							width={'50px'}
							right={'20px'}
							bottom={'20px'}
							padding={'0px 0px 0px 6px'}
						>
							<H1Custom>
								<BsFillMusicPlayerFill fontSize={'35px'} />
							</H1Custom>
						</ButtonDespegable>
					</div>
				</div>
			</HeaderElement>
		</HeaderContainer>
	);
};

export default Header;
