import styled from '@emotion/styled';

export const StyledMain = styled.div`
	width: 600px;
	margin: 20px auto;
	max-width: calc(100% - 60px);
`;

export const Footer = styled.footer`
	width: 600px;
	margin: 20px auto;
	max-width: calc(100% - 60px);
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.img`
	width: 2.5rem;
	margin-right: 16px;
`;

export const Title = styled.span`
	display: block;
	font-size: 2rem;
	color: ${props => props.theme.primary};
	font-family: 'Molot';
	font-weight: 400;
	text-shadow: 0 2px 0 ${props => props.theme.primaryDark};
	line-height: 1em;
`;

export const EventName = styled.h1`
	text-align: center;
	font-weight: 800;
	margin: 20px 0 14px;
`;

export const LoginForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr 100px;
	align-items: flex-end;
	grid-gap: 18px;

	@media (max-width: 500px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 400px) {
		grid-template-columns: 1fr;
	}
`;

export const LoginSection = styled.section`
	background-color: ${props => props.theme.primaryBackground};
	padding: 10px 0;
`;

export const Info = styled.p`
	margin: 18px 0;
	opacity: .6;
	font-size: 12px;
`;

export const ShareInfo = styled.p`
	margin: 6px 0;
	text-align: center;
	font-size: 15px;
`;

export const Tabs = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30px 0 20px;
`;

export const Tab = styled.a`
	user-select: none;
	text-decoration: none;
	display: block;
	color: ${props => props.theme.text};
	padding: 8px 18px;
	background-color: ${props => props.theme.primaryBackground};
	border: 1px solid ${props => props.theme.primaryLight};
	border-bottom: 0;
	margin: 0 4px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;

	${props => props.selected && `
		color: #FFF;
		background-color: ${props.theme.primary};
		border-color: ${props.theme.primary};
	`}

	${props => props.disabled && `
		opacity: .5;
		cursor: not-allowed;
	`}
`;