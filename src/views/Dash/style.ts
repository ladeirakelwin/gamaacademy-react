import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: #8c52e5;

	.wrapper {
		display: grid;
		.card {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #faf2f2;
			border-radius: 22px;
			padding: 12px;
			margin: 22px 0;
			img {
				border-radius: 100%;
			}

			.content-information {
				margin-left: 15px;
				display: grid;
			}
		}
	}
`;
