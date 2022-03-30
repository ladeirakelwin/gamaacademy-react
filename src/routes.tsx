import { Routes as Switch, BrowserRouter, Route } from 'react-router-dom';
import Contact from './views/Contact';
import Home from './views/Home';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" element={<Home />}  />
				<Route path="/contact" element={<Contact />} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
