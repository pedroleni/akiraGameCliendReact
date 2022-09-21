import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import GlobalStyles from './styles/globalStyles';
import { createTheme } from './styles/utils';
import { themeLight, themeDark } from './styles/theme';
import './App.css';
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Pages/Game/Game';
import Home from './Pages/Homee/Home';
import GameFree from './Pages/Game/GameFree';
import Articulo from './Pages/Articulo/Articulo';
import Plataforma from './Pages/Plataforma/Plataforma';
import Register from './Pages/Register/Register';
import GameDetail from './Pages/GameDetail/GameDetail';
import Login from './Pages/Login/Login';
import { JwtContextProvider } from './context/jwtContext';
import Profile from './Pages/Profile/Profile';
import FreeDetail from './Pages/FreeDetail/FreeDetail';
import PostDetail from './Pages/PostDetail/PostDetail';
import VideoGallery from './Pages/VideoGallery/VideoGallery';
import Headerf from './components/Headerf/Headerf';
import Minigames from './Pages/Minigames/Minigames';

function App() {
	const [themePovide, setThemeProvide] = useState(themeDark);

	const toggleTheme = () => {
		setThemeProvide(themePovide === themeLight ? themeDark : themeLight);
		const btnSwitch = document.querySelector('#switch');
		btnSwitch.classList.toggle('active');
		document.body.classList.toggle('dark');
	};

	return (
		<JwtContextProvider>
			<ThemeProvider theme={createTheme(themePovide)}>
				<GlobalStyles />
				<Router>
					{/* <Header toggleTheme={toggleTheme} /> */}
					<Headerf toggleTheme={toggleTheme} />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/game' element={<Game />} />
						<Route path='/video' element={<VideoGallery />} />
						<Route path='/game/:id' element={<GameDetail />} />
						<Route path='/freetoplay' element={<GameFree />} />
						<Route path='/freetoplay/:id' element={<FreeDetail />} />
						<Route path='/posts' element={<Articulo />} />
						<Route path='/posts/:id' element={<PostDetail />} />
						<Route path='/platforms' element={<Plataforma />} />
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/play' element={<Minigames />} />
					</Routes>
					<Footer height={'30px'} width={'30px'} />
				</Router>
			</ThemeProvider>
		</JwtContextProvider>
	);
}

export default App;
