export type Gender = "male" | "female";

export interface CreatePostFormValues {
	readonly firstName: string;
	readonly secondName: string;
	readonly patronymic: string;
	readonly gender: Gender;
	readonly postHeader: string;
	readonly briefAboutPerson: string;
	readonly whyThanks: string;
	readonly photo: File | null;
}
