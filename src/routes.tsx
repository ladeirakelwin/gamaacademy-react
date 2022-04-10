import { Routes as Switch, BrowserRouter, Route } from 'react-router-dom';
import PrivateRoutes from './private.routes';
import Dash from './views/Dash';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Courses from './views/Courses';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" element={<Home />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route
					path="/dashboard"
					element={
						<PrivateRoutes redirectTo="/">
							<Dash />
						</PrivateRoutes>
					}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
