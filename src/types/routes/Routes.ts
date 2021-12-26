import { ComponentType } from "react";
import { ID, URL } from "../common";

export interface Route {
	readonly id: ID;
	readonly path: URL;
	readonly Component: ComponentType;
}
