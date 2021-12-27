import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../../types/components";

import ParagraphStyle from "./Paragraph.module.css";

export const Paragraph: FC<OnlyClassComponent> = ({ className, children }) => {
	return (
		<p className={classNames(ParagraphStyle.paragraph, className)}>
			{children}
		</p>
	);
};
