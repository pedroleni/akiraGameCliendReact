import { useEffect, useState } from 'react';
import { API } from '../../services/API';
import '../../Games.css';
import { useParams } from 'react-router-dom';
import { HeroPostDetailCard } from './PostDetail.element';

import PostDetailCard from './PostDetailCard';

const PostDetail = () => {
	const [postDetail, setPostDetail] = useState([]);

	const { id } = useParams();

	const getFreeDetail = async () => {
		API.get(`/articulo/${id}`).then((res) => {
			setPostDetail(res.data.data.articulo);
			console.log(res.data.data.articulo);
			localStorage.removeItem('articulo');
			localStorage.setItem('articulo', JSON.stringify(res.data.data.articulo));
		});
	};

	useEffect(() => {
		getFreeDetail();
	}, []);

	return (
		<>
			<HeroPostDetailCard>
				{postDetail ? (
					<PostDetailCard post={postDetail} />
				) : (
					<p>Loading Games...</p>
				)}
			</HeroPostDetailCard>
		</>
	);
};

export default PostDetail;
