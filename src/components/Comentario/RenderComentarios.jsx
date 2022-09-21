const RenderComentarios = ({ comentario }) => {
	const foo = new Date(comentario.createdAt);

	return (
		<div className='comentarioMSGContainer'>
			<div className='displayNameComentario'>
				<div className='comentarioImgUser'>
					{comentario.image ? <img src={comentario?.image} alt='' /> : null}
				</div>
				<div className='userComentario'>
					<p>{comentario.nombre}</p>
				</div>
				<div className='dateComentario'>
					<p>{`${foo.toDateString()}  ${foo.toLocaleTimeString()}`}</p>
				</div>
			</div>

			<div className='contenidoComentario'>
				<p>{comentario.contenido}</p>
			</div>
		</div>
	);
};

export default RenderComentarios;
