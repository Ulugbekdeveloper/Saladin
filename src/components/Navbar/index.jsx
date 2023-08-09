import React from "react";
import { Container, Wrapper, Section, Logo, Link } from "./styled";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";

export const Navbar = () => {
	let navigate = useNavigate();
	return (
		<Container>
			<Wrapper>
				<Section onClick={() => navigate("/home")} logo="true" >
					<Logo />
					<h3>Houzing</h3>
				</Section>
				<Section>
					{navbar.map(({ path, title }, index) => {
						return (
							<Link
								className={({ isActive }) => isActive && "active"}
								key={index}
								to={path}
							>
								{title}
							</Link>
						);
					})}
				</Section>
				<Section>
					<button>Sign In </button>
				</Section>
			</Wrapper>
			<Outlet />
		</Container>
	);
};

export default Navbar;
