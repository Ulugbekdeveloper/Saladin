import React from "react";
import { Container, Wrapper, Section, Logo, Link, Main } from "./styled";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";

export const Navbar = () => {
	let navigate = useNavigate();
	return (
		<Container>
			<Main>
				<Wrapper>
					<Section onClick={() => navigate("/home")} logo="true">
						<Logo />
						<h3>Saladin</h3>
					</Section>
					<Section>
						{navbar.map(({ path, title, hidden}, index) => {
							return !hidden && (
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
						<Button signing={()=>navigate('/signin')}  type={"dark"}>Sign In</Button>
					</Section>
				</Wrapper>
			</Main>
			<Outlet />
		</Container>
	);
};

export default Navbar;
