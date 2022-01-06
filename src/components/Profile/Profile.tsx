import React, { FC } from "react";
import { useLoading, useProfile } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { LoadingWrapper } from "../common/LoadingWrapper";
import { Picture } from "../common/Picture";

import ProfileStyle from "./Profile.module.css";

export const Profile: FC<OnlyClassComponent> = ({ className }) => {
	const profile = useProfile();
	const isLoading = useLoading("loadingProfile");

	return (
		<section className={className}>
			<LoadingWrapper
				isLoading={isLoading}
				loadingIndicator={<p>Загрузка...</p>}
			>
				<h3>{profile.name}</h3>
				<Picture
					className={ProfileStyle.photo}
					picture={profile.photo || ""}
					alt={profile.name}
				/>
			</LoadingWrapper>
		</section>
	);
};
