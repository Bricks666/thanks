import { OnlyClassComponent } from "..";
import { EmptyFunction } from "../../common";

export interface ModalWindowComponent extends OnlyClassComponent {
	condition: boolean;
	/* TODO: описать обработчик */
	close: EmptyFunction;
}
