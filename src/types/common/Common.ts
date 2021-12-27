export type ID = number | string;
export type URL = string;
export interface EmptyObject {
	[key: string]: never;
}

export type DateType = string;
export interface MappedObject<Value = string> {
	[key: string]: Value;
}
