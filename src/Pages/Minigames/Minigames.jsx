import './MiniGames.css';

const Minigames = () => {
	return (
		<div className='generalContainerMiniGames'>
			<iframe
				className='PrimerGame'
				src='https://juego-1-samurai.vercel.app/'
				width='1040px'
				height='620px'
			></iframe>
			<iframe
				src='https://space-ship-game-master.vercel.app/'
				scrolling='no'
				width='1040px'
				height='1200px'
			></iframe>
		</div>
	);
};

export default Minigames;
