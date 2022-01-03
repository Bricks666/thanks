import { ReactText } from "react";
import { OnlyClassComponent } from "..";

export interface ParagraphComponent extends OnlyClassComponent {
	children: ReactText | ReactText[];
}
