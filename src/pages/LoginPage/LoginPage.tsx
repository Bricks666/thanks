import React, { FC } from "react";
import classNames from "classnames";
import { SectionHeader } from "../../components/common/SectionHeader";
import { OnlyClassComponent } from "../../types/components";
import { Wrapper } from "../../components/common/Wrapper";

export const LoginPage: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(className)}>
			<Wrapper>
				<SectionHeader>Вход</SectionHeader>
			</Wrapper>
		</main>
	);
};