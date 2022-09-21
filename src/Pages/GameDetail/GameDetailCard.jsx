import '../../Games.css';
import {
	DescriptionDetail,
	GameDetailCardElement,
	RightContent,
} from './GameDetail.element';

const GameDetailCard = ({ game }) => {
	console.log(game);
	return (
		<>
			<GameDetailCardElement>
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
				<RightContent>
					{!game.name ? (
						<h1 className='titleDetail'>No name</h1>
					) : (
						<h1 className='titleDetail'>{game.name}</h1>
					)}
					<div className='infoTopDetail'>
						{!game.type ? <h3>No type</h3> : <h3>{game.type}</h3>}
						{!game.desarrolladora ? (
							<h3>No dev</h3>
						) : (
							<h3>{game.desarrolladora}</h3>
						)}
						{!game.year ? <h3>Not launched</h3> : <h3>{game.year}</h3>}
						{!game.pegi ? <h3>Not launched</h3> : <h3>PEGI: {game.pegi}</h3>}
						<div className='consolasicon'>
							{game.plataformas?.toLowerCase().includes('ps5') ? (
								<img
									className='plataformaIcon'
									src='https://media.discordapp.net/attachments/1014491221349109770/1021247206629580900/ps5.jpg?width=666&height=666'
								/>
							) : null}
							{game.plataformas?.toLowerCase().includes('ps4') ? (
								<img
									className='plataformaIcon'
									src='https://res.cloudinary.com/dq186ej4c/image/upload/v1663332906/game/rwbwhh7jrwoouvr0byhu.png'
								/>
							) : null}
							{game.plataformas?.toLowerCase().includes('xs') ? (
								<img
									className='plataformaIcon'
									src='https://res.cloudinary.com/dq186ej4c/image/upload/v1663333259/game/kowrefiycdsao3lof0x3.jpg'
								/>
							) : null}
							{game.plataformas?.toLowerCase().includes('switch') ? (
								<img
									className='plataformaIcon'
									src='https://res.cloudinary.com/dq186ej4c/image/upload/v1663333012/game/ufqdtu0juz5yextfdzqc.jpg'
								/>
							) : null}
							{game.plataformas?.toLowerCase().includes('pc') ? (
								<img
									className='plataformaIcon'
									src='https://i.redd.it/5be3ypqjts171.jpg'
								/>
							) : null}
						</div>
					</div>
					<DescriptionDetail>
						{!game.descripcion ? (
							<p className='descripcionText'>Not launched</p>
						) : (
							<p className='descripcionText'>{game.descripcion}</p>
						)}
					</DescriptionDetail>
					{/* //TODO VIDEO */}
				</RightContent>
			</GameDetailCardElement>
			<iframe
				className='iframeYoutube'
				width='760'
				height='515'
				src={game.video}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			></iframe>
		</>
	);
};

export default GameDetailCard;
