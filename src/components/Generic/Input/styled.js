import { styled } from "styled-components";

const getType = ({type}) => {
	switch (type) {
		case "dark":
			return {
				background: "transparent",
				border: "1px solid #FFFFFF",
				color: "#FFFFFF",
			};
		case "light":
			return {
				background: "#FFFFFF",
				border: "1px solid #E6E9EC",
				color: "#0D263B",
			};
		case "primary":
			return {
				background: "#0061DF",
				border: "none",
				color: "#FFFFFF",
			};
		default:
			return {
				background: "#0061DF",
				border: "none",
				color: "#FFFFFF",
			};
	}
};

const Container = styled.input`
	display: flex;
	align-items: center;
	justify-content: center;
    min-width: 120px;
	border: 2px solid #E6E9EC;
	border-radius: 2px;
	outline: none;
    font-size: ${({fonstSize}) => (fonstSize ? `${fonstSize}` : "14px")};
	height: ${({ height }) => (height ? `${height}px` : "44px")};
	width: ${({ width }) => (width ? `${width}px` : "100%")};
	/* ${getType} */
`;
export { Container };
