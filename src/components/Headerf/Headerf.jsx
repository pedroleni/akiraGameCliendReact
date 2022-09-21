import './Headerf.css';
import { LogoContainer } from './Header.element';
import { Link, useNavigate } from 'react-router-dom';
import ButtonStyle from '../UI/ButtonStyle/Button';
import ButtonDespegable from '../UI/ButtonDesplegable/ButtonDespegable';
import { BsFillMusicPlayerFill, BsPlayFill } from 'react-icons/bs';
import H1Custom from '../UI/H1Custom/H1Custom';
import { MdHelp } from 'react-icons/md';
import { FiRadio } from 'react-icons/fi';
import RenderBot from '../RenderBot/RenderBot';
import { useState, useContext } from 'react';
import RenderPlaylist from '../RenderPlaylist/RenderPlaylist';
import RenderFavPodcast from '../RenderFavPodcast/RenderFavPodcast';
import { JwtContext } from '../../context/jwtContext';

const Headerf = ({ toggleTheme }) => {
	const [chatBot, setChatBot] = useState();
	const [playlist, setPlaylist] = useState();
	const [favPodcast, setFavPodcast] = useState();
	const { user, logout } = useContext(JwtContext);
	const navigate = useNavigate();
	const toggleSidenav = () => {
		document.querySelector('.main-menu').classList.toggle('show');
		const line1Bars = document.querySelector('.line1__bars-menu');
		const line2Bars = document.querySelector('.line2__bars-menu');
		const line3Bars = document.querySelector('.line3__bars-menu');

		line1Bars.classList.toggle('activeline1__bars-menu');
		line2Bars.classList.toggle('activeline2__bars-menu');
		line3Bars.classList.toggle('activeline3__bars-menu');
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
		<>
			<div className='menu-btn'>
				<div className='bars__menu' onClick={toggleSidenav}>
					<span className='line1__bars-menu'></span>
					<span className='line2__bars-menu'></span>
					<span className='line3__bars-menu'></span>
				</div>
			</div>

			<div className='wrapper'>
				<header>
					<nav className='main-nav'>
						<div className='container_image_logo_header'>
							<div className='logo_nav'>
								<Link to={'/'}>
									<LogoContainer className='logo'></LogoContainer>
								</Link>
							</div>

							{/* -------dark mode ------------ */}
						</div>

						<ul className='main-menu'>
							<Link to='/'>
								<li className='linkado' onClick={toggleSidenav}>
									HOME
								</li>
							</Link>

							<Link to={'/game'}>
								<li className='linkado' onClick={toggleSidenav}>
									Games
								</li>
							</Link>
							<Link to={'/posts'}>
								<li className='linkado' onClick={toggleSidenav}>
									Posts
								</li>
							</Link>
							<Link to={'/platforms'}>
								<li className='linkado' onClick={toggleSidenav}>
									Platforms
								</li>
							</Link>
							<a
								onClick={toggleSidenav}
								href='https://game-a5d6a.firebaseapp.com/'
								target='blank'
							>
								<li className='chat'>Chat</li>
							</a>

							{user ? (
								<>
									<Link to='/profile'>
										<li className='linkado' onClick={toggleSidenav}>
											PROFILE
										</li>
									</Link>
								</>
							) : (
								<></>
							)}

							<div className='switchdiv'>
								<li>
									<button className='switch' id='switch' onClick={toggleTheme}>
										<span>
											<i className='fas fa-sun'></i>
										</span>
										<span>
											<i className='fas fa-moon'></i>
										</span>
									</button>
								</li>
							</div>

							<div className='div_father_control'>
								<div className='control'>
									{user ? (
										<>
											<div className='Play'>
												<Link to='/play'>
													<button
														className='btnPlay'
														height={'30px'}
														width={'30px'}
													>
														<H1Custom>
															<BsPlayFill />
														</H1Custom>
													</button>
												</Link>
											</div>
											<p className='welcome'>Welcome {user.name}</p>
											<div className='container_imagen_logout'>
												{user.avatar !== 'undefined' ? (
													<div className='image_control'>
														<img
															className='image_control_image'
															src={user?.image}
															alt='User Avatar'
														/>
													</div>
												) : null}

												<div
													className='linkado_logout'
													onClick={() => logout() & navigate('/')}
												>
													<ButtonStyle
														onClick={toggleSidenav}
														variant={'small'}
														height={'30px'}
														width={'40px'}
													>
														logout
													</ButtonStyle>
												</div>
											</div>
										</>
									) : (
										<>
											{' '}
											<Link to='/play'>
												<div className='Play'>
													<ButtonDespegable height={'30px'} width={'30px'}>
														<H1Custom>
															<BsPlayFill />
														</H1Custom>
													</ButtonDespegable>
												</div>
											</Link>
											<ul>
												<div onClick={toggleSidenav}>
													<ButtonStyle
														onClick={toggleSidenav}
														variant={'small'}
														height={'30px'}
														width={'40px'}
														className='linkado_login'
													>
														<Link to={'/login'}>Log in</Link>
													</ButtonStyle>
												</div>

												<div onClick={toggleSidenav}>
													<ButtonStyle
														onClick={toggleSidenav}
														variant={'smallSecond'}
														height={'30px'}
														width={'50px'}
														className='linkado_register'
													>
														<Link to={'/register'}>Sign up</Link>
													</ButtonStyle>
												</div>
											</ul>
											<div className='logo_noUser'>
												<img
													src='https://i.ibb.co/SR6Vfq3/pngegg.png'
													alt='logo'
													className='noUser_logo'
												/>
											</div>
										</>
									)}
								</div>
							</div>
						</ul>
					</nav>
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
				</header>
			</div>
		</>
	);
};

export default Headerf;
