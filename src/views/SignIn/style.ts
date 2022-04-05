import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: #8c52e5;

	.card {
		display: grid;
		background: #f9f9f9;
		max-width: 300px;
		border-radius: 22px;
		padding: 22px;

		h5 {
			text-align: center;
			font-size: 22px;
			color: #8c52e5;
		}

		form {
			input {
				width: 100%;
				height: 32px;
				text-align: center;
				border-radius: 22px;
				border: 1px solid #e2e2e2;
				margin: 10px 0 0 0;
			}

			input[type='submit'] {
				cursor: pointer;
				font-weight: bold;
				text-transform: uppercase;
				border: none;
				padding: 5px;
				background: #68de5a;
				border-radius: 12px;
				transition: 0.6s;
				&:hover {
					background: #8c52e5;
					color: #fff;
				}
			}

			a {
				display: block;
				text-decoration: none;
				text-align: center;
				color: #8c52e5;
				margin: 20px 0;
			}
		}
	}
`;
