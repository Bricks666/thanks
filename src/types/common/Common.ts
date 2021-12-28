export type ID = number | string;
export type URL = string;
export interface EmptyObject {
	[key: string]: never;
}

export type DateType = string;

export type EmptyFunction = () => void;

export interface MappedObject<Value = string> {
	[key: string]: Value;
}

export type UnReadonly<T> = {
	-readonly [P in keyof T]: T[P];
};
