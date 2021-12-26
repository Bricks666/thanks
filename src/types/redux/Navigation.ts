import { ID, URL } from "../common";

export interface NavigationItem {
	readonly id: ID;
	readonly path: URL;
	readonly text: string;
}
