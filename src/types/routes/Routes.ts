import { ComponentType } from "react";
import { ID, URL } from "../common";

export interface Route {
	id: ID;
	path: URL;
	Component: ComponentType;
}
