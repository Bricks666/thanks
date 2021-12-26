import { MainPage, NotFoundPage } from "../pages";
import { Route } from "../types/routes";

export const routes: Route[] = [
	{
		id: 1,
		path: "/",
		Component: MainPage,
	},
	{
		id: 2,
		path: "*",
		Component: NotFoundPage,
	},
];
