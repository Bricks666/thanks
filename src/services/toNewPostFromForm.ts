import { ToNewPostFromForm } from "../types/services/ToNewPostFromForm";

export const toNewPostFromForm: ToNewPostFromForm = (newPostData) => {
	return {
		id: Math.floor(Math.random() * 100),
		author: "admin",
		firstName: newPostData.firstName,
		secondName: newPostData.secondName,
		patronymic: newPostData.patronymic,
		postHeader: newPostData.postHeader,
		briefAboutPerson: newPostData.briefAboutPerson,
		whyThanks: newPostData.whyThanks,
		photo: (newPostData.photo && URL.createObjectURL(newPostData.photo)) || "",
		date: new Date().toISOString(),
	};
};
