import { styled } from "styled-components";

const Container = styled.input`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 120px;
	border: 2px solid #e6e9ec;
	border-radius: 2px;
	outline: none;
	padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
	font-size: ${({ fonstSize }) => (fonstSize ? `${fonstSize}px` : "14px")};
	height: ${({ height }) => (height ? `${height}px` : "43px")};
	width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

const Wrapper = styled.div`
     display: flex;
	 align-items: center;
     position: relative;
	 width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

const Icon = styled.div`
    position: absolute;
	left: 10px;
`; 

export { Container, Wrapper, Icon };
