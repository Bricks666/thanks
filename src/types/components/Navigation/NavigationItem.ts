import { OnlyClassComponent } from "..";
import { NavigationItem } from "../../data";

export interface NavigationItemComponent
	extends OnlyClassComponent,
		NavigationItem {}
