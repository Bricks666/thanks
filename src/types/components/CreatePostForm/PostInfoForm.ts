import { URL } from "../../common";

export interface PostInfoFormValues {
	readonly author: string;
	readonly name: string;
	readonly text: string;
	readonly photo: URL;
}
