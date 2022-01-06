export type ID = number | string;
export type URL = string;
export interface EmptyObject {
	[key: string]: never;
}

export type DateType = string;

export type SimpleFunction<R> = () => R;

export interface MappedObject<Value = string> {
	[key: string]: Value;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = MappedObject<any>;

export type UnReadonly<T> = {
	-readonly [P in keyof T]: T[P];
};
