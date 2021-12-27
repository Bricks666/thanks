import React, { FC } from "react";
import classNames from "classnames";
import { SectionHeader } from "../../components/common/SectionHeader";
import { OnlyClassComponent } from "../../types/components";
import { PageWrapper } from "../../components/common/PageWrapper";
import { LoginForm } from "../../components/LoginForm";
import { BlockWrapper } from "../../components/common/BlockWrapper";

export const LoginPage: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(className)}>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Вход</SectionHeader>
					<LoginForm />
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
