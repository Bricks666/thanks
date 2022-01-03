import classNames from "classnames";
import React, { FC, memo } from "react";
import { PhotoShowerComponent } from "../../../types/components";

import PhotoShowerStyle from "./PhotoShower.module.css";

export const PhotoShower: FC<PhotoShowerComponent> = memo(
	({ photo, fallback, alt, className }) => {
		const photoURL = photo && URL.createObjectURL(photo);
		const fallbackURL =
			typeof fallback === "string"
				? fallback
				: fallback && URL.createObjectURL(fallback);
		const totalURL = photoURL || fallbackURL || undefined;

		return (
			<object
				className={classNames(PhotoShowerStyle.photoShower, className)}
				data={totalURL}
			>
				{alt}
			</object>
		);
	}
);
