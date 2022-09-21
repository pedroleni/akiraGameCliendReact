import { HeroOneContainer, HeroOnee } from './HeroOne.element';
import ButtonStyle from '../UI/ButtonStyle/Button';
import { Link } from 'react-router-dom';

const HeroOne = () => {
	return (
		<HeroOneContainer>
			<HeroOnee>
				<div className='HeroLeftContainer'>
					<div className='HeroTitle'>
						<h2 className='titleHeroOne'>
							Join in and discover a new hole commuinty of videogames
						</h2>
					</div>
					<Link to={'/register'}>
						<ButtonStyle variant={'extralargeSecond'} height={'50px'}>
							{' '}
							JOIN
						</ButtonStyle>
					</Link>
				</div>

				<div className='HeroImage'>
					<img
						className='HeroOneImage'
						src='https://cdn.discordapp.com/attachments/1014491221349109770/1019704839007125534/characters.png'
						alt='characters'
					/>
				</div>
			</HeroOnee>
		</HeroOneContainer>
	);
};

export default HeroOne;
