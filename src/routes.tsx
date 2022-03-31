import { Routes as Switch, BrowserRouter, Route } from 'react-router-dom';
import Contact from './views/Contact';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" element={<Home />}  />
				<Route path="/contact" element={<Contact />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
