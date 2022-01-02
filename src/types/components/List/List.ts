import { ComponentType, ReactElement } from "react";
import { OnlyClassComponent } from "..";
import { AnyObject } from "../../common";

type ListType = "numbered" | "unnumbered" | "fake" | "datalist";

interface ListProps<T> extends OnlyClassComponent {
	readonly items: T[];
	readonly Card: ComponentType<T>;
	readonly type: ListType;
	readonly indexedBy: keyof T;
	readonly itemClassName?: string;
}

export type ListComponent = <T extends AnyObject>(
	props: ListProps<T>
) => ReactElement;
