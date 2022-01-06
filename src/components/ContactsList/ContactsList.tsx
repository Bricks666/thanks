import React, { FC } from "react";
import { useContacts, useLoading } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { List } from "../common/List";
import { LoadingWrapper } from "../common/LoadingWrapper";
import { Contact } from "../Contact";

export const ContactsList: FC<OnlyClassComponent> = ({ className }) => {
	const contacts = useContacts();
	const isLoading = useLoading("loadingContacts");

	return (
		<LoadingWrapper isLoading={isLoading} loadingIndicator={<p>Загрузка...</p>}>
			<List
				className={className}
				items={contacts}
				Card={Contact}
				type="datalist"
				indexedBy="id"
			/>
		</LoadingWrapper>
	);
};
