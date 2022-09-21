import { useEffect, useState } from 'react';
import { API } from '../../services/API';
import '../../Games.css';
import GameDetailCard from './GameDetailCard';
import { useParams } from 'react-router-dom';
import { HeroDetail } from './GameDetail.element';

const GameDetail = () => {
	const [gameDetail, setGameDetail] = useState([]);

	const { id } = useParams();

	const getGameDetail = async () => {
		API.get(`/juego/${id}`).then((res) => {
			setGameDetail(res.data.data.juego);
			console.log(res.data.data.juego);
		});
	};

	useEffect(() => {
		getGameDetail();
	}, []);

	return (
		<>
			<HeroDetail>
				{gameDetail ? (
					<GameDetailCard game={gameDetail} />
				) : (
					<p>Loading Games...</p>
				)}
			</HeroDetail>
		</>
	);
};

export default GameDetail;
