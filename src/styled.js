import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme === 'dark' ? '#333' : '#fff'};
`;

export const H1 = styled.h1`
	color: ${({ theme }) => theme === 'dark' ? '#fff' : '#333'};
	font-size: 46px;
`;

export const H2 = styled.h2`
	color: ${({ theme }) => theme === 'dark' ? '#fff' : '#333'};
	font-size: 16px;
	padding: 5px;
`;

export const ToggleWrap = styled.div`
	display: flex;
`;
