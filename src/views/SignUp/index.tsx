import React, { FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { api } from '../../services/api';
import { Container } from './style';

interface IData {
	name: string;
	email: string;
	password: string;
}

const SignUp: React.FC = () => {
	const [data, setData] = useState<IData>({} as IData);
	const [load, setLoad] = useState(false);

	const navigate = useNavigate();
	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			setLoad(true);

			api.post('users', data)
				.then((response) => {
					setLoad(false);
					toast.success('Cadastro realizado com sucesso! Você está sendo redirecionado para a página de login.', {
						hideProgressBar: false,
						onClose: () => navigate('/signin'),
					});
				})
				.catch((e) => {
					toast.error('Oops, algo deu errado!');
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
				<h5>Cadastre-se</h5>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Informe seu nome"
						onChange={(e) => setData({ ...data, name: e.target.value })}
					/>
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

					<input type="submit" value="Cadastrar" />
					<Link to="/signin">Clique aqui para logar.</Link>
				</form>
			</div>
		</Container>
	);
};

export default SignUp;
