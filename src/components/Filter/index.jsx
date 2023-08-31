import React from "react";
import { Input, Button } from "../Generic";
import { Container, Icons } from "./styled";
import { Dropdown } from "antd";

export const Filter = () => {
	return (
		<Container>
			<Input
				icon={<Icons.Houses />}
				placeholder={"Enter an address, neighborhood, city, or ZIP code"}
			/>
			<Dropdown menu={<h1>Hello</h1>} placement="bottomRight" arrow>
				
					<Button type={"light"}>
						<Icons.Filter />
						Advanced
					</Button>
				
			</Dropdown>
			<Button type={"primary"}>
				<Icons.Search />
				Search
			</Button>
		</Container>
	);
};

export default Filter;


