import classNames from "classnames";
import React, { FC } from "react";
import { PictureComponent } from "../../../types/components";

import PictureStyle from "./Picture.module.css";

export const Picture: FC<PictureComponent> = ({ className, alt, picture }) => {
	return (
		<img
			className={classNames(PictureStyle.picture, className)}
			src={picture}
			alt={alt}
		/>
	);
};
