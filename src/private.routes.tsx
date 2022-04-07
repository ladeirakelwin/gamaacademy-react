import { Routes as Switch, BrowserRouter, Route, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	redirectTo: string;
}

const PrivateRoutes = ({ children, redirectTo}: Props) => {
	const isLoggedIn: string | null = localStorage.getItem('@gamaServiceToken');

	const isSectionActive: any = () => {
		if (isLoggedIn === null) {
			return false;
		} else {
			const onlyToken = isLoggedIn;
			const tokenPayload: any = jwt_decode(onlyToken);
			const expSeconds = tokenPayload.exp;
			const timeNow = Date.now() / 1000;

			return timeNow > expSeconds ? false : true;
		}
	};

	return isSectionActive() ? <>
	{children}</> : <Navigate to={redirectTo}/>
};

export default PrivateRoutes;
