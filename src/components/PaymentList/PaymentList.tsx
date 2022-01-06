import React, { FC } from "react";
import { useLoading } from "../../hooks";
import { usePayments } from "../../hooks/usePayments";
import { OnlyClassComponent } from "../../types/components";
import { List } from "../common/List";
import { LoadingWrapper } from "../common/LoadingWrapper";
import { Payment } from "../Payment";

export const PaymentList: FC<OnlyClassComponent> = ({ className }) => {
	const payments = usePayments();
	const isLoading = useLoading("loadingPayments");

	return (
		<LoadingWrapper
			className={className}
			isLoading={isLoading}
			loadingIndicator={<p>Загрузка...</p>}
		>
			<List
				className={className}
				items={payments}
				Card={Payment}
				type="fake"
				indexedBy="id"
			/>
		</LoadingWrapper>
	);
};
