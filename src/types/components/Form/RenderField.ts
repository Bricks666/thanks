import { FormField } from ".";

export type RenderField = <T>(field: FormField<T>) => JSX.Element;
