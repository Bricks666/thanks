export type ID = number | string;
export type URL = string;
export interface EmptyObject {
	[key: string]: never;
}
export type EmptyFunction = () => void | Promise<void>;

export type DateType = string;
export type MappedObject<
	Key extends string | number | symbol = string,
	Value = string
> = Record<Key, Value>;
