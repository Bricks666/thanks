import { RefObject } from "react";

export type UseHover = <T extends HTMLElement>(ref: RefObject<T>) => boolean;
