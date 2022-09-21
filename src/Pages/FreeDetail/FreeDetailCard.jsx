import '../../Games.css';
import {
	DescriptionDetailFree,
	FreeDetailCardElement,
	RightContentFree,
} from './FreeDetail.element';

const FreeDetailCard = ({ free }) => {
	console.log(free);

	return (
		<>
			<FreeDetailCardElement>
				<div className='profile_img_container'>
					{free.thumbnail !== 'undefined' ? (
						<img
							className='imageCardGame_free'
							src={free.thumbnail}
							alt={free.name}
						/>
					) : (
						<img
							src='https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg'
							alt={free.name}
						/>
					)}
				</div>
				<RightContentFree>
					{!free.title ? (
						<h1 className='titleDetail'>No name</h1>
					) : (
						<h1 className='titleDetail'>{free.title}</h1>
					)}
					<div className='infoTopDetail'>
						{!free.genre ? <h3>No genre</h3> : <h3>{free.genre}</h3>}
						{!free.developer ? <h3>No dev</h3> : <h3>{free.developer}</h3>}
						{!free.platform ? <h3>Not platform</h3> : <h3>{free.platform}</h3>}
						{!free.release_date ? (
							<h3>Not launched</h3>
						) : (
							<h3 className='dateMargin'>{free.release_date}</h3>
						)}
						{!free.game_url ? (
							<a className='URLLink' href={free.game_url} target='blank'>
								-Game URL-
							</a>
						) : (
							<a className='URLLink' href={free.game_url} target='blank'>
								-Game URL-
							</a>
						)}
					</div>
					<DescriptionDetailFree>
						{!free.short_description ? (
							<p className='descripcionText'>Not launched</p>
						) : (
							<p className='descripcionText'>{free.short_description}</p>
						)}
					</DescriptionDetailFree>
				</RightContentFree>
			</FreeDetailCardElement>
		</>
	);
};

export default FreeDetailCard;
