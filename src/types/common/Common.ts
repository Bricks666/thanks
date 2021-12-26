export type ID = number | string;
export type URL = string;
export interface EmptyObject {
	[key: string]: never;
}
export type EmptyFunction = () => void | Promise<void>;

export type DateType = string;
