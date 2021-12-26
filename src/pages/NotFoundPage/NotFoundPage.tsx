import React, { FC } from "react";
import classNames from "classnames";
import { SectionHeader } from "../../components/common/SectionHeader";
import { OnlyClassComponent } from "../../types/components";

export const NotFoundPage: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(className)}>
			<SectionHeader>Страница не найдена</SectionHeader>
		</main>
	);
};
