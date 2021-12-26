import {
	LoginPage,
	MainPage,
	NotFoundPage,
	PostsPage,
	RegistrationPage,
} from "../pages";
import { Route } from "../types/routes";

export const routes: Route[] = [
	{
		id: 1,
		path: "/",
		Component: MainPage,
	},
	{
		id: 2,
		path: "/login",
		Component: LoginPage,
	},
	{
		id: 3,
		path: "/registration",
		Component: RegistrationPage,
	},
	{
		id: 4,
		path: "/posts/*",
		Component: PostsPage,
	},
	{
		id: 5,
		path: "*",
		Component: NotFoundPage,
	},
];
