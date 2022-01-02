import React, { FC } from "react";
import { usePayments } from "../../hooks/usePayments";
import { OnlyClassComponent } from "../../types/components";
import { List } from "../common/List";
import { Payment } from "../Payment";

export const PaymentList: FC<OnlyClassComponent> = ({ className }) => {
	const payments = usePayments();

	return (
		<List
			className={className}
			items={payments}
			Card={Payment}
			type="fake"
			indexedBy="id"
		/>
	);
};
