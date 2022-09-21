import { useEffect, useState } from 'react';
import { API } from '../../services/API';
import '../../Games.css';
import { useParams } from 'react-router-dom';
import { FreeDetailCardElement, HeroFreeDetail } from './FreeDetail.element';
import FreeDetailCard from './FreeDetailCard';

const FreeDetail = () => {
	const [freeDetail, setFreeDetail] = useState([]);

	const { id } = useParams();

	const getFreeDetail = async () => {
		API.get(`/free/${id}`).then((res) => {
			setFreeDetail(res.data.data.free);
			console.log(res.data.data.free);
		});
	};

	useEffect(() => {
		getFreeDetail();
	}, []);

	return (
		<>
			<HeroFreeDetail>
				{freeDetail ? (
					<FreeDetailCard free={freeDetail} />
				) : (
					<p>Loading Games...</p>
				)}
			</HeroFreeDetail>
		</>
	);
};

export default FreeDetail;
