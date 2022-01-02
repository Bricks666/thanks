import { ReactNode } from "react";
import { OnlyClassComponent } from "..";

export interface MoreInfoComponent extends OnlyClassComponent {
	info: string;
	children: ReactNode;
}
