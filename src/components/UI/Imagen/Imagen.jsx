import styled from '@emotion/styled';
import { useCallback, cloneElement } from 'react';

const ImageWrapper = styled('div')(({ width, height, aspectRatio }) => ({
	position: 'relative',
	overflow: 'hidden',
	aspectRatio,
	width,
	height,
}));

const ImageStyled = styled('img')(({ borderRadius }) => ({
	width: '100%',
	height: '100%',
	objectPosition: 'center',
	objectFit: 'cover',
	borderRadius: borderRadius,
}));

const Imagen = ({ children, src, width, height, aspectRatio, ...rest }) => {
	const [ratioH, ratioV] = aspectRatio
		? aspectRatio.split(':')
		: [undefined, undefined];

	const getWidth = useCallback(() => {
		if (width) return width;
		if (height && ratioH && ratioV) {
			const ratio = Number(ratioH) / Number(ratioV);
			return width || (height || 1) * Number(ratio);
		}
		return undefined;
	}, [width, height, ratioH, ratioV]);

	const getHeight = useCallback(() => {
		if (height) return height;
		if (width && ratioH && ratioV) {
			const ratio = Number(ratioH) / Number(ratioV);
			return height || (width || 1) / Number(ratio);
		}
		return undefined;
	}, [width, height, ratioH, ratioV]);

	return (
		<ImageWrapper
			width={getWidth()}
			height={getHeight()}
			{...(aspectRatio && { aspectRatio: `${ratioH} / ${ratioV}` })}
		>
			<ImageStyled src={src} {...rest} />
			{children &&
				cloneElement(children, {
					style: { position: 'absolute', ...children.props.style },
				})}
		</ImageWrapper>
	);
};

export default Imagen;
