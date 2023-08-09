import { Container } from "./styled";

export const Input = ({
	type,
	onChange,
	placeholder,
	name,
	value,
	defaultValue,
  width,
  height
}) => {
	return (
		<Container
			placeholder={placeholder}
			onChange={onChange}
			type={type}
			name={name}
			value={value}
			defaultValue={defaultValue}
      width={width}
      height={height}
		/>
	);
};

// export default Input;
