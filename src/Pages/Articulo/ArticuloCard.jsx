import { Link } from 'react-router-dom';
import ButtonStyle from '../../components/UI/ButtonStyle/Button';
import '../../Articulo.css';

const ArticuloCard = ({ articulo }) => {
	return (
		<div className='articulo_card'>
			<div className='articulo_img_container'>
				{articulo.image !== 'undefined' ? (
					<img
						className='imageCardArticulo'
						src={articulo.image}
						alt={articulo.titulo}
					/>
				) : (
					<img
						src='https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg'
						alt={articulo.titulo}
					/>
				)}
			</div>
			<div className='content_container_articulo'>
				{!articulo.titulo ? (
					<h2 className='titlePost'>No name</h2>
				) : (
					<h2 className='titlePost'>{articulo.titulo}</h2>
				)}
				{!articulo.autor ? (
					<h3>No autor</h3>
				) : (
					<h3 className='typeArticuloText'>{articulo.autor}</h3>
				)}
				{!articulo.resumen ? <h3>Not resumen</h3> : <h3>{articulo.resumen}</h3>}
				<ButtonStyle variant={'small'}>
					<Link to={`/posts/${articulo._id}`}>Read</Link>
				</ButtonStyle>
			</div>
		</div>
	);
};

export default ArticuloCard;
