import { OnlyClassComponent } from "..";
import { NavigationItem } from "../../redux";

export interface NavigationItemComponent
	extends OnlyClassComponent,
		NavigationItem {}
