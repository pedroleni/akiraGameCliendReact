import { Link } from 'react-router-dom';
import ButtonStyle from '../UI/ButtonStyle/Button';
import { HeroThreeContainer, HeroThree } from './HeroThree.element';

const HeroThre = () => {
	return (
		<HeroThreeContainer>
			<HeroThree>
				<div className='titleWBtn'>
					<h2 className='TitleHero'>Video</h2>
					<Link to={'/video'}>
						<ButtonStyle variant={'small'} height={'30px'}>
							More
						</ButtonStyle>
					</Link>
				</div>
				<div className='CardPostHero2'>
					<div className='leftPosts'>
						<iframe
							className='youtubePlayer'
							width='650'
							height='370'
							src='https://www.youtube.com/embed/QjeYtrpTv-o'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						></iframe>
					</div>
					<div className='rightPosts'>
						<div className='columRight'>
							<iframe
								className='youtubeMini'
								width='311'
								height='175'
								src='https://www.youtube.com/embed/vrZjI2nKrn4'
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							></iframe>
							<iframe
								className='youtubeMini'
								width='311'
								height='175'
								src='https://www.youtube.com/embed/F3jePdO9_jc'
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							></iframe>
						</div>
					</div>
				</div>
			</HeroThree>
		</HeroThreeContainer>
	);
};

export default HeroThre;
