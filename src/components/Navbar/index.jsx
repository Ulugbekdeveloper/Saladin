import React from "react";
import { Container, Wrapper, Section, Logo, Link, Main } from "./styled";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";

export const Navbar = () => {
	let navigate = useNavigate();
	return (
		<Container>
			<Main>
			<Wrapper>
				<Section onClick={() => navigate("/home")} logo="true" >
					<Logo />
					<h3>Saladin</h3>
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
			</Main>		
			<Outlet />
		</Container>
	);
};

export default Navbar;
