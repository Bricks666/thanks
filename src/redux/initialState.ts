import { Store } from "../types/redux";

export const initialState: Store = {
	profile: {
		id: 0,
		name: "",
		photo: "",
	},
	payments: [],
	posts: [],
	loadings: {
		loadingApp: true,
		loadingPosts: false,
		loadingProfile: false,
		loadingPayments: false,
		loadingContacts: false,
		loadingInstructions: false,
	},
	login: {
		isLogin: false,
	},
	registration: {},
	contacts: [],
	instructions: [],
};
