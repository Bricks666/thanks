import classNames from "classnames";
import React, { FC } from "react";
import { OnlyClassComponent } from "../../types/components";
import { BlockWrapper } from "../common/BlockWrapper";
import { Logo } from "../common/Logo";
import { PageWrapper } from "../common/PageWrapper";
import { SectionHeader } from "../common/SectionHeader";

export const Footer: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<footer className={classNames(className)}>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Подвал</SectionHeader>
					<Logo />
				</BlockWrapper>
			</PageWrapper>
		</footer>
	);
};
