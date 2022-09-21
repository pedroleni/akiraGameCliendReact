import { useEffect, useState } from 'react';
import { API } from '../../services/API';
import '../../Games.css';
import { HeroGames } from './Game.element';
import ButtonStyle from '../../components/UI/ButtonStyle/Button';
import { Link } from 'react-router-dom';
import GameCardFree from './GameCardFree';

const GameFree = () => {
	const [allGames, setAllGames] = useState([]);

	const getAllGames = async () => {
		API.get('/free').then(res => {
			setAllGames(res.data.data.free);
			console.log(res.data.data.free);
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
						allGames.map(game => <GameCardFree game={game} key={game._id} />)
					) : (
						<p>Loading Games...</p>
					)}
				</div>
			</HeroGames>
		</>
	);
};

export default GameFree;
