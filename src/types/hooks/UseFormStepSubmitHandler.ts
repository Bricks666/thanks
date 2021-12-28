import { FormSubmitHandler } from "../components";

export type UseFormStepSubmitHandler = <T extends object>(
	step: number,
	title: string
) => FormSubmitHandler<T>;
