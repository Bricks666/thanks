import { OnlyClassComponent } from "..";

export interface ModalWindowComponent extends OnlyClassComponent {
	readonly condition: boolean;
	/* TODO: описать обработчик */
	// readonly close: EmptyFunction;
}
