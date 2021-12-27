import React, { FC } from "react";
import { Collage } from "../../components/Collage";
import { SectionHeader } from "../../components/common/SectionHeader";
import { PageWrapper } from "../../components/common/PageWrapper";
import { OnlyClassComponent } from "../../types/components";
import { BlockWrapper } from "../../components/common/BlockWrapper";

export const PostsPage: FC<OnlyClassComponent> = () => {
	return (
		<main>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Благодарности</SectionHeader>
					<Collage />
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
