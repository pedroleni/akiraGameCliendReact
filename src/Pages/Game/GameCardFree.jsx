import { Link } from 'react-router-dom';
import ButtonStyle from '../../components/UI/ButtonStyle/Button';
import '../../Games.css';
import { GamesContainerCardFree } from './Game.element';

const GameCardFree = ({ game }) => {
	return (
		<GamesContainerCardFree className='game_card'>
			<div className='profile_img_container'>
				{game.thumbnail !== 'undefined' ? (
					<img
						className='imageCardGame_free'
						src={game.thumbnail}
						alt={game.title}
					/>
				) : (
					<img
						src='https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg'
						alt={game.title}
					/>
				)}
			</div>
			<div className='content_container'>
				{!game.title ? (
					<h2 className='titleCardFree'>No name</h2>
				) : (
					<h2 className='titleCardFree'>{game.title}</h2>
				)}
				{!game.genre ? (
					<h3 className='typeGameText'>No type</h3>
				) : (
					<h3 className='typeGameText'>{game.genre}</h3>
				)}
				{!game.release_date ? (
					<h3>Not launched</h3>
				) : (
					<h3>{game.release_date}</h3>
				)}
				<ButtonStyle variant={'small'}>
					<Link to={`/freetoplay/${game._id}`}>More...</Link>
				</ButtonStyle>
			</div>
		</GamesContainerCardFree>
	);
};

export default GameCardFree;
