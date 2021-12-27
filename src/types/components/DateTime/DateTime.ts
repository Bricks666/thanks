import { OnlyClassComponent } from "..";
import { DateType } from "../../common";

export interface DateTimeComponent extends OnlyClassComponent {
	readonly date: DateType;
}
