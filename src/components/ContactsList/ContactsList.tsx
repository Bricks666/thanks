import React, { FC } from "react";
import { useContacts } from "../../hooks/useContacts";
import { OnlyClassComponent } from "../../types/components";
import { List } from "../common/List";
import { Contact } from "../Contact";

export const ContactsList: FC<OnlyClassComponent> = ({ className }) => {
	const contacts = useContacts();
	return (
		<List
			className={className}
			items={contacts}
			Card={Contact}
			type="datalist"
			indexedBy="id"
		/>
	);
};
