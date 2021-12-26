import { OnlyClassComponent } from "..";
import { URL } from "../../common";

export interface PictureComponent extends OnlyClassComponent {
	picture: URL;
	alt: string;
}
