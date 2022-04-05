import React, { FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { api } from '../../services/api';
import { Container } from './style';

interface IData {
	email: string;
	password: string;
}

const SignIn: React.FC = () => {
	const [data, setData] = useState<IData>({} as IData);
	const [load, setLoad] = useState(false);

	const navigate = useNavigate();
	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			setLoad(true);

			api.post('session', data)
				.then((response) => {
					const sessionToken = JSON.stringify(response.data.token);
					localStorage.setItem('@gamaServiceToken', sessionToken);
					setLoad(false);
					toast.success(
						'Cadastro realizado com sucesso! Você está sendo redirecionado para a página de dashboard.',
						{
							hideProgressBar: false,
							onClose: () => navigate('/dashboard'),
						}
					);
				})
				.catch((e) => {
					toast.error('Oops, algo deu errado!');
					setLoad(false);
				})
				.finally(() => setLoad(false));
		},
		[data, navigate]
	);

	if (load) {
		return <Loader />;
	}

	return (
		<Container>
			<div className="card">
				<h5>Logar no sistema</h5>
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Informe seu email"
						onChange={(e) => setData({ ...data, email: e.target.value })}
					/>
					<input
						type="password"
						placeholder="Informe sua senha"
						onChange={(e) => setData({ ...data, password: e.target.value })}
					/>

					<input type="submit" value="Logar" />

					<Link to="/signup">Clique aqui para cadastrar.</Link>
				</form>
			</div>
		</Container>
	);
};

export default SignIn;
