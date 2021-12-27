import React, { FC } from "react";
import { DateTimeComponent } from "../../../types/components";

export const DateTime: FC<DateTimeComponent> = ({ className, date }) => {
	return (
		<time className={className} dateTime={date}>
			{new Date(date).toLocaleString()}
		</time>
	);
};
