import useID from "../hooks/useID";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import SignIn from "../pages/Signin";
export const navbar = [
	{
		id: useID,
		element: <Home />,
		title: "Home",
		path: "/home",
		private: false,
		hidden: false,
	},
	{
		id: useID,
		element: <Properties />,
		title: "Properties",
		path: "/properties",
		private: false,
		hidden: false,
	},
	{
		id: useID,
		element: <SignIn />,
		title: "Sign In",
		path: "/signin",
		private: false,
		hidden: true,
	},
];
