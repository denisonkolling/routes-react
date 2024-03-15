import { CardStyled, ImageSection, ContentSection } from './styles';

const Card = ({ children, image, ...props }) => {
	return (
		<>
			<CardStyled {...props}>
				<ImageSection>
					<img src={image} alt="Image description" style={{width: '100%',}}/>
				</ImageSection>
				<ContentSection>{children}</ContentSection>
			</CardStyled>
		</>
	);
};

export default Card;
