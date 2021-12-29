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
			date: "2019-10-10T03:00:00",
			name: "Благодарность для мужа",
			photo: "https://lordfilmq.club/templates/lordfilm/images/bg.jpg",
			text: "aslkkfhgbaskjdadhjksfbkajsadjkshfbkjajkhsdbfkjhjkasbdfkjhbvasdkfjadfhjksbaskjdadfjkshbkjaajksdhbfkjhjkasdbfkjfhjkasbdfkjfhjkbasdkfjdfhjkbaskjdadfjkshbakjsadjksghbvfkjgghjkasdvfkfgkhasvdfkfgkvasdfkdfgksvasdkghadfghksbvaksjadjkshbfkjajkshdbfkjhjkasdbfkjfhjkbasdkjdfjkhbasdkjadfjkshbaskdjadhjksfbkjasdadhjksbf",
		},
		{
			id: 2,
			author: "Rerere",
			date: "2019-10-10T03:00:00",
			name: "Благодарность для мужа",
			photo:
				"https://i08.fotocdn.net/s116/a12aeff86aeacdff/gallery_xl/2648186076.jpg",
			text: "aslkkfhgbaskjdadhjksfbkajsadjkshfbkjajkhsdbfkjhjkasbdfkjhbvasdkfjadfhjksbaskjdadfjkshbkjaajksdhbfkjhjkasdbfkjfhjkasbdfkjfhjkbasdkfjdfhjkbaskjdadfjkshbakjsadjksghbvfkjgghjkasdvfkfgkhasvdfkfgkvasdfkdfgksvasdkghadfghksbvaksjadjkshbfkjajkshdbfkjhjkasdbfkjfhjkbasdkjdfjkhbasdkjadfjkshbaskdjadhjksfbkjasdadhjksbf",
		},
		{
			id: 3,
			author: "Rerere",
			date: "2019-10-10T03:00:00",
			name: "Благодарность для мужа",
			photo:
				"https://avatars.mds.yandex.net/i?id=0f138f6dc97425079553ed0d6e3f5f1b-5448159-images-thumbs&ref=rim&n=33&w=225&h=150",
			text: "aslkkfhgbaskjdadhjksfbkajsadjkshfbkjajkhsdbfkjhjkasbdfkjhbvasdkfjadfhjksbaskjdadfjkshbkjaajksdhbfkjhjkasdbfkjfhjkasbdfkjfhjkbasdkfjdfhjkbaskjdadfjkshbakjsadjksghbvfkjgghjkasdvfkfgkhasvdfkfgkvasdfkdfgksvasdkghadfghksbvaksjadjkshbfkjajkshdbfkjhjkasdbfkjfhjkbasdkjdfjkhbasdkjadfjkshbaskdjadhjksfbkjasdadhjksbf",
		},
		{
			id: 4,
			author: "Rerere",
			date: "2019-10-10T03:00:00",
			name: "Благодарность для мужа",
			photo: "https://lordfilmq.club/templates/lordfilm/images/bg.jpg",
			text: "aslkkfhgbaskjdadhjksfbkajsadjkshfbkjajkhsdbfkjhjkasbdfkjhbvasdkfjadfhjksbaskjdadfjkshbkjaajksdhbfkjhjkasdbfkjfhjkasbdfkjfhjkbasdkfjdfhjkbaskjdadfjkshbakjsadjksghbvfkjgghjkasdvfkfgkhasvdfkfgkvasdfkdfgksvasdkghadfghksbvaksjadjkshbfkjajkshdbfkjhjkasdbfkjfhjkbasdkjdfjkhbasdkjadfjkshbaskdjadhjksfbkjasdadhjksbf",
		},
		{
			id: 5,
			author: "Rerere",
			date: "2019-10-10T03:00:00",
			name: "Благодарность для мужа",
			photo: "https://lordfilmq.club/templates/lordfilm/images/bg.jpg",
			text: "aslkkfhgbaskjdadhjksfbkajsadjkshfbkjajkhsdbfkjhjkasbdfkjhbvasdkfjadfhjksbaskjdadfjkshbkjaajksdhbfkjhjkasdbfkjfhjkasbdfkjfhjkbasdkfjdfhjkbaskjdadfjkshbakjsadjksghbvfkjgghjkasdvfkfgkhasvdfkfgkvasdfkdfgksvasdkghadfghksbvaksjadjkshbfkjajkshdbfkjhjkasdbfkjfhjkbasdkjdfjkhbasdkjadfjkshbaskdjadhjksfbkjasdadhjksbf",
		},
		{
			id: 6,
			author: "Rerere",
			date: "2019-10-10T03:00:00",
			name: "Благодарность для мужа",
			photo: "https://lordfilmq.club/templates/lordfilm/images/bg.jpg",
			text: "aslkkfhgbaskjdadhjksfbkajsadjkshfbkjajkhsdbfkjhjkasbdfkjhbvasdkfjadfhjksbaskjdadfjkshbkjaajksdhbfkjhjkasdbfkjfhjkasbdfkjfhjkbasdkfjdfhjkbaskjdadfjkshbakjsadjksghbvfkjgghjkasdvfkfgkhasvdfkfgkvasdfkdfgksvasdkghadfghksbvaksjadjkshbfkjajkshdbfkjhjkasdbfkjfhjkbasdkjdfjkhbasdkjadfjkshbaskdjadhjksfbkjasdadhjksbf",
		},
		{
			id: 7,
			author: "Rerere",
			date: "2019-10-10T03:00:00",
			name: "Благодарность для мужа",
			photo: "https://lordfilmq.club/templates/lordfilm/images/bg.jpg",
			text: "aslkkfhgbaskjdadhjksfbkajsadjkshfbkjajkhsdbfkjhjkasbdfkjhbvasdkfjadfhjksbaskjdadfjkshbkjaajksdhbfkjhjkasdbfkjfhjkasbdfkjfhjkbasdkfjdfhjkbaskjdadfjkshbakjsadjksghbvfkjgghjkasdvfkfgkhasvdfkfgkvasdfkdfgksvasdkghadfghksbvaksjadjkshbfkjajkshdbfkjhjkasdbfkjfhjkbasdkjdfjkhbasdkjadfjkshbaskdjadhjksfbkjasdadhjksbf",
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
};
