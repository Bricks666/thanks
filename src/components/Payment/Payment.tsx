import React, { FC } from "react";
import { PaymentComponent } from "../../types/components";
import { Paragraph } from "../common/Paragraph";

export const Payment: FC<PaymentComponent> = ({
	className,
	date,
	id,
	status,
	value,
}) => {
	return (
		<article className={className}>
			<Paragraph>Номер: {id}</Paragraph>
			<Paragraph>Сумма: {value}</Paragraph>
			<Paragraph>Дата: {date}</Paragraph>
			<Paragraph>Статус: {status}</Paragraph>
		</article>
	);
};
