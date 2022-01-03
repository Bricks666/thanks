export type Gender = "male" | "female";

export interface CreatePostFormValues {
	firstName: string;
	secondName: string;
	patronymic: string;
	gender: Gender;
	postHeader: string;
	briefAboutPerson: string;
	whyThanks: string;
	photo: File | null;
}
