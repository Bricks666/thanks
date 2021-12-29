import React, { FC } from "react";
import { useProfile } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { Picture } from "../common/Picture";

export const Profile: FC<OnlyClassComponent> = ({ className }) => {
	const profile = useProfile();
	return (
		<section className={className}>
			<h3>{profile.name}</h3>
			<Picture picture={profile.photo || ""} alt={profile.name} />
		</section>
	);
};
