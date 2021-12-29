import React, { FC } from "react";
import { BlockWrapper } from "../../components/common/BlockWrapper";
import { PageWrapper } from "../../components/common/PageWrapper";
import { SectionHeader } from "../../components/common/SectionHeader";
import { ContactsList } from "../../components/ContactsList";
import { OnlyClassComponent } from "../../types/components";

export const ContactsPage: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<main className={className}>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Контакты</SectionHeader>
					<ContactsList />
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
