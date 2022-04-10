import styled from 'styled-components';

export const NavBar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 12px 0;
	img {
		max-width: 200px;
		height: auto;
	}
	.nav-links {
		display: flex;
		gap: 1rem;
		a {
			font-weight: 500;
			text-decoration: none;
			color: #000;
			font-size: 14px;
			font-family: 'Roboto', sans-serif;
			transition: 0.6s;
			&:hover{
				color: #676666
			}
		}
	}
`;
