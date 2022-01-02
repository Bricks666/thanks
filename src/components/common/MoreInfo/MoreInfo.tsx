import React, { FC, useRef } from "react";
import { useHover } from "../../../hooks";
import { MoreInfoComponent } from "../../../types/components";

export const MoreInfo: FC<MoreInfoComponent> = ({
	className,
	info,
	children,
}) => {
	const question = useRef<HTMLDivElement>(null);
	const isHover = useHover(question);
	/* TODO: Переделать на summary и details */
	return (
		<div className={className}>
			{children}
			<div ref={question}>Знак вопроса</div>
			{isHover && <div>{info}</div>}
		</div>
	);
};
