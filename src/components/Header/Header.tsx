import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../types/components";
import { Logo } from "../common/Logo";
import { Navigation } from "../Navigation";
import { ProfileLink } from "../common/ProfileLink";

export const Header: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<header className={classNames(className)}>
			<h1 className="visibility-hidden">Благодарность маме и папе</h1>
			<Logo />
			<Navigation />
			<ProfileLink />
		</header>
	);
};
