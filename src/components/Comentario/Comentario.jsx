import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState, useEffect } from 'react';
import { JwtContext } from '../../context/jwtContext';
import RenderComentarios from './RenderComentarios';

const Comentario = () => {
	const { id } = useParams();
	const [articuloDetail, setArticuloDetail] = useState({});
	const [allComentarios, setAllComentarios] = useState([]);

	const getArticuloDetail = async () => {
		API.get(`/articulo/${id}`).then((res) => {
			setArticuloDetail(res.data.data.articulo);
		});
		getComentarios();
	};

	const { register, handleSubmit } = useForm();
	const { user } = useContext(JwtContext);

	const getComentarios = async () => {
		API.get(`/comentario/articulo/${id}`).then((res) => {
			console.log(res.data.data.comentario);
			setAllComentarios(res.data.data.comentario);
		});
	};

	const formSubmit = (data) => {
		const formData = new FormData();
		formData.append('autor', user._id);
		formData.append('contenido', data.contenido);
		formData.append('articulo', articuloDetail._id);
		formData.append('nombre', user.nick);
		formData.append('image', user.image);

		API.post('/comentario/create', formData).then((res) => {
			console.log(res);
			getComentarios();
		});
	};

	useEffect(() => {
		getArticuloDetail();
	}, []);

	return (
		<>
			<div className='contenedorAllComentarios'>
				<div className='gallery_comentarios'>
					{allComentarios.map((comentario) => (
						<RenderComentarios comentario={comentario} key={comentario._id} />
					))}
				</div>
				<div className='contenedorInputComentario'>
					<form className='inputComentario' onSubmit={handleSubmit(formSubmit)}>
						<label htmlFor='contenido'>Put your comment here</label>
						<textarea
							className='container_contenido'
							type='text'
							id='contenido'
							name='contenido'
							cols='30'
							rows='6'
							{...register('contenido')}
						/>
						<button className='submitComentario' type='submit'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Comentario;
