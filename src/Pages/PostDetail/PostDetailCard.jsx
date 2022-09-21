import Comentario from '../../components/Comentario/Comentario';
import '../../Games.css';
import { API } from '../../services/API';
import { useContext, useState, useEffect } from 'react';
import { JwtContext } from '../../context/jwtContext';
import { useParams } from 'react-router-dom';
import {
	DescriptionDetail,
	PostDetailCardElement,
	RightContent,
} from './PostDetail.element';

const PostDetailCard = ({ post }) => {
	const [likeslenght, setLikeslenght] = useState([]);
	const { setArticulo, user } = useContext(JwtContext);
	const { id } = useParams();

	const getFreeDetail = async () => {
		API.get(`/articulo/${id}`).then((res) => {
			setArticulo(post);
			localStorage.removeItem('articulo');
			localStorage.setItem('articulo', JSON.stringify(res.data.data.articulo));
			const savedArticulo = localStorage.getItem('articulo');
			const ValueEdit = JSON.parse(savedArticulo);
			setArticulo(ValueEdit);

			setLikeslenght(ValueEdit.likes);
			console.log(likeslenght);
		});
	};

	useEffect(() => {
		getFreeDetail();
	}, []);

	const likeHandler = () => {
		try {
			API.put('/articulo/' + id + '/like', { userId: user._id }).then((res) => {
				getFreeDetail();
			});
		} catch (err) {}
	};

	return (
		<>
			<PostDetailCardElement>
				{console.log(likeslenght)}
				<div className='profile_img_container-detail'>
					{post.image !== 'undefined' ? (
						<img
							className='imageCardGamePost'
							src={post.image}
							alt={post.titulo}
						/>
					) : (
						<img
							src='https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg'
							alt={post.titulo}
						/>
					)}
				</div>
				<RightContent>
					{!post.titulo ? (
						<h1 className='titleDetail'>No name</h1>
					) : (
						<h1 className='titleDetail'>{post.titulo}</h1>
					)}
					<div className='infoTopDetail'>
						{!post.autor ? (
							<h3>Not launched</h3>
						) : (
							<h3 className='dateMargin'>{post.autor}</h3>
						)}
					</div>
					<DescriptionDetail>
						{!post.contenido ? (
							<p className='descripcionText'>Not launched</p>
						) : (
							<p className='descripcionText'>{post.contenido}</p>
						)}
					</DescriptionDetail>
				</RightContent>
				<div className='postBottomLeft'>
					<img
						className='likeIcon'
						src='https://i.ibb.co/t8Jrcjn/like-heart-thumbs-up-favourite-icon-142417.png'
						onClick={likeHandler}
						alt='like'
					/>
					<span className='postLikeCounter'>
						{likeslenght.length} people like it
					</span>
				</div>

				<Comentario postComentario={post} />
			</PostDetailCardElement>
		</>
	);
};

export default PostDetailCard;
