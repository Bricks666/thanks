import { OnlyClassComponent } from "..";
import { URL } from "../../common";

export interface PictureComponent extends OnlyClassComponent {
	readonly picture: URL;
	readonly alt: string;
}
