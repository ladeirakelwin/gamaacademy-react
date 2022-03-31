import React, { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { Container } from './style';

interface IData {
	registro: string;
	name: string;
	email: string;
	telefone: string;
	celular: string;
	senha: string;
	profissao: string;
}

const SignUp: React.FC = () => {
	const [data, setData] = useState<IData>({} as IData);
	const [load, setLoad] = useState(false);

	const navigate = useNavigate();
	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			const headers = {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			};
			setLoad(true);

			api.post('', data, )
				.then((response) => {
					if (response.status === 200) {
						toast.success('Cadastro realizado com sucesso!', {
							onClose: () => navigate('/signin'),
							hideProgressBar: false,
						});
					}
				})
				.catch((e) => {
					toast.error('Oops, algo deu errado!');
					setLoad(false);
				});
		},
		[data, navigate]
	);
	return (
		<Container>
			<div className="card">
				<h5>Cadastre-se</h5>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Informe seu registro"
						onChange={(e) => setData({ ...data, registro: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Informe seu nome"
						onChange={(e) => setData({ ...data, name: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Informe seu telefone"
						onChange={(e) => setData({ ...data, telefone: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Informe seu celular"
						onChange={(e) => setData({ ...data, celular: e.target.value })}
					/>
					<input
						type="email"
						placeholder="Informe seu email"
						onChange={(e) => setData({ ...data, email: e.target.value })}
					/>
					<input
						type="password"
						placeholder="Informe sua senha"
						onChange={(e) => setData({ ...data, senha: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Informe sua profissão"
						onChange={(e) => setData({ ...data, profissao: e.target.value })}
					/>
					<input type="submit" value="Cadastrar" />
				</form>
			</div>
		</Container>
	);
};

export default SignUp;
