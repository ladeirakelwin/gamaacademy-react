import { FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Container } from './style';

interface IData {
	name: string;
	email: string;
}

const Contact: React.FC = () => {
	const [data, setData] = useState<IData>({} as IData);
	const [submit, setSubmit] = useState(false);

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			api.post('', data).then((response) => {
				if (response.status === 200) {
					setSubmit(true);
				}
			});
		},
		[data]
	);

	return (
		<Container>
			<div className="form-wrapper">
				<h1>Contact</h1>
				<div className="card">
					{submit ? (
						<div>
							<h1>Obrigado pelo envio dos dados</h1>
						</div>
					) : (
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="nome"
								onChange={(e) => setData({ ...data, name: e.target.value })}
							/>
							<input
								type="email"
								placeholder="email"
								onChange={(e) => setData({ ...data, email: e.target.value })}
							/>
							<input type="submit" value="cadastrar" />
						</form>
					)}
				</div>
				<Link to="/">Voltando para home</Link>
			</div>
		</Container>
	);
};

export default Contact;
