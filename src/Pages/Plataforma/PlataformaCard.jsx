import '../../Games.css';
import { GamesContainerCard } from './Plataforma.element';

const GameCard = ({ plataforma }) => {
	return (
		<GamesContainerCard className='plataforma_card'>
			<div className='profile_img_container'>
				{plataforma.image !== 'undefined' ? (
					<img
						className='imageCardPlataforma'
						src={plataforma.image}
						alt={plataforma.name}
					/>
				) : (
					<img
						src='https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg'
						alt={plataforma.name}
					/>
				)}
			</div>
			<div className='content_container'>
				{!plataforma.name ? <h2>No name</h2> : <h2>{plataforma.name}</h2>}
				{!plataforma.company ? (
					<h3>No company</h3>
				) : (
					<h3 className='typeGameText'>{plataforma.company}</h3>
				)}
				{!plataforma.year ? <h3>Not launched</h3> : <h3>{plataforma.year}</h3>}
			</div>
		</GamesContainerCard>
	);
};

export default GameCard;
