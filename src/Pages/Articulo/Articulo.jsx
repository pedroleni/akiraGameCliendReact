import { useEffect, useState } from 'react';
import { API } from '../../services/API';
import '../../Games.css';
import GameCard from './ArticuloCard';
import { HeroPost } from './Articulo.element';

const Articulo = () => {
	const [allPost, setAllPost] = useState([]);

	const getAllPosts = async () => {
		API.get('/articulo/').then(res => {
			setAllPost(res.data.data.articulo);
		});
	};

	useEffect(() => {
		getAllPosts();
	}, []);

	return (
		<>
			<HeroPost>
				<div className='games_container'>
					{allPost.length ? (
						allPost.map(articulo => (
							<GameCard articulo={articulo} key={articulo._id} />
						))
					) : (
						<p>Loading Posts...</p>
					)}
				</div>
			</HeroPost>
		</>
	);
};

export default Articulo;
