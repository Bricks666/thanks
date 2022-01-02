import { URL } from "../common";

export interface NavigationItem {
	readonly path: URL;
	readonly text: string;
}
