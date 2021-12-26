import { ComponentType, ReactElement } from "react";
import { OnlyClassComponent } from "..";
import { ID } from "../../common";

type ListType = "numbered" | "unnumbered" | "fake";

interface ListProps<T> extends OnlyClassComponent {
	readonly items: T[];
	readonly Card: ComponentType<T>;
	readonly type: ListType;
}

export type ListComponent = <T extends { id: ID }>(
	props: ListProps<T>
) => ReactElement;
