import { ComponentType } from "react";
import { URL } from "../common";

export interface Route {
	readonly path: URL;
	readonly Component: ComponentType;
	readonly isAuth?: boolean;
}
