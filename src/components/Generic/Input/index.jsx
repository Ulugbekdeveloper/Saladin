import { Container, Wrapper, Icon} from "./styled";

export const Input = ({
	type,
	onChange,
	placeholder,
	name,
	value,
	defaultValue,
	width,
	height,
	icon,
}) => {
	return (
		<Wrapper>
			<Icon>{icon}</Icon>
			<Container
				placeholder={placeholder}
				onChange={onChange}
				type={type}
				name={name}
				value={value}
				defaultValue={defaultValue}
				width={width}
				height={height}
				icon={icon}
			/>
		  </Wrapper>
	);
};

export default Input;
