import React, { FC } from "react";
import { DateTimeComponent } from "../../../types/components";

export const DateTime: FC<DateTimeComponent> = ({
	className,
	date,
	children,
}) => {
	return (
		<time className={className} dateTime={date}>
			{children} {new Date(date).toLocaleString()}
		</time>
	);
};
