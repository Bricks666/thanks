import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { OnlyClassComponent } from "../../../types/components";

export const ProfileLink: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<Link className={classNames(className)} to="/profile">
			<img alt="Ваше фото профиля" />
			<p>Профиль</p>
		</Link>
	);
};
