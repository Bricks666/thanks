import { ReactNode } from "react";
import { OnlyClassComponent } from "..";

export interface MoreInfoComponent extends OnlyClassComponent {
	readonly info: string;
	readonly children: ReactNode;
}
