import { OnlyClassComponent } from "..";
import { URL } from "../../common";

export interface SaveLinkComponent extends OnlyClassComponent {
	readonly to: URL;
	readonly saveState?: boolean;
}
