import React, { FC } from "react";
import { BlockWrapper } from "../../components/common/BlockWrapper";
import { PageWrapper } from "../../components/common/PageWrapper";
import { SectionHeader } from "../../components/common/SectionHeader";
import { InstructionList } from "../../components/InstructionList";
import { OnlyClassComponent } from "../../types/components";

export const InstructionPage: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<main className={className}>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Инструкция по работе</SectionHeader>
					<InstructionList />
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
