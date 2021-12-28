import {
	LoginPage,
	MainPage,
	NotFoundPage,
	PostsPage,
	RegistrationPage,
	PostPage,
	CreatePostPage,
	ProfilePage,
} from "../pages";
import { Route } from "../types/routes";

export const routes: Route[] = [
	{
		id: 0,
		path: "/profile",
		Component: ProfilePage,
	},
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
		path: "/posts",
		Component: PostsPage,
		isAuth: true,
	},
	{
		id: 5,
		path: "/posts/create",
		Component: CreatePostPage,
		isAuth: true,
	},
	{
		id: 6,
		path: "/posts/:id",
		Component: PostPage,
	},
	{
		id: 7,
		path: "*",
		Component: NotFoundPage,
	},
];
