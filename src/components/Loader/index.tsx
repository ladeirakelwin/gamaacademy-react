import React from 'react';
import { Container } from './style';
import Lottie from 'react-lottie';
import * as animationData from '../../animations/loader.json';
const Loader: React.FC = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
	};

	return (
		<Container>
			<div className="content">
				<h1>Carregando...</h1>
				<Lottie options={defaultOptions} height={400} width={400} />
			</div>
		</Container>
	);
};

export default Loader;
