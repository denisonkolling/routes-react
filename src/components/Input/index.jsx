import { InputStyled } from './styles';

const Input = ({ type, placeholder, value, onChange, name }) => {
	return (
		<InputStyled
			name={name}
			value={value}
			onChange={onChange}
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;