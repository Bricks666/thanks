import { ReactElement, ReactNode } from "react";
import { OnlyClassComponent } from "..";

export interface LoadingWrapperComponent extends OnlyClassComponent {
	readonly isLoading: boolean;
	readonly loadingIndicator: ReactElement;
	readonly children: ReactNode | ReactNode[];
}
