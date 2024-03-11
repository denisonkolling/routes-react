import { ContentStyled } from './styles';

const Content = ({ children, ...props }) => {
	return (
		<>
			<ContentStyled {...props}>{children}</ContentStyled>
		</>
	);
};

export default Content;
