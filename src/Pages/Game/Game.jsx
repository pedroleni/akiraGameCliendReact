import { useEffect, useState } from 'react';
import { API } from '../../services/API';
import '../../Games.css';
import GameCard from './GameCard';
import { HeroGames } from './Game.element';
import ButtonStyle from '../../components/UI/ButtonStyle/Button';
import { Link } from 'react-router-dom';

const Game = () => {
	const [allGames, setAllGames] = useState([]);

	const getAllGames = async () => {
		API.get('/juego/').then((res) => {
			setAllGames(res.data.data.juego);
			console.log(res.data.data.juego);
		});
	};

	useEffect(() => {
		getAllGames();
	}, []);

	return (
		<>
			<HeroGames>
				<div className='BtnGames'>
					<ButtonStyle variant={'small'}>
						<Link className='LinkBtn' to={'/game'}>
							Games
						</Link>
					</ButtonStyle>

					<ButtonStyle variant={'small'}>
						<Link className='LinkBtn' to={'/freetoplay'}>
							Free to play
						</Link>
					</ButtonStyle>
				</div>
				<div className='games_container'>
					{allGames.length ? (
						allGames.map((game) => <GameCard game={game} key={game._id} />)
					) : (
						<p>Loading Games...</p>
					)}
				</div>
			</HeroGames>
		</>
	);
};

export default Game;
