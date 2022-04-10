import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { api } from '../../services/api';
import addNewUser from '../../store/modules/user/action';

import { Container } from './style';

interface ICollaborator {
	id: number;
	name: string;
	email: string;
	photo: {
		path: string;
	};
}
const Dash: React.FC = () => {
	const [data, setData] = useState<ICollaborator[]>([]);
	const [isLoad, setIsLoad] = useState(false);
	const token = localStorage.getItem('@gamaServiceToken')?.replace(/["]/g, '');

	const dispatch = useDispatch();

	useEffect(() => {
		api.get<ICollaborator[]>('collaborator', {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
			.then((response) => {
				setData(() => response.data.filter((item) => item.photo?.path));
			})
			.finally(() => setIsLoad(false));
	}, [token]);

	useEffect(() => {
		console.log(data)
		data.map((user) => dispatch(((addNewUser(user)))));
	}, [dispatch, data]);

	if (isLoad) {
		return <Loader />;
	}

	console.log(data);
	return (
		<Container>
			<div className="wrapper">
				<h1>Dashboard</h1>

				{data?.map((el) => (
					<div key={el.id} className="card">
						<img
							width="100px"
							height="100px"
							src={`https://sistemadeagendamentogama.herokuapp.com/files/${el.photo.path}`}
							alt=""
						/>
						<div className="content-information">
							<p>Nome: {el.name}</p>
							<p>Email: {el.email}</p>
						</div>
					</div>
				))}
				<Link to="/">Retornar para Home</Link>
			</div>
		</Container>
	);
};

export default Dash;
