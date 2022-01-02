import {
	LoginPage,
	MainPage,
	NotFoundPage,
	PostsPage,
	RegistrationPage,
	PostPage,
	CreatePostPage,
	ProfilePage,
	ContactsPage,
	InstructionPage,
} from "../pages";
import { Route } from "../types/routes";

export const routes: Route[] = [
	{
		path: "/profile/*",
		Component: ProfilePage,
		isAuth: true,
	},
	{
		path: "/",
		Component: MainPage,
	},
	{
		path: "/login",
		Component: LoginPage,
	},
	{
		path: "/registration",
		Component: RegistrationPage,
	},
	{
		path: "/posts",
		Component: PostsPage,
	},
	{
		path: "/posts/create",
		Component: CreatePostPage,
		isAuth: true,
	},
	{
		path: "/posts/:id",
		Component: PostPage,
	},
	{
		path: "/contacts",
		Component: ContactsPage,
	},
	{
		path: "/how-to-do",
		Component: InstructionPage,
	},
	{
		path: "*",
		Component: NotFoundPage,
	},
];
