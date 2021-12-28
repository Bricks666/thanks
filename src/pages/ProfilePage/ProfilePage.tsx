import React, { FC } from "react";
import { BlockWrapper } from "../../components/common/BlockWrapper";
import { PageWrapper } from "../../components/common/PageWrapper";
import { SectionHeader } from "../../components/common/SectionHeader";
import { OnlyClassComponent } from "../../types/components";

export const ProfilePage: FC<OnlyClassComponent> = () => {
	return (
		<main>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Профиль</SectionHeader>
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
