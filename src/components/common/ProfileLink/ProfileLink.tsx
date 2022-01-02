import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { OnlyClassComponent } from "../../../types/components";
import { Button } from "../Button";
import { useLogoutHandler } from "../../../hooks/";

export const ProfileLink: FC<OnlyClassComponent> = ({ className }) => {
	const logoutHandler = useLogoutHandler();

	return (
		<section>
			<img alt="Ваше фото профиля" />
			<Link className={classNames(className)} to="/profile">
				Профиль
			</Link>
			<Button type="button" title="Выйти" onClick={logoutHandler}>
				Выйти
			</Button>
		</section>
	);
};
