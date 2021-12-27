import { MouseEventHandler } from "react";
import { OnlyClassComponent } from "..";

export interface MainPopupComponent extends OnlyClassComponent {
	readonly isOpen: boolean;
	/* TODO: описать обработчик */
	readonly closeHandler: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}
