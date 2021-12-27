import React, { FC } from "react";
import classNames from "classnames";
import { SectionHeader } from "../../components/common/SectionHeader";
import { OnlyClassComponent } from "../../types/components";
import { PageWrapper } from "../../components/common/PageWrapper";
import { BlockWrapper } from "../../components/common/BlockWrapper";

export const NotFoundPage: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(className)}>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Страница не найдена</SectionHeader>
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
