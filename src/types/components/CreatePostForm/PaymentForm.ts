import { DateType } from "../../common";

export interface PaymentFormValues {
	readonly card: string;
	readonly owner: string;
	readonly date: DateType;
	readonly cvv: string;
}
