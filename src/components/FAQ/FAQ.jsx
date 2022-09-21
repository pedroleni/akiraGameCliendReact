import { HeroFAQ } from './FAQ.element';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const FAQ = () => {
	return (
		<HeroFAQ className='HeroFAQ'>
			<div className='columnFAQ'>
				<ul>
					<li>Cristina</li>
					<li>
						<a href='https://github.com/mistymidnights' target='blank'>
							<BsGithub />
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/cristina-l-165a9218a/'
							target='blank'
						>
							<BsLinkedin />
						</a>
					</li>
				</ul>
			</div>
			<div className='columnFAQ'>
				<ul>
					<li>Pedro</li>
					<li>
						<a href='https://github.com/pedroleni'>
							<BsGithub />
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/pedro-lérida-nieto-260501229/'>
							<BsLinkedin />
						</a>
					</li>
				</ul>
			</div>
		</HeroFAQ>
	);
};

export default FAQ;
