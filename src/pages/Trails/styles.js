import styled from 'styled-components';
import { FaMagnifyingGlass } from 'react-icons/fa6';


export const InputWrapper = styled.div`
	position: relative;
	width: 50%;
  margin: 15px auto 25px;
  margin-bottom: 25px;
	@media (max-width: 768px) {
		margin: 15px auto 25px;
		width: 80%;
	}
`;

export const StyledFontAwesomeIcon = styled(FaMagnifyingGlass)`
	color: #757575;
	font-size: 2rem;
	position: absolute;
	right: 1.2rem;
	bottom: 0.65rem;
	@media (max-width: 768px) {
		right: 0.6rem;
	}
`;