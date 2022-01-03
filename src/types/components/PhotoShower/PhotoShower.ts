import { OnlyClassComponent } from "..";
import { URL } from "../../common";

export interface PhotoShowerComponent extends OnlyClassComponent {
	photo: File | null;
  alt: string;
	fallback?: URL | File;
}
