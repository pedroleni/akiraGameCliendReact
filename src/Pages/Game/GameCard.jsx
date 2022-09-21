import ButtonStyle from '../../components/UI/ButtonStyle/Button';
import '../../Games.css';
import { GamesContainerCard } from './Game.element';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
	return (
		<GamesContainerCard className='game_card'>
			<div className='profile_img_container'>
				{game.image !== 'undefined' ? (
					<img className='imageCardGame' src={game.image} alt={game.name} />
				) : (
					<img
						src='https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg'
						alt={game.name}
					/>
				)}
			</div>
			<div className='content_container'>
				{!game.name ? (
					<h2>No name</h2>
				) : (
					<h2 className='title_game'>{game.name}</h2>
				)}
				{!game.type ? (
					<h3>No type</h3>
				) : (
					<h3 className='typeGameText'>{game.type}</h3>
				)}
				{!game.year ? <h3>Not launched</h3> : <h3>{game.year}</h3>}
				<div>
					<ButtonStyle variant={'small'}>
						<Link to={`/game/${game._id}`}>More...</Link>
					</ButtonStyle>
				</div>
			</div>
		</GamesContainerCard>
	);
};

export default GameCard;
