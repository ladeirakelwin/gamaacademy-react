import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './style/globalStyle';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';

import store from './store/modules';

function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Routes />
			<ToastContainer />
		</Provider>
	);
}

export default App;
