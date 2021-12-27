import React, { FC } from "react";
import classNames from "classnames";
import { SectionHeader } from "../../components/common/SectionHeader";
import { OnlyClassComponent } from "../../types/components";
import { PageWrapper } from "../../components/common/PageWrapper";
import { RegistrationForm } from "../../components/RegistrationForm";
import { BlockWrapper } from "../../components/common/BlockWrapper";

export const RegistrationPage: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(className)}>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>Регистрация</SectionHeader>
					<RegistrationForm />
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
