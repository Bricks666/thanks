import React, { FC } from "react";
import { BlockWrapper } from "../../components/common/BlockWrapper";
import { PageWrapper } from "../../components/common/PageWrapper";
import { SectionHeader } from "../../components/common/SectionHeader";
import { CreatePostForm } from "../../components/CreatePostForm";
import { useOnlyAuthUser } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";

export const CreatePostPage: FC<OnlyClassComponent> = ({ className }) => {
	useOnlyAuthUser();
	return (
		<main className={className}>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Оставить благодарность</SectionHeader>
					<CreatePostForm />
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
