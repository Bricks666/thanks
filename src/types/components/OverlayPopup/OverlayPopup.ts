import { MouseEventHandler } from "react";

export interface OverlayPopupComponent {
	readonly isOpen: boolean;
	readonly closeHandler: MouseEventHandler<HTMLDivElement>;
}
