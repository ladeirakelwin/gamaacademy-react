import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './style/globalStyle';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	return (
		<>
			<GlobalStyle />
			<Routes />
			<ToastContainer />
		</>
	);
}

export default App;
