import { Post } from "../types/redux";

export const mockPosts: Post[] = [
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
	{
		id: 2,
		author: "admin",
		firstName: "Гардон",
		secondName: "Андреев",
		patronymic: "Андреевич",
		postHeader: "В память о поступках папы",
		briefAboutPerson:
			"Бла бла бла, бла бла, бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла ба бла бла бла",
		whyThanks: "За все то, что она сделала для меня",
		photo:
			"https://storybook.js.org/d1406df7f9ce817ae0e5b3eb5f1bf1f3/example-button-noargs.png",
		date: "2020-10-10T03:00:00",
	},
];
