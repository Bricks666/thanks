import { OnlyClassComponent } from "..";
import { EmptyFunction } from "../../common";

export interface ModalWindowComponent extends OnlyClassComponent {
	readonly condition: boolean;
	/* TODO: описать обработчик */
	readonly close: EmptyFunction;
}
