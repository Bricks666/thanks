/* eslint-disable sonarjs/no-duplicate-string */
import { Store } from "../types/redux";

export const initialState: Store = {
	profile: {
		id: 1,
		name: "asdfasdfasdfasdfs",
		photo: "../",
	},
	payments: [
		{
			id: 1,
			date: new Date().toLocaleString(),
			value: 123,
			status: "success",
		},
	],
	posts: [
		{
			id: 1,
			author: "Rerere",
			firstName: "Валентина",
			secondName: "Сердюк",
			patronymic: "Григорьевна",
			postHeader: "Благодарность моей любимой маме",
			briefAboutPerson:
				" Она родилась в 1952 году и прожила долгую и счастливую жизнь",
			whyThanks: "За все то, что она сделала для меня",
			photo:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.livejournal.com%2Fu3poccuu%2Fpic%2F002482q2&f=1&nofb=1",
			date: "2019-10-10T03:00:00",
		},
	],
	loadings: {
		loadingApp: true,
		loadingPosts: false,
		loadingProfile: false,
	},
	login: {
		isLogin: false,
	},
	registration: {},
	contacts: [
		{
			id: 0,
			name: "Телефон",
			value: "+79533396737",
		},
		{
			id: 1,
			name: "Почта",
			value: "email@gmail.com",
		},
	],
	instructions: [
		{
			picture:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.livejournal.com%2Fu3poccuu%2Fpic%2F002482q2&f=1&nofb=1",
			text: "adasdjbasdlnadsnjansdljdjlnasdnjandlkjasndjnadnljn",
		},
		{
			picture:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.livejournal.com%2Fu3poccuu%2Fpic%2F002482q2&f=1&nofb=1",
			text: "adasdjbasdlnadsnjansdljdjlnasdnjandlkjasndjnadnljn",
		},

		{
			picture:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.livejournal.com%2Fu3poccuu%2Fpic%2F002482q2&f=1&nofb=1",
			text: "adasdjbasdlnadsnjansdljdjlnasdnjandlkjasndjnadnljn",
		},
		{
			picture:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.livejournal.com%2Fu3poccuu%2Fpic%2F002482q2&f=1&nofb=1",
			text: "adasdjbasdlnadsnjansdljdjlnasdnjandlkjasndjnadnljn",
		},
		{
			picture:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.livejournal.com%2Fu3poccuu%2Fpic%2F002482q2&f=1&nofb=1",
			text: "adasdjbasdlnadsnjansdljdjlnasdnjandlkjasndjnadnljn",
		},
		{
			picture:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.livejournal.com%2Fu3poccuu%2Fpic%2F002482q2&f=1&nofb=1",
			text: "adasdjbasdlnadsnjansdljdjlnasdnjandlkjasndjnadnljn",
		},
		{
			picture:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.livejournal.com%2Fu3poccuu%2Fpic%2F002482q2&f=1&nofb=1",
			text: "adasdjbasdlnadsnjansdljdjlnasdnjandlkjasndjnadnljn",
		},
	],
};
