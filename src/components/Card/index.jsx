import { CardStyled } from './styles';

const Card = ({ children, ...props }) => {
	return (
		<>
			<CardStyled {...props}>{children}</CardStyled>
		</>
	);
};

export default Card;
