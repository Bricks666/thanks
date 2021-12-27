import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../types/components";
import { Logo } from "../common/Logo";
import { Navigation } from "../Navigation";
import { ProfileLink } from "../common/ProfileLink";
import { useIsLogin } from "../../hooks";
import { SaveLink } from "../common/SaveLink";
import { PageWrapper } from "../common/PageWrapper";
import { BlockWrapper } from "../common/BlockWrapper";

export const Header: FC<OnlyClassComponent> = ({ className }) => {
	const isLogin = useIsLogin();

	return (
		<header className={classNames(className)}>
			<PageWrapper>
				<BlockWrapper>
					<h1 className="visibility-hidden">Благодарность маме и папе</h1>
					<Logo />
					<Navigation />
					{isLogin ? (
						<ProfileLink />
					) : (
						<>
							<SaveLink to="/login" saveState={true}>
								Войти
							</SaveLink>{" "}
							или{" "}
							<SaveLink to="/registration" saveState={true}>
								Зарегистрироваться
							</SaveLink>
						</>
					)}
				</BlockWrapper>
			</PageWrapper>
		</header>
	);
};
