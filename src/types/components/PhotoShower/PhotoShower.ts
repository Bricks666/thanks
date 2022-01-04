import { OnlyClassComponent } from "..";
import { URL } from "../../common";

export interface PhotoShowerComponent extends OnlyClassComponent {
	readonly photo: File | null;
	readonly alt: string;
	readonly fallback?: URL | File;
}
