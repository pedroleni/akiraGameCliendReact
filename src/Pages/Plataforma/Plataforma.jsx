import { useEffect, useState } from 'react';
import { API } from '../../services/API';
import '../../Games.css';
import GameCard from './PlataformaCard';
import { HeroGames } from './Plataforma.element';

const Plataforma = () => {
	const [allPlataformas, setAllPlataformas] = useState([]);

	const getAllGames = async () => {
		API.get('/plataforma/').then(res => {
			setAllPlataformas(res.data.data.plataforma);
			console.log(res.data.data.plataforma);
		});
	};

	useEffect(() => {
		getAllGames();
	}, []);

	return (
		<>
			<HeroGames>
				<div className='games_container'>
					{allPlataformas.length ? (
						allPlataformas.map(plataforma => (
							<GameCard plataforma={plataforma} key={plataforma._id} />
						))
					) : (
						<p>Loading platforms...</p>
					)}
				</div>
			</HeroGames>
		</>
	);
};

export default Plataforma;
