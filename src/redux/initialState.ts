import { Store } from "../types/redux";

export const initialState: Store = {
	profile: {
		id: 1,
		name: "s",
		photo: "../",
	},
	posts: [],
	loadings: {
		loadingApp: true,
		loadingPosts: false,
		loadingProfile: false,
	},
	navigation: [
		{
			id: 1,
			path: "/",
			text: "Главная",
		},
		{
			id: 2,
			path: "/posts/*",
			text: "Благодарности",
		},
		{
			id: 3,
			path: "/how-to-do",
			text: "Что такое благодарность",
		},
		{
			id: 4,
			path: "/about-thanks",
			text: "Примеры благодарностей",
		},
		{
			id: 5,
			path: "/contacts",
			text: "Контакты",
		},
	],
};
