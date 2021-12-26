import React, { FC } from "react";
import classNames from "classnames";
import { SectionHeader } from "../../components/common/SectionHeader";
import { OnlyClassComponent } from "../../types/components";
import { Wrapper } from "../../components/common/Wrapper";

export const NotFoundPage: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(className)}>
			<Wrapper>
				<SectionHeader>Страница не найдена</SectionHeader>
			</Wrapper>
		</main>
	);
};
