import { ReactText } from "react";
import { OnlyClassComponent } from "..";

export interface ParagraphComponent extends OnlyClassComponent {
	readonly children: ReactText | ReactText[];
}
